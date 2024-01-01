// Libraries
import Image from "next/image";

// Components
import CardWrapper from "@/components/ui/cardWrapper/CardWrapper";

// Icons
import dateIcon from "@/assets/icons/dateIcon.svg";

// Styles
import Style from "./Transactions.module.css";

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
        <Transaction />
      </div>
    </CardWrapper>
  );
};

const Transaction: React.FC = () => {
  return <div>
    
  </div>;
};

export default Transactions;
