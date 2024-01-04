// Libraries
import Image from "next/image";

// Components
import CardWrapper from "@/components/ui/cardWrapper/CardWrapper";

// Images
import circles from "@/assets/images/creditCardCircles.png";
import masterCardIcon from "@/assets/icons/masterCardIcon.svg";
import visaIcon from "@/assets/icons/visaIcon.svg";
import pen from "@/assets/icons/pen.svg";

// Icons
import greenTower from "@/assets/icons/greenTower.png";

// Styles
import Style from "./CardDetails.module.css";

const CardDetails: React.FC = () => {
  return (
    <div>
      <section className={Style.cardDetails}>
        <CreditCard />
        <CreditBalance />
      </section>
      <PaymentMethod />
    </div>
  );
};

const CreditCard: React.FC = () => {
  return (
    <div className={Style.creditCard}>
      <div className={Style.title}>
        <h5>Vision UI</h5>
        <Image alt="card" src={circles} />
      </div>
      <div>
        <h4>7812 2139 0823 XXXX</h4>
        <div className={Style.detailsWrapper}>
          <div>
            <p>VALID THRU</p>
            <h6>05/24</h6>
          </div>
          <div>
            <p>VALID THRU</p>
            <h6>05/24</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

const CreditBalance: React.FC = () => {
  return (
    <CardWrapper>
      <div className={Style.creditBalance}>
        <p>Credit Balance</p>
        <h3>$25,215</h3>
      </div>
      <p className={Style.taxesTitle}>NEWEST</p>
      <div className={Style.taxes}>
        <div>
          <Image src={greenTower} alt="tower" />
          <div className={Style.taxValues}>
            <p>Bill & Taxes</p>
            <p>Today, 16:36</p>
          </div>
        </div>
        <p>-$154.50</p>
      </div>
    </CardWrapper>
  );
};

const PaymentMethod: React.FC = () => {
  return (
    <CardWrapper>
      <div className={Style.paymentHeading}>
        <h5>Payment Method</h5>
        <div className={Style.addNewCard}>ADD A NEW CARD</div>
      </div>
      <div className={Style.paymentGrid}>
        <div className={Style.paymentCard}>
          <div>
            <Image src={masterCardIcon} alt="visa Card" />
            <p>7812 2139 0823 XXXX</p>
          </div>
          <Image src={pen} alt="pen" />
        </div>
        <div className={Style.paymentCard}>
          <div>
            <Image src={visaIcon} alt="visa Card" />
            <p>7812 2139 0823 XXXX</p>
          </div>
          <Image src={pen} alt="pen" />
        </div>
      </div>
    </CardWrapper>
  );
};

export default CardDetails;
