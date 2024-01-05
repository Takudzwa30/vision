// Components
import UserDetails from "./components/userDetails/UserDetails";

// Styles
import Style from "./ProfileView.module.css";

const ProfileView: React.FC = () => {
  return (
    <main>
      <section className={Style.userDetails}>
        <UserDetails />
      </section>
    </main>
  );
};

export default ProfileView;
