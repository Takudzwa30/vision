// Metadata
import type { Metadata } from "next";

// Components
import { LayoutWrapper } from "@/components/advanced";

// Fonts
import { Inter } from "next/font/google";
// TODO : CHECK FOR THE DESIRED FONT IN THE NEXT/FONT
const inter = Inter({ subsets: ["latin"] });

// Styles
import "@/assets/css/index.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Vision",
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
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
