// Icons
import { IoMdArrowForward } from "react-icons/io";

// Styles
import Style from "./Welcome.module.css";

const Welcome: React.FC = () => {
  return (
    <div className={Style.welcome}>
      <div>
        <h4>Welcome back!</h4>
        <p>Nice to see you, Mark Johnson!</p>
      </div>
      <div className={Style.record}>
        Turn on your car <IoMdArrowForward />
      </div>
    </div>
  );
};

export default Welcome;
