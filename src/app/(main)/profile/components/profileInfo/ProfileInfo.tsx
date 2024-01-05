// Components
import CardWrapper from "@/components/ui/cardWrapper/CardWrapper";

// Icons
import { IoLogoFacebook } from "react-icons/io5";
import { RiTwitterXLine, RiInstagramLine } from "react-icons/ri";

// Styles
import Style from "./ProfileInfo.module.css";

const ProfileInfo: React.FC = () => {
  // TODO : add social media links
  return (
    <CardWrapper>
      <div className={Style.infoWrapper}>
        <h5>Profile Information</h5>
        <p>
          Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer is
          no. If two equally difficult paths, choose the one more painful in the
          short term (pain avoidance is creating an illusion of equality).
        </p>
        <div className={Style.separator} />
        <div className={Style.infoGrid}>
          <div className={Style.info}>
            <p>
              Full Name: <span>Mark Johnson</span>
            </p>
          </div>
          <div className={Style.info}>
            <p>
              Mobile: <span>(44) 123 1234 123</span>
            </p>
          </div>
          <div className={Style.info}>
            <p>
              Email: <span>mark@simmmple.com</span>
            </p>
          </div>
          <div className={Style.info}>
            <p>
              Location: <span>United States</span>
            </p>
          </div>
          <div className={Style.info}>
            <p>
              Social Media:{" "}
              <span className={Style.icons}>
                <IoLogoFacebook />
                <RiTwitterXLine />
                <RiInstagramLine />
              </span>
            </p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default ProfileInfo;
