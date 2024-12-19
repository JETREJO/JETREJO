import { useState } from "react";
import styles from "./certifications.module.css";
import CertificationSlides from "./slide/slide";
import SliderDots from "./sliderDots/sliderDots";
import { CERTIFICATIONS } from "../../dictionaries/certifications";

const PERCENTAGE_TO_MOVE = 100 / CERTIFICATIONS.length;
const SLIDER_WIDTH = CERTIFICATIONS.length * 100;

const Certifications = () => {

  const [indexActive, setIndexActive] = useState<number>(0);
  const [translation, setTranslation] = useState<number>(0);

  const setCarrouselMove = (index:number) => {
    const newTranslation = PERCENTAGE_TO_MOVE * (index * -1);
    setTranslation(newTranslation);
    setIndexActive(index);
  };

  return (
    <section className={styles.sectionContainer} id="certifications">
      <div className={styles.heroOverlay}>
        <article className={styles.contentWrapper}>
          <h2>Certifications</h2>
          <div className={styles.sliderContainer}>
            <ul className={styles.slidesCarrousel}
              style={{
                transform: `translateX(${translation}%)`,
                width:`${SLIDER_WIDTH}%`
              }} >
              <CertificationSlides certifications={CERTIFICATIONS}/>
            </ul>
            <SliderDots
              certifications={CERTIFICATIONS}
              indexActive={indexActive}
              setCarrouselMove={setCarrouselMove}/>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Certifications;