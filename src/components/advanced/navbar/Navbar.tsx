"use client";

// Hooks
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Routes
import { sidebarCategories } from "@/data/routes";

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

  // Hooks
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Functions
  const getPageTitle = (currentPath: string) => {
    for (const category of sidebarCategories) {
      for (const route of category.routes) {
        if (route.path === currentPath) {
          return route.title;
        }
      }
    }
    return "Unknown Page";
  };

  const pageTitle = getPageTitle(pathname);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isScrolled ? Style.navBarScrolled : Style.navBarWrapper}>
      <div className={Style.title}>{pageTitle}</div>
      <div className={Style.nav}>
        <div
          className={sidebarIsOpen ? Style.hamburgerActive : Style.hamburger}
          onClick={() => {
            setSidebarIsOpen((old: boolean) => !old);
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
