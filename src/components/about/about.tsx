import { MEDIA_ICONS } from "../../dictionaries/media";
import EllipticalButton from "../buttons/elliptical/ellipticalButton";
import styles from "./about.module.css";

const PHOTO_URL = `${import.meta.env.BASE_URL}/images/about-photo-test.webp`;
const RESUMEE_URL = `${import.meta.env.BASE_URL}/certifications/JavierTrejo-Resumee.pdf`;

const About = () => {

  return (
    <section className={styles.sectionWrapper} id="about">

      <h2>About me</h2>

      <div className={styles.infoContainer}>
        <article className={styles.photoWrapper}>
          <img src={PHOTO_URL} alt="Fotgrafía JT" />
          <a href={RESUMEE_URL} target="_blank" rel="noopener noreferrer">
            <EllipticalButton style={{fontSize: "15px", border:"transparent", fontWeight: "600"}}>
              View Resumee
            </EllipticalButton>
          </a>
        </article>

        <article className={styles.descriptionWrapper}>
          <div className={styles.media}>
            {MEDIA_ICONS.LINKEDIN}
            {MEDIA_ICONS.GITHUB}
            {MEDIA_ICONS.INDEED}
            {MEDIA_ICONS.INSTAGRAM}
          </div>
          <p>
            Hello there! I'm Javier Trejo a web developer with more than <span className={styles.highlighted}>2 years</span> of
            experience <span className={styles.highlighted}>building</span> user-friendly applications. Throughout my jurney, I've
            <span className={styles.highlighted}> collaborated</span>  with my co-workers in their duties across diverse areas like
            backend, design and database managment, <span className={styles.highlighted}>learning</span>  a lot from them. I'm constantly
            <span className={styles.highlighted}> exploring</span> new technologies and resources to build smooth and scalable apps.
          </p>
        </article>
      </div>

    </section>
  );
};

export default About;