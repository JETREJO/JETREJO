import { TECH_LIST } from "./IconsTechList";
import styles from "./stack.module.css";
import TechCard from "./techCard/techCard";

const FRONTEND_STACK: TECH_LIST[] = [ "HTML", "CSS", "TypeScript", "React", "Angular", "SASS", "Figma", "JavaScript", "Bootstrap", "Material UI", "Angular Material", "jQuery"];
const BACKEND_STACK: TECH_LIST[] = ["PHP", "Laravel", "Next JS", "Node JS", "MySQL", "PostgreSQL", "Apache"];
const TOOLS_STACK: TECH_LIST[] = ["Git", "GitHub", "Terminal", "Linux", "VS Code", "npm", "Postman", "Photoshop"];

const Stack = () => {
  return (
    <div className={styles.sectionContainer} id="stack">
      <h2>Technologies Stack</h2>
      <section className={styles.cardsWrapper}>
        { <TechCard title="Frontend" techStack={FRONTEND_STACK}/> }
        { <TechCard title="Backend" techStack={BACKEND_STACK}/> }
        { <TechCard title="Tools" techStack={TOOLS_STACK}/> }
      </section>
    </div>
  );
}

export default Stack;