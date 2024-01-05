// Components
import UserDetails from "./components/userDetails/UserDetails";
import Welcome from "./components/welcome/Welcome";

// Styles
import Style from "./ProfileView.module.css";

const ProfileView: React.FC = () => {
  return (
    <main>
      <section className={Style.userDetails}>
        <UserDetails />
      </section>
      <section className={Style.welcomeWrapper}>
        <Welcome />
      </section>
    </main>
  );
};

export default ProfileView;
