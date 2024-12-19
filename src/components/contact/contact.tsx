import { CONTACT_ICONS } from "../../dictionaries/contact";
import { MEDIA_ICONS } from "../../dictionaries/media";
import EllipticalButton from "../buttons/elliptical/ellipticalButton";
import styles from "./contact.module.css";
const RESUMEE_URL = "/public/certifications/JavierTrejo-Resumee.pdf";

const Contact = () => {
  return (
    <section className={styles.sectionContainer} id="contact">
      <div className={styles.contentWrapper}>

        <h2>Contact</h2>

        <article className={styles.contactsContainer}>

          <div className={styles.contactCard}>
            { CONTACT_ICONS.ubication }
            <p className={styles.cardTitle}>UBICATION</p>
            <p className={styles.cardDescription}>Mexico City</p>
          </div>

          <div className={styles.contactCard}>
            { CONTACT_ICONS.email }
            <p className={styles.cardTitle}>EMAIL</p>
            <p className={styles.cardDescription}>JavierTrejoRod@gmail.com</p>
          </div>

          <div className={styles.contactCard}>
            { CONTACT_ICONS.media }
            <p className={styles.cardTitle}>MEDIA</p>
            <div className={styles.contactIconsWrapper}>
              { MEDIA_ICONS.LINKEDIN }
              { MEDIA_ICONS.GITHUB }
              { MEDIA_ICONS.INDEED }
              { MEDIA_ICONS.INSTAGRAM }
            </div>
          </div>

        </article>

        <article className={styles.cvButtonWrapper}>
          <a href={RESUMEE_URL} target="_blank" rel="noopener noreferrer">
            <EllipticalButton
              type="button"
              style={{
                border: "transparent",
                margin: "20px 0 100px",
                fontWeight: "700",
                color: "white",
              }}>
              VIEW RESUMEE
            </EllipticalButton>
          </a>
        </article>

      </div>
    </section>
  );
}

export default Contact;