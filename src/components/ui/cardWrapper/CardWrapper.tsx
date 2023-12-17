import { ReactNode } from "react";

// Styles
import Style from "./CardWrapper.module.css";

const CardWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={Style.cardWrapper}>{children}</div>;
};

export default CardWrapper;
