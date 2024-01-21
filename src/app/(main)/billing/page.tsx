import { Metadata } from "next";

// Components
import BillingView from "./BillingView";
import LoaderWrapper from "@/components/advanced/loader/LoaderWrapper";

export const metadata: Metadata = {
  title: "Billing",
};

const Billing: React.FC = () => {
  return (
    <LoaderWrapper>
      <BillingView />
    </LoaderWrapper>
  );
};

export default Billing;
