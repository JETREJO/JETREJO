import { TECH_LIST } from "../../../dictionaries/IconsTechList";
import TechIconItem from "../item/TechIconItem";
import styles from "./techCard.module.css";

interface TechCardProps {
  title: "Frontend" | "Backend" | "Tools";
  techStack: TECH_LIST[];
}

const TechCard: React.FC<TechCardProps> = ( {title, techStack} ) => {
  return (
    <article className={(techStack.length > 8) ? styles.stackCardLong : styles.stackCard}>
      <h4 className={styles.cardTitle}>{title}</h4>
      <ul className={styles.iconsContainer}>
        { techStack.map((tech) => <TechIconItem techName={tech} key={`Tech-${tech}`}/>) }
      </ul>
    </article>
  );
}

export default TechCard;