// import { useState } from "react";
import { CardDate } from "../../../Interfaces";
import ExperienceCardDate from "../cardDate/cardDate";
import ExperienceCardLink from "../cardLink/cardLink";
import styles from "./experienceCard.module.css";

interface ExperienceCardProps {
  children: React.ReactNode;
  title: string;
  imgURL: string;
  imgAlt: string;
  url: string | undefined;
  startDate?: CardDate;
  endDate?: CardDate;
  client?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ( {children, title, imgURL, imgAlt, url, client, startDate, endDate} ) => {

  // const [hover, setHover] = useState<boolean>(false);

  return (
    // <article className={styles.cardContainer} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
    <article className={styles.cardContainer}>
      <img src={imgURL} alt={imgAlt} />
      <div className={styles.imgOverlay}>
        <span>{title}</span>
      </div>
      <div className={styles.cardInfo}>
        {/* <p className={`${hover ? styles.cardDescription : styles.cardDescriptionClamped}`}> */}
        <p className={styles.cardDescription}>
          {children}
        </p>
        <div className={styles.cardFooter}>
          { <ExperienceCardDate startDate={startDate} endDate={endDate} /> }
          { <ExperienceCardLink url={url} client={client} /> }
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;