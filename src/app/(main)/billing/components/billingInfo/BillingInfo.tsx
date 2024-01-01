// Components
import CardWrapper from "@/components/ui/cardWrapper/CardWrapper";

// Icons
import deleteIcon from "@/assets/icons/delete.svg";
import editIcon from "@/assets/icons/pen.svg";

// Styles
import Style from "./BillingInfo.module.css";
import Image from "next/image";

const BillingInfo: React.FC = () => {
  return (
    <CardWrapper>
      <h5 className={Style.title}>Billing Information</h5>
      <div className={Style.billsGrid}>
        <Bill />
      </div>
    </CardWrapper>
  );
};

const Bill = () => {
  return (
    <CardWrapper>
      <div className={Style.bill}>
        <div className={Style.info}>
          <h6>Oliver Liam</h6>
          <p>Company Name: Viking Burrito Email</p>
          <p>Address: oliver@burrito.com VAT</p>
          <p>Number: FRB1235476</p>
        </div>
        <div className={Style.actions}>
          <div className={Style.delete}>
            <Image src={deleteIcon} alt="delete" />
            <p>DELETE</p>
          </div>
          <div className={Style.edit}>
            <Image src={editIcon} alt="delete" />
            <p>EDIT</p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default BillingInfo;
