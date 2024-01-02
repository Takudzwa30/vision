// Libraries
import Image from "next/image";

// Components
import CardWrapper from "@/components/ui/cardWrapper/CardWrapper";

// Icons
import dateIcon from "@/assets/icons/dateIcon.svg";
import { IoArrowDownOutline } from "react-icons/io5";
import { FaExclamation } from "react-icons/fa6";

// Styles
import Style from "./Transactions.module.css";

// Data
type Transaction = {
  title: string;
  status: "increase" | "decrease" | "pending";
  date: string;
  value?: number; // Value is optional for pending transactions
};

type Category = {
  categoryTitle: string;
  transactions: Transaction[];
};

const data: Category[] = [
  {
    categoryTitle: "NEWEST",
    transactions: [
      {
        title: "Netflix",
        status: "decrease",
        date: "27 March 2020, at 12:30 PM",
        value: 2500,
      },
      {
        title: "Apple",
        status: "increase",
        date: "27 March 2020, at 12:30 PM",
        value: 3800,
      },
    ],
  },
  {
    categoryTitle: "YESTERDAY",
    transactions: [
      {
        title: "Stripe",
        status: "increase",
        date: "26 March 2020, at 13:45 PM",
        value: 800,
      },
      {
        title: "HubSpot",
        status: "increase",
        date: "26 March 2020, at 12:30 PM",
        value: 1800,
      },
      {
        title: "Webflow",
        status: "pending",
        date: "26 March 2020, at 05:00 AM",
      },
      {
        title: "Microsoft",
        status: "decrease",
        date: "25 March 2020, at 16:30 PM",
        value: 987,
      },
    ],
  },
];

const Transactions: React.FC = () => {
  return (
    <CardWrapper>
      <div className={Style.heading}>
        <h5>Your Transactions</h5>
        <div className={Style.date}>
          <Image alt="date Icon" src={dateIcon} />
          <p>23 - 30 March 2020</p>
        </div>
      </div>
      <div className={Style.transactionsGrid}>
        {data.map((item, index) => {
          return (
            <Transaction
              key={index}
              categoryTitle={item.categoryTitle}
              transactions={item.transactions}
            />
          );
        })}
      </div>
    </CardWrapper>
  );
};

const Transaction: React.FC<Category> = ({ categoryTitle, transactions }) => {
  return (
    <>
      <h6 className={Style.categoryTitle}>{categoryTitle}</h6>
      {transactions.map((item, index) => {
        return (
          <div key={index} className={Style.transaction}>
            <div className={Style.subWrapper}>
              <div className={Style.pending}>
                {item.status === "pending" ? (
                  <FaExclamation />
                ) : (
                  <IoArrowDownOutline />
                )}
              </div>
              <div className={Style.transactionInfo}>
                <h6>{item.title}</h6>
                <p>{item.date}</p>
              </div>
            </div>
            {item.status === "pending" ? (
              <p className={Style.pendingValue}>Pending</p>
            ) : (
              <p
                className={
                  item.status === "increase"
                    ? Style.positiveValue
                    : Style.negativeValue
                }
              >
                {item.status === "increase" ? "+" : "-"}
                {item.value}
              </p>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Transactions;
