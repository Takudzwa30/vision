// Components
import InfoCards from "./components/infoCards/InfoCards";
import UserDetails from "./components/userDetails/UserDetails";
import Satisfaction from "./components/satisfaction/Satisfaction";
import Referral from "./components/referral/Referral";
import Sales from "./components/sales/Sales";
import Users from "./components/users/Users";
import Orders from "./components/orders/Orders";

// Styles
import Style from "./HomeView.module.css";

const HomeView: React.FC = () => {
  return (
    <main>
      <section className={Style.infoCards}>
        <InfoCards />
      </section>
      <section className={Style.userDetails}>
        <UserDetails />
        <Satisfaction />
        <Referral />
      </section>
      <section className={Style.salesAndUsers}>
        <Sales />
        <Users />
      </section>
      <section className={Style.projectsAndOrders}>
        <Orders />
      </section>
    </main>
  );
};
export default HomeView;
