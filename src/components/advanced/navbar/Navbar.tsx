// Styles
import Style from "./Navbar.module.css";

interface SidebarProps {
  setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarIsOpen: boolean;
}

const Navbar: React.FC<SidebarProps> = ({
  sidebarIsOpen,
  setSidebarIsOpen,
}) => {
  // TODO : create a wrapper component with common inline padding for all components
  return (
    <div className={Style.navBarWrapper}>
      <div className={Style.title}>Dashboard</div>
      <div className={Style.nav}>
        <div
          className={sidebarIsOpen ? Style.hamburgerActive : Style.hamburger}
          onClick={() => {
            setSidebarIsOpen((old: boolean) => !old);
            document.documentElement.scrollTop = 0;
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
