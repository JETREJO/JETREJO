import { BACKEND_STACK, FRONTEND_STACK, TOOLS_STACK } from "../../dictionaries/techStack";
import styles from "./stack.module.css";
import TechCard from "./techCard/techCard";

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