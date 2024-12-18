import ExperienceCard from "./card/experienceCard";
import styles from "./experience.module.css";

const Experience = () => {
  return (
    <div className={styles.sectionContainer} id="experience">
      <h2>Experience</h2>
      <section>
          <ExperienceCard
            title="Sky México"
            imgURL="/public/images/test-sky-02.png"
            imgAlt="Sky México Aplicación Sky Más"
            url="https://www.skymas.mx/webclient/#/login"
            startDate={{day: "15", month: "06", year:"2022"}}
            endDate={{day: "18", month: "10", year:"2024"}}>
              Trabajé aquí como Desarrollador Frontend creando y dando matenimiento
              a aplicaciones de Streaming y contenidos VOD. Utilicé tecnologías como 
              React, Angular, SASS, Next.JS y Typescript.
          </ExperienceCard>

          <ExperienceCard
            title="Consultoría Educativa Especializada"
            imgURL="/public/images/test-cee-02.png"
            imgAlt="Consultoría Educativa Especializada CDMX"
            url="https://jetrejo.github.io/CEE/"
            startDate={{day: "", month: "March", year:"2024"}}>
              Landing Page que desarrollé como Freelance para una
              consultora educativa, la cual requería mostrar su catálogo de 
              servicios y cursos disponibles. Desarrollada con Vanilla JavaScript, HTML y CSS.
          </ExperienceCard>

          <ExperienceCard
            title="Indra Sistemas México"
            imgURL="/public/images/test-indra-01.png"
            imgAlt="Imagen Indra Sistemas México"
            url={undefined}
            client="BBVA"
            startDate={{day: "22", month: "12", year:"2021"}}
            endDate={{day: "27", month: "05", year:"2022"}}>
              Mi primer empleo formal como desarrollador. Tenía que dar 
              mantenimiento al sistema de ingestas del banco y generar reportes 
              de incidencias. Trabajé con Scala, SparkSQL, BitBucket y Jenkins.
          </ExperienceCard>

          <ExperienceCard
            title="Lu-Lu Coffee Beans"
            imgURL="/public/images/test-lulu-04.png"
            imgAlt="Lu-Lu Coffee Beans Banner"
            url="https://jt070.github.io/LandingPage_MaryCoffeeBrand/"
            startDate={{day: "", month: "December", year:"2021"}}>
              Página que desarrollé como práctica para una supuesta 
              marca de café, inspirada en la página de Nescafé 
              de ese momento. Hecha solo con HTML y CSS, destacando el Responsive Design
          </ExperienceCard>

          <ExperienceCard
            title="Landing Page: Portfolio"
            imgURL="/public/images/test-lulu-04.png"
            imgAlt="Portfolio Banner JT."
            url="https://github.com/JETREJO/JETREJO"
            startDate={{day: "", month: "December", year:"2024"}}>
              Landing Page tipo Portafolio la cual actualicé recientemente 
              usando tecnologías como React, Vite y TypeScript, 
              ya que la primera versión estaba construida con solo 
              HTML, CSS y Vanilla JavasCript.
          </ExperienceCard>

          <ExperienceCard
            title="Proyectos: GitHub"
            imgURL="/public/images/test-lulu-04.png"
            imgAlt="Portfolio Banner JT."
            url="https://github.com/JETREJO">
              En mi portal de GitHub cuento con algunos 
              proyectos que he realizado en mis ratos libres o incluso 
              hay algunos interesantes que realicé en la universidad, 
              con tecnologpías como C#, Bash Scripting, Assembly, entre otras.
          </ExperienceCard>

      </section>
    </div>
  );
}

export default Experience;