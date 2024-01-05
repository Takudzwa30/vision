"use client";

// Libraries
import CircularProgress from "@mui/material/CircularProgress";

// COmponents
import CardWrapper from "@/components/ui/cardWrapper/CardWrapper";

// Styles
import Style from "./CarInfo.module.css";

const CarInfo: React.FC = () => {
  return (
    <CardWrapper>
      <div className={Style.titles}>
        <h5>Car Informations</h5>
        <p>Hello, Mark Johnson! Your Car is ready.</p>
      </div>
      <div className={Style.progressWrapper}>
        <CircularProgress
          variant="determinate"
          style={{
            strokeLinecap: "round",
          }}
          value={70}
          size={
            window?.innerWidth >= 1300
              ? 200
              : window?.innerWidth >= 768
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
    </CardWrapper>
  );
};

export default CarInfo;
