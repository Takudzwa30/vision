import React from "react";

// Libraries
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Icons
import { IoHelpCircle } from "react-icons/io5";

// Images
import sideBarLogo from "@/assets/logos/sideBarLogo.png";

import Style from "./Sidebar.module.css";

// Types
interface Route {
  path: string;
  title: string;
  subRoutes?: string[];
  icon: React.ReactElement;
}

interface Category {
  categoryTitle?: string;
  routes: Route[];
}

interface SidebarProps {
  setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarIsOpen: boolean;
  sidebarCategories: Category[];
}

interface NavMenuProps {
  route: Route;
  setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarIsOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  setSidebarIsOpen,
  sidebarIsOpen,
  sidebarCategories,
}) => {
  return (
    <div className={Style.sideBarWrapper}>
      <div className={Style.sideBar}>
        <div>
          <div className={Style.logoWrapper}>
            <Image src={sideBarLogo} alt="Logo" />
            <div
              className={Style.hamburgerActive}
              onClick={() => {
                setSidebarIsOpen((old: boolean) => !old);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <SidebarLinks
            setSidebarIsOpen={setSidebarIsOpen}
            sidebarIsOpen={sidebarIsOpen}
            sidebarCategories={sidebarCategories}
          />
        </div>
        <div className={Style.sideBarBottom}>
          <div className={Style.help}>
            <IoHelpCircle />
          </div>
          <h5>Need help?</h5>
          <h6>Please check our docs</h6>
          <div className={Style.documentation}>DOCUMENTATION</div>
        </div>
      </div>
    </div>
  );
};

interface SidebarLinksProps {
  setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarIsOpen: boolean;
  sidebarCategories: Category[];
}

const SidebarLinks: React.FC<SidebarLinksProps> = ({
  setSidebarIsOpen,
  sidebarIsOpen,
  sidebarCategories,
}) => {
  return (
    <div>
      {sidebarCategories.map((category, i) => (
        <div key={i}>
          <div
            className={Style.divider}
            style={{
              display: !category.categoryTitle ? "" : "none",
            }}
          />
          <p className={Style.categoryHeading}>{category.categoryTitle}</p>
          <ul>
            {category.routes.map((route) => (
              <NavMenu
                key={route.path}
                setSidebarIsOpen={setSidebarIsOpen}
                route={route}
                sidebarIsOpen={sidebarIsOpen}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

interface NavMenuProps {
  route: Route;
  setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMenu: React.FC<NavMenuProps> = ({ route, setSidebarIsOpen }) => {
  const pathname = usePathname();

  return (
    <Link
      className={
        pathname === route.path ? Style.linkWrapperActive : Style.linkWrapper
      }
      href={route.path}
      onClick={() => {
        setSidebarIsOpen(false);
      }}
    >
      <div className={Style.iconWrapper}>{route.icon} </div>
      <div className={Style.linkTitle}>{route.title}</div>
    </Link>
  );
};

export default Sidebar;
