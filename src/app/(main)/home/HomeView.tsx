// Components
import InfoCards from "./components/infoCards/InfoCards";
import UserDetails from "./components/userDetails/UserDetails";

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
        <div className={Style.two}></div>
        <div className={Style.two}></div>
      </section>
    </main>
  );
};
export default HomeView;
