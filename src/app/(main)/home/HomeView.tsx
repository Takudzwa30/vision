// Components
import InfoCards from "./components/infoCards/InfoCards";
import UserDetails from "./components/userDetails/UserDetails";
import Satisfaction from "./components/satisfaction/Satisfaction";
import Referral from "./components/referral/Referral";

// Styles
import Style from "./HomeView.module.css";
import Sales from "./components/sales/Sales";

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
      <section>
        <Sales />
      </section>
    </main>
  );
};
export default HomeView;
