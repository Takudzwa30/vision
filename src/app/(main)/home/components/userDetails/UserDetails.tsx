// Icons
import { IoMdArrowForward } from "react-icons/io";

// Styles
import Style from "./UserDetails.module.css";

const UserDetails: React.FC = () => {
  return (
    <div className={Style.userWrapper}>
      <h6>Welcome back,</h6>
      <h3>Mark Johnson</h3>
      <h5>
        Glad to see you again!
        <br />
        Ask me anything.
      </h5>
      <div className={Style.record}>
        Tap to record
        <IoMdArrowForward />
      </div>
    </div>
  );
};

export default UserDetails;
