// Fonts
import { Inter } from "next/font/google";
// TODO : CHECK FOR THE DESIRED FONT IN THE NEXT/FONT
const inter = Inter({ subsets: ["latin"] });

// Styles
import Style from "./layout.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={Style.authWrapper}>
      <aside className={Style.imgWrapper}>
        <h5>INSPIRED BY THE FUTURE:</h5>
        <h3>THE VISION UI DASHBOARD</h3>
      </aside>
      <aside className={Style.content}> {children}</aside>
    </main>
  );
}
