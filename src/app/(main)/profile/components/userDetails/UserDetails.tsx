"use client";

// Libraries
import { useState } from "react";
import Image from "next/image";

// Components
import CardWrapper from "@/components/ui/cardWrapper/CardWrapper";

// Images
import profilePic from "@/assets/images/profilePictureDummy.png";

// Icons
import pen from "@/assets/icons/pen.svg";
import overviewIcon from "@/assets/icons/overviewIcon.svg";
import teamsIcon from "@/assets/icons/teamsIcon.svg";
import projectsIcon from "@/assets/icons/projectsIcon.svg";

// Styles
import Style from "./UserDetails.module.css";

const UserDetails: React.FC = () => {
  return (
    <CardWrapper>
      <div className={Style.mainWrapper}>
        <Details />
        <Tabs />
      </div>
    </CardWrapper>
  );
};

const Details: React.FC = () => {
  return (
    <div className={Style.detailsWrapper}>
      <div className={Style.imageWrapper}>
        <Image alt="profilePicture" src={profilePic} />
        <div className={Style.editPicture}>
          <Image alt="editPicture" src={pen} />
        </div>
      </div>
      <div className={Style.details}>
        <h5>Mark Johnson</h5>
        <p>mark@simmmple.com</p>
      </div>
    </div>
  );
};

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<0 | 1 | 2>(0);
  return (
    <div className={Style.tabs}>
      <div
        onClick={() => setActiveTab(0)}
        className={activeTab === 0 ? Style.tabActive : Style.tab}
      >
        <Image alt="overiview" src={overviewIcon} />
        <p>OVERVIEW</p>
      </div>
      <div
        onClick={() => setActiveTab(1)}
        className={activeTab === 1 ? Style.tabActive : Style.tab}
      >
        <Image alt="overiview" src={teamsIcon} />
        <p>TEAMS</p>
      </div>
      <div
        onClick={() => setActiveTab(2)}
        className={activeTab === 2 ? Style.tabActive : Style.tab}
      >
        <Image alt="overiview" src={projectsIcon} />
        <p>PROJECTS</p>
      </div>
    </div>
  );
};

export default UserDetails;
