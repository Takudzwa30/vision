import CircularProgress from "@mui/material/CircularProgress";

import { IoHappy } from "react-icons/io5";

// Components
import CardWrapper from "@/components/ui/cardWrapper/CardWrapper";

// Styles
import Style from "./Satisfaction.module.css";

const Satisfaction: React.FC = () => {
  return (
    <CardWrapper>
      <div className={Style.satisfactionWrapper}>
        <h6>Satisfaction Rate</h6>
        <p>From all projects</p>
      </div>
      <div className={Style.progressWrapper}>
        <CircularProgress
          variant="determinate"
          style={{
            marginBottom: "20px",
            borderRadius: "50%",
            strokeLinecap: "round",
          }}
          value={90}
          size={170}
          color="info"
        />
        <div className={Style.progressBackground}>
          <IoHappy size="30px" color="#fff" />
        </div>
      </div>
      <div className={Style.basedOn}>
        <p>0%</p>
        <div>
          <h4>95%</h4>
          <p>Based on likes</p>
        </div>
        <p>100%</p>
      </div>
    </CardWrapper>
  );
};

export default Satisfaction;
