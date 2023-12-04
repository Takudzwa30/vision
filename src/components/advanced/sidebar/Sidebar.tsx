import React from "react";
import { usePathname } from "next/navigation";
import { IoIosCheckboxOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

// Images
import sideBarLogo from "@/assets/logos/sideBarLogo.png";

import Style from "./Sidebar.module.css";
import Image from "next/image";
import Link from "next/link";

interface Route {
  path: string;
  title: string;
  subRoutes: string[]; // Change this to the actual type of subRoutes if applicable
}

interface Category {
  categoryTitle: string;
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
    <div className={Style.sideBar}>
      <div className={Style.logoWrapper}>
        <Image src={sideBarLogo} alt="Logo" />
      </div>
      <SidebarLinks
        setSidebarIsOpen={setSidebarIsOpen}
        sidebarIsOpen={sidebarIsOpen}
        sidebarCategories={sidebarCategories}
      />
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
          <div className={Style.divider} />
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
    <div>
      <li
        style={{
          marginBottom: route.subRoutes.length !== 0 ? "0" : "",
        }}
        className={
          pathname === "/route1" ? Style.linkWrapperActive : Style.linkWrapper
        }
        onClick={() => {
          setSidebarIsOpen(false);
        }}
      >
        <div className={Style.iconWrapper}>
          <IoIosCheckboxOutline className={Style.icon} />
        </div>
        <Link href={route.path}>{route.title}</Link>
      </li>
    </div>
  );
};

export default Sidebar;
