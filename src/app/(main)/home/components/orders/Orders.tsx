// Components
import CardWrapper from "@/components/ui/cardWrapper/CardWrapper";

// Icons
import { IoIosCheckmarkCircle } from "react-icons/io";
import card from "@/assets/icons/card.svg";
import bell from "@/assets/icons/bell.svg";
import cart from "@/assets/icons/cart.svg";
import xd from "@/assets/icons/xd.svg";
import css3 from "@/assets/icons/css3.svg";

// Styles
import Style from "./Orders.module.css";
import Image from "next/image";

interface CardProps {
  icon: string;
  title: string;
  date: string;
}

const data: CardProps[] = [
  {
    title: "$2400, Design changes",
    icon: bell,
    date: "22 DEC 7:20 PM",
  },
  {
    title: "New order #4219423",
    icon: css3,
    date: "21 DEC 11:21 PM",
  },
  {
    title: "Server Payments for April",
    icon: cart,
    date: "21 DEC 9:28 PM",
  },
  {
    title: "New card added for order #3210145",
    icon: card,
    date: "20 DEC 3:52 PM",
  },
  {
    title: "Unlock packages for Development",
    icon: bell,
    date: "19 DEC 11:35 PM",
  },
  {
    title: "New order #9851258",
    icon: xd,
    date: "18 DEC 4:41 PM",
  },
];

const Orders: React.FC = () => {
  return (
    <CardWrapper>
      <h5 className={Style.title}>Orders Overview</h5>
      <div className={Style.stats}>
        <IoIosCheckmarkCircle />
        <p>
          +30% <span>this month</span>
        </p>
      </div>
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            title={item.title}
            icon={item.icon}
            date={item.date}
          />
        );
      })}
    </CardWrapper>
  );
};

const Card: React.FC<CardProps> = ({ icon, title, date }) => {
  return (
    <div className={Style.card}>
      <Image alt="icon" src={icon} />
      <div>
        <h6>{title}</h6>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Orders;
