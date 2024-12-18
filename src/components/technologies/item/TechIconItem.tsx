import { SVGLIST, TECH_LIST } from "../IconsTechList";
import styles from "./TechIconItem.module.css";

interface TechIconItemProps {
  techName: TECH_LIST;
}

const TechIconItem: React.FC<TechIconItemProps> = ({techName}) => {
  return (
    <li className={styles.itemWrapper}>
      { SVGLIST[techName] }
      <p className={styles.techName}>
        {techName}
      </p>
    </li>
  );
};

export default TechIconItem;