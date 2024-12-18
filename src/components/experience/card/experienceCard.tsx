import styles from "./experienceCard.module.css";

const ExperienceCard = () => {
  return (
    <article className={styles.cardContainer}>
      <img src="https://cdn.royalcanin-weshare-online.io/zlY7qG0BBKJuub5q1Vk6/v1/59-es-l-golden-running-thinking-getting-dog-beneficios" alt="" />
      <div className={styles.cardInfo}>
        <p className={styles.cardDescription}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className={styles.cardFooter}>
          <p className={styles.date}>
            <span>From: </span>
            <time dateTime="2022/06/15"> 15-06-2022 </time>
            <span>To: </span>
            <time dateTime="2022/10/18"> 18-10-2022</time>
          </p>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
            <span>Go to page </span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;