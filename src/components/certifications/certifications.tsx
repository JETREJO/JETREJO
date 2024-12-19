import { useState } from "react";
import styles from "./certifications.module.css";
import CertificationSlides from "./slide/slide";
import { LINUX_ICON } from "../technologies/IconsTechList";
import SliderDots from "./sliderDots/sliderDots";
import { Certification } from "../../Interfaces";

const CERTIFICATIONS: Certification[] = [
  {
    title: "Linux",
    img: LINUX_ICON,
    dedscription: "Taller en donde se vio a profundidad temas de Linux, como la terminal, el sistema de ficheros, gestores de paquetes y comandos importantes.",
    srcPath: "/public/certifications/Certification-Linux.pdf",
  },
  {
    title: "Sistemas Operativos",
    img: <img src="/public/images/cert-ssoo.png" />,
    dedscription: "Curso que trató principalmente de programación enfocada a sistemas operativos con lenguajes de bajo nivel así como el correcto funcionamiento de estos.",
    srcPath: "/public/certifications/Certification-SSOO.pdf",
  },
  {
    title: "Oracle",
    img: <img src="/public/images/cert-oracle.jpg" />,
    dedscription: "Introducción al servicio de Bases de Datos que ofrece la empresa de Oracle.",
    srcPath: "/public/certifications/Certification-Oracle.pdf",
  },
  {
    title: "Criptografía Visual",
    img: <img src="/public/images/cert-matlab.png" />,
    dedscription: "Taller donde se explicó qué es la criptografía visual y se demostró con un algoritmo para encriptar documentos físicos usando MatLab.",
    srcPath: "/public/certifications/Certification-MatLab.pdf",
  },
];

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