import ExperienceCard from "./card/experienceCard";
import styles from "./experience.module.css";

const Experience = () => {
  return (
    <div className={styles.sectionContainer} id="experience">
      <h3>Experience</h3>
      <section>
          <ExperienceCard
            imgURL="https://cdn.royalcanin-weshare-online.io/zlY7qG0BBKJuub5q1Vk6/v1/59-es-l-golden-running-thinking-getting-dog-beneficios"
            imgAlt="Sky México Aplicación Sky Más"
            url="https://www.skymas.mx/webclient/#/login"
            startDate={{day: "15", month: "06", year:"2022"}}
            endDate={{day: "18", month: "10", year:"2024"}}>
              Esta fue mi última chamba
          </ExperienceCard>
      </section>
    </div>
  );
}

export default Experience;