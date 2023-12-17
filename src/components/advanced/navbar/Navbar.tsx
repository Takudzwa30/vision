// Styles
import Style from "./Navbar.module.css";

const Navbar: React.FC = () => {
  // TODO : create a wrapper component with common inline padding for all components
  return (
    <div className={Style.navBarWrapper}>
      <div className={Style.title}>Dashboard</div>
    </div>
  );
};

export default Navbar;
