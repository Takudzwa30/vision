"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

import React, { useState } from "react";

import { Sidebar, Navbar } from "@/components/advanced";

import Style from "./layout.module.css";
import "@/assets/css/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Example data for sidebarCategories
  const sidebarCategories = [
    {
      categoryTitle: "Category 1",
      routes: [
        { path: "/route1", title: "Dashboard", subRoutes: [] },
        { path: "/route2", title: "Route 2", subRoutes: [] },
      ],
    },
  ];

  return (
    <html lang="en">
      <head>
        {/* <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3NL266TGLE"
        ></Script>
        <Script id="head-ga">
          {`

                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-3NL266TGLE');

           `}
        </Script> */}
      </head>
      <body>
        <div className={Style.mainLayout}>
          <div className={menuOpen ? Style.sideBarOpen : Style.sideBar}>
            <Sidebar
              sidebarIsOpen={menuOpen}
              setSidebarIsOpen={setMenuOpen}
              sidebarCategories={sidebarCategories}
            />
          </div>
          <div className={Style.contentNavBar}>
            <Navbar />
            <div className={Style.outlet}>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
