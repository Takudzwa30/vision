import { Metadata } from "next";

// Components
import ProfileView from "./ProfileView";
import LoaderWrapper from "@/components/advanced/loader/LoaderWrapper";

export const metadata: Metadata = {
  title: "Profile",
};

const Profile: React.FC = () => {
  return (
    <LoaderWrapper>
      <ProfileView />
    </LoaderWrapper>
  );
};

export default Profile;
