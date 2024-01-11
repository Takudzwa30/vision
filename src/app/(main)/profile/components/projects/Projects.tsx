// Libraries
import Image, { StaticImageData } from "next/image";

// Components
import CardWrapper from "@/components/ui/cardWrapper/CardWrapper";

// Images
import firstCarImg from "@/assets/images/firstCarImg.png";
import groupedAvatars from "@/assets/images/groupedAvatars.png";

// Styles
import Style from "./Projects.module.css";

// Types
interface ProjectProps {
  index: number;
  picture: StaticImageData;
  title: string;
  subTitle: string;
}

// Data
const data: ProjectProps[] = [
  {
    index: 1,
    picture: firstCarImg,
    title: "Modern",
    subTitle:
      "As Uber works through a huge amount of internal management turmoil.",
  },
  {
    index: 2,
    picture: firstCarImg,
    title: "Scandinavian",
    subTitle:
      "Music is something that every person has his or her own specific opinion about.",
  },
  {
    index: 3,
    picture: firstCarImg,
    title: "Minimalist",
    subTitle:
      "Different people have different taste, and various types of music.",
  },
];

const Projects: React.FC = () => {
  return (
    <CardWrapper>
      <div className={Style.heading}>
        <h5>Projects</h5>
        <p>Architects design houses</p>
      </div>
      <div className={Style.projectsGrid}>
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              index={item.index}
              picture={item.picture}
              title={item.title}
              subTitle={item.subTitle}
            />
          );
        })}
      </div>
    </CardWrapper>
  );
};

const Card: React.FC<ProjectProps> = ({ index, picture, title, subTitle }) => {
  return (
    <div className={Style.card}>
      <Image width={100} height={100} src={picture.src} alt="project" />
      <p>Project #{index}</p>
      <h5>{title}</h5>
      <h6>{subTitle}</h6>
      <div className={Style.cardFooter}>
        <div className={Style.btn}>VIEW ALL</div>
        <Image width={100} height={100} src={groupedAvatars} alt="" />
      </div>
    </div>
  );
};

export default Projects;
