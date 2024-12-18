import EllipticalButton from "../buttons/elliptical/ellipticalButton";
import styles from "./about.module.css";

type Resource = "LINKEDIN" | "INDEED" | "GITHUB" | "INSTAGRAM";

const ICONS: Record<Resource, any> = {
  "LINKEDIN" :
    <a href="https://www.linkedin.com/in/javier-enrique-trejo-rodriguez-4262621ab" target="blank" rel="noopener">
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">
        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/>
      </svg>
    </a>,
  "GITHUB":
    <a href="https://github.com/JETREJO" target="blank" rel="noopener">
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 72 72" width="64px" height="64px" className={styles.github}>
        <path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z"/>
      </svg>
    </a>,
  "INDEED":
    <a href="https://profile.indeed.com/p/javierenriquet-hecqu1h" target="blank" rel="noopener">
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="32px" height="32px">
        <path d="M 18.5 2 C 10.75 2 6 11.25 6 16 C 6 16 9.25 4 19 4 C 22.625 4 25 6 25 6 C 25 6 24 2 18.5 2 z M 17.5 7 A 3.5 3.5 0 1 0 17.5 14 A 3.5 3.5 0 1 0 17.5 7 z M 20 16 C 20 16 19 17 15 17 L 15 27.5 C 15 28.881 16.119 30 17.5 30 C 18.881 30 20 28.881 20 27.5 L 20 16 z"/>
      </svg>
    </a>,
  "INSTAGRAM":
    <a href="https://www.instagram.com/javiscript_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="blank" rel="noopener">
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">
        <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"/>
      </svg>
    </a>,
};

const PHOTO_URL = "/public/images/about-photo-test.png";
const RESUMEE_URL = "/public/certifications/JavierTrejo-Resumee.pdf";

const About = () => {

  return (
    <section className={styles.sectionWrapper} id="about">

      <h2>About me</h2>

      <div className={styles.infoContainer}>
        <article className={styles.photoWrapper}>
          <img src={PHOTO_URL} alt="Fotgrafía JT" />
          <a href={RESUMEE_URL} target="_blank" rel="noopener noreferrer">
            <EllipticalButton style={{fontSize: "16px", border:"transparent"}}>
              Watch Resumee
            </EllipticalButton>
          </a>
        </article>

        <article className={styles.descriptionWrapper}>
          <div className={styles.media}>
            {ICONS.LINKEDIN}
            {ICONS.GITHUB}
            {ICONS.INDEED}
            {ICONS.INSTAGRAM}
          </div>
          <p>
            Hello there! I'm Javier Trejo a web developer with more than <span className={styles.highlighted}>2 years</span> of
            experience <span className={styles.highlighted}>building</span> user-friendly applications. Throughout my jurney, I've
            <span className={styles.highlighted}> collaborated</span>  with my co-workers in their duties across diverse areas like
            backend, design and database managment, <span className={styles.highlighted}>learning</span>  a lot from them. I constantly
            <span className={styles.highlighted}> explore</span> new technologies and resources to build smooth and scalable apps.
          </p>
        </article>
      </div>

    </section>
  );
};

export default About;