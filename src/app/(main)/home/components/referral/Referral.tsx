"use client";

// Libraries
import CircularProgress from "@mui/material/CircularProgress";

// Components
import CardWrapper from "@/components/ui/cardWrapper/CardWrapper";

// Styles
import Style from "./Referral.module.css";

interface CardProps {
  title: string;
  value: number;
}

const data: CardProps[] = [
  {
    title: "Invited",
    value: 145,
  },
  {
    title: "Bonus",
    value: 1465,
  },
];

const Referral: React.FC = () => {
  const getWindowWidth = () =>
    typeof window !== "undefined" ? window.innerWidth : 0;
  return (
    <CardWrapper>
      <h6 className={Style.title}>Referral Tracking</h6>
      <div className={Style.wrapper}>
        <div>
          {data.map((item, index) => {
            return <Card key={index} title={item.title} value={item.value} />;
          })}
        </div>
        <div className={Style.progressWrapper}>
          <CircularProgress
            variant="determinate"
            style={{
              strokeLinecap: "round",
            }}
            value={70}
            size={
              getWindowWidth() >= 1300
                ? 200
                : getWindowWidth() >= 768
                ? 170
                : 200
            }
            color="success"
          />
          <div className={Style.score}>
            <p>Safety</p>
            <h1>9.3</h1>
            <p>Total Score</p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

const Card: React.FC<CardProps> = ({ title, value }) => {
  return (
    <div className={Style.card}>
      <p>{title}</p>
      <h5>{value}</h5>
    </div>
  );
};

export default Referral;
