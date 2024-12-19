import { EXPERIENCE_INFO, JOBS_LIST } from "../../dictionaries/experience";
import ExperienceCard from "./card/experienceCard";
import styles from "./experience.module.css";

const Experience = () => {
  return (
    <div className={styles.sectionContainer} id="experience">
      <h2>Experience</h2>
      <section>
        { JOBS_LIST.map((job) => {
          return(
            <ExperienceCard
            key={`id_exp_${job}`}
            title={EXPERIENCE_INFO[job].title}
            imgURL={EXPERIENCE_INFO[job].imgURL}
            imgAlt={EXPERIENCE_INFO[job].imgAlt}
            url={EXPERIENCE_INFO[job].url}
            client={EXPERIENCE_INFO[job].client}
            startDate={EXPERIENCE_INFO[job].startDate}
            endDate={EXPERIENCE_INFO[job].endDate}>
              { EXPERIENCE_INFO[job].description }
            </ExperienceCard>
          );
        }) }
      </section>
    </div>
  );
}

export default Experience;