import styles from "./slide.module.css";

interface CertificationSlidesProps {
  certifications: any[];
}

const CertificationSlides: React.FC<CertificationSlidesProps> = ({certifications}) => {
  return (
    certifications.map((certification, index:number) => {
      return (
        <li className={styles.slide} key={`id_${certification.title}-${index}`}>
          { certification.img }
          <p>{certification.dedscription}</p>
          <h5>{certification.title}</h5>
          <a href={certification.srcPath} rel="noopener noreferrer" target="_blank">
            Ver certificado
          </a>
        </li>
      )
    })
  );
}

export default CertificationSlides;