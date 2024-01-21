import { Metadata } from "next";

// Components
import TablesView from "./TablesView";
import LoaderWrapper from "@/components/advanced/loader/LoaderWrapper";

export const metadata: Metadata = {
  title: "Tables",
};

const Tables: React.FC = () => {
  return (
    <LoaderWrapper>
      <TablesView />
    </LoaderWrapper>
  );
};

export default Tables;
