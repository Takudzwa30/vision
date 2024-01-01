// Components
import CardDetails from "./components/cardDetails/CardDetails";
import Invoices from "./components/invoices/Invoices";

// Styles
import Style from "./BillingView.module.css";

const BillingView: React.FC = () => {
  return (
    <main>
      <section className={Style.cardAndInvoices}>
        <CardDetails />
        <Invoices />
      </section>
    </main>
  );
};

export default BillingView;
