import { ReactNode } from "react";

// Components
import CardWrapper from "../../../../components/ui/cardWrapper/CardWrapper";

// Icons
import { IoGlobeOutline } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";

// Styles
import Style from "./InfoCards.module.css";

interface CardProps {
  title: string;
  value: number | string;
  symbol: string;
  icon: ReactNode;
  change: number;
}

const cards: CardProps[] = [
  {
    title: "Today’s Money",
    value: 53000,
    symbol: "$",
    icon: <IoWallet />,
    change: 55,
  },
  {
    title: "Today’s Users",
    value: 2300,
    symbol: "",
    icon: <FaGlobe />,
    change: 5,
  },
  {
    title: "New Clients",
    value: 3052,
    symbol: "+",
    icon: <IoDocumentText />,
    change: 14,
  },
  {
    title: "Total Sales",
    value: "173000",
    symbol: "$",
    icon: <IoCartSharp />,
    change: -8,
  },
];

const InfoCards: React.FC = () => {
  return (
    <div className={Style.infoCardsWrapper}>
      {cards.map((cardDetails, index) => {
        return (
          <Card
            key={index}
            title={cardDetails.title}
            value={cardDetails.value}
            symbol={cardDetails.symbol}
            icon={cardDetails.icon}
            change={cardDetails.change}
          />
        );
      })}
    </div>
  );
};

const Card: React.FC<CardProps> = ({ title, value, symbol, icon, change }) => {
  return (
    <CardWrapper>
      <div className={Style.card}>
        <div>
          <p>{title}</p>
          <div className={Style.values}>
            <h6>
              {symbol}
              {value}
            </h6>
            <div
              className={
                change >= 0 ? Style.positiveChange : Style.negativeChange
              }
            >
              {change < 0 ? change : "+" + change}%
            </div>
          </div>
        </div>
        <div className={Style.iconWrapper}>{icon}</div>
      </div>
    </CardWrapper>
  );
};

export default InfoCards;
