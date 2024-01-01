// Components
import CardWrapper from "@/components/ui/cardWrapper/CardWrapper";

// Icons
import { IoDocumentText } from "react-icons/io5";

// Styles
import Style from "./Invoices.module.css";

interface Invoice {
  date: string;
  invoiceNumber: string;
  amount: number;
}

// Data
const invoices: Invoice[] = [
  {
    date: "March, 01, 2020",
    invoiceNumber: "#MS-415646",
    amount: 180,
  },
  {
    date: "February, 10, 2021",
    invoiceNumber: "#RV-126749",
    amount: 250,
  },
  {
    date: "April, 05, 2020",
    invoiceNumber: "#FB-212562",
    amount: 560,
  },
  {
    date: "June, 25, 2019",
    invoiceNumber: "#QW-103578",
    amount: 120,
  },
  {
    date: "March, 01, 2019",
    invoiceNumber: "#AR-803481",
    amount: 420,
  },
];

const Invoices: React.FC = () => {
  return (
    <CardWrapper>
      <div className={Style.heading}>
        <h5 className={Style.title}>Invoices</h5>
        <div className={Style.addNewCard}>VIEW ALL</div>
      </div>
      <div className={Style.invoices}>
        {invoices.map(() => {
          return (
            <div className={Style.invoice}>
              <div className={Style.invoiceLeft}>
                <h6>March, 01, 2020</h6>
                <p>#MS-415646</p>
              </div>
              <div className={Style.invoiceRight}>
                <p>$180</p>
                <div className={Style.pdf}>
                  <IoDocumentText />
                  <p>PDF</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </CardWrapper>
  );
};

export default Invoices;
