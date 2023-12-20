// Metadata
import type { Metadata } from "next";

// Components
import { LayoutWrapper } from "@/components/advanced";

// Routes
import { sidebarCategories } from "@/data/routes";

// Fonts
import { Inter } from "next/font/google";
// TODO : CHECK FOR THE DESIRED FONT IN THE NEXT/FONT
const inter = Inter({ subsets: ["latin"] });

// Styles
import "@/assets/css/index.css";

// Function
const getTitle = () => {};

export const metadata: Metadata = {
  title: {
    template: "Vision | %s",
    default: "Vision",
  },
  description: "Vision Dashboard built with Next js and Typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
