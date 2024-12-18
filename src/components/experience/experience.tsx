import ExperienceCard from "./card/experienceCard";
import styles from "./experience.module.css";

const Experience = () => {
  return (
    <div className={styles.sectionContainer} id="experience">
      <h3>Experience</h3>
      <section>
          <ExperienceCard/>
      </section>
    </div>
  );
}

export default Experience;