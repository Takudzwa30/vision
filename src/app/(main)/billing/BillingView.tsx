// Components
import CardDetails from "./components/cardDetails/CardDetails";
import Invoices from "./components/invoices/Invoices";
import Transactions from "./components/transactions/Transactions";
import BillingInfo from "./components/billingInfo/BillingInfo";

// Styles
import Style from "./BillingView.module.css";

const BillingView: React.FC = () => {
  return (
    <main>
      <section className={Style.cardAndInvoices}>
        <CardDetails />
        <Invoices />
      </section>
      <section className={Style.billingAndTransactions}>
        <BillingInfo />
        <Transactions />
      </section>
    </main>
  );
};

export default BillingView;
