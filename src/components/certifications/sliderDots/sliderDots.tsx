import { Certification } from "../../../Interfaces";
import styles from "./sliderDots.module.css";

interface SliderDotsProps {
  indexActive: number;
  setCarrouselMove: Function;
  certifications: Certification[];
}

const SliderDots: React.FC<SliderDotsProps> = ( {certifications, indexActive, setCarrouselMove} ) => {
  return (
    <div className={styles.heroDotsContainer}>
      { certifications.map((cert:any, index:number) => {
        return (
          <input
            type="radio"
            checked={indexActive === index}
            onChange={() => setCarrouselMove(index)}
            key={`Certi-${cert.title}-${index}`}/>  
        )
      }) }
    </div> 
  );
}

export default SliderDots;