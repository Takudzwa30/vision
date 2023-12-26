// Components
import InfoCards from "./components/infoCards/InfoCards";
import UserDetails from "./components/userDetails/UserDetails";
import Satisfaction from "./components/satisfaction/Satisfaction";

// Styles
import Style from "./HomeView.module.css";
import Referral from "./components/referral/Referral";

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
    </main>
  );
};
export default HomeView;
