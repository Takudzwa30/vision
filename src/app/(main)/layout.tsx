// Components
import { LayoutWrapper } from "@/components/advanced";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
