"use client";

// Libraries
import Image from "next/image";
import CircularProgress from "@mui/material/CircularProgress";

// COmponents
import CardWrapper from "@/components/ui/cardWrapper/CardWrapper";

// Icons
import bolt from "@/assets/icons/boltGreen.svg";
import batteryLife from "@/assets/icons/batteryLife.svg";
import blueBolt from "@/assets/icons/blueBolt.svg";
import greenLineChart from "@/assets/icons/greenLineChart.svg";
import blueLineChart from "@/assets/icons/blueLineChart.svg";

// Styles
import Style from "./CarInfo.module.css";

// Types
interface CarInfo {
  title: string;
  value: string;
  picture: string;
}

// Data
const data: CarInfo[] = [
  {
    title: "Battery Health",
    value: "76%",
    picture: batteryLife,
  },
  {
    title: "Efficiency",
    value: "+20%",
    picture: greenLineChart,
  },
  {
    title: "Consumption",
    value: "163W/km",
    picture: blueBolt,
  },
  {
    title: "This Week",
    value: "1.342km",
    picture: blueLineChart,
  },
];

const CarInfo: React.FC = () => {
  return (
    <CardWrapper>
      <div className={Style.titles}>
        <h5>Car Informations</h5>
        <p>Hello, Mark Johnson! Your Car is ready.</p>
      </div>

      <div className={Style.carGrid}>
        <div>
          <div className={Style.progressWrapper}>
            <CircularProgress
              variant="determinate"
              style={{
                strokeLinecap: "round",
                transform: "rotate(70deg)",
              }}
              value={70}
              size={
                // window?.innerWidth >= 1300
                //   ? 200
                //   : window?.innerWidth >= 768
                //   ? 170
                //   :
                   200
              }
              color="success"
            />
            <div className={Style.score}>
              <Image alt="bolt" src={bolt} />
              <h2>68%</h2>
              <p>Current load</p>
            </div>
          </div>
          <div className={Style.time}>
            <h5>0h 58 min</h5>
            <p>Time to full charge</p>
          </div>
        </div>
        <div className={Style.carInfoGrid}>
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                picture={item.picture}
                value={item.value}
                title={item.title}
              />
            );
          })}
        </div>
      </div>
    </CardWrapper>
  );
};

const Card: React.FC<CarInfo> = ({ picture, title, value }) => {
  return (
    <div className={Style.info}>
      <div>
        <p>{title}</p>
        <h4>{value}</h4>
      </div>
      <Image src={picture} alt="icon" />
    </div>
  );
};

export default CarInfo;
