import { useState } from "react";
import { LINUX_ICON } from "../technologies/IconsTechList";
import styles from "./certifications.module.css";

const CERT_IMG_LINUX = LINUX_ICON;

const Certifications = () => {

  const [indexActive, setIndexActive] = useState<number>(0);

  return (
    <section className={styles.sectionContainer} id="certifications">
      <div className={styles.heroOverlay}>

        <article className={styles.contentWrapper}>
          <h2>Certifications</h2>
          <div className={styles.sliderContainer}>

            <ul className={styles.slidesCarrousel}
              style={{
                transform : (indexActive === 0)
                  ? "translateX(0%)"
                  : (indexActive === 1)
                    ? "translateX(-25%)"
                    : (indexActive === 2)
                      ? "translateX(-50%)"
                      : (indexActive === 3)
                        ? "translateX(-75%)"
                        : ""
              }}   >

              <li className={styles.slide}>
                { CERT_IMG_LINUX }
                <p>Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion</p>
                <h5>Title</h5>
                <a href="" rel="noopener noreferrer">Ver certificado</a>
              </li>

              <li className={styles.slide}>
                <img src="/public/images/about-photo-test.png" alt="" />
                <p>Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion</p>
                <h5>Title</h5>
                <a href="" rel="noopener noreferrer">Link</a>
              </li>

              <li className={styles.slide}>
                { CERT_IMG_LINUX }
                <p>Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion</p>
                <h5>Title</h5>
                <a href="" rel="noopener noreferrer">Ver certificado</a>
              </li>

              <li className={styles.slide}>
                <img src="/public/images/about-photo-test.png" alt="" />
                <p>Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion</p>
                <h5>Title</h5>
                <a href="" rel="noopener noreferrer">Link</a>
              </li>

            </ul>

            <div className={styles.heroDotsContainer}>
              <input type="radio" name="slides" id="slide-1" checked={indexActive === 0} onChange={() => setIndexActive(0)} />
              <input type="radio" name="slides" id="slide-2" checked={indexActive === 1} onChange={() => setIndexActive(1)} />
              <input type="radio" name="slides" id="slide-3" checked={indexActive === 2} onChange={() => setIndexActive(2)} />
              <input type="radio" name="slides" id="slide-4" checked={indexActive === 3} onChange={() => setIndexActive(3)} />
            </div>

          </div>
        </article>

      </div>

    </section>
  );
}

export default Certifications;