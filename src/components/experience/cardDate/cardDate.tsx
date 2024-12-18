import { CardDate } from "../../../Interfaces";
import styles from "./cardDate.module.css";

interface DateProps {
  startDate?: CardDate;
  endDate?: CardDate;
}

const ExperienceCardDate: React.FC<DateProps> = ( {startDate, endDate} ) => {

  const handleDate = (startDate?:CardDate, endDate?:CardDate) => {
    if (startDate && endDate) {
      const parsedStartDate = `${startDate.year}/${startDate.month}/${startDate.day}`;
      const parsedEndDate = `${endDate.year}/${endDate.month}/${endDate.day}`;
      return (
        <p className={styles.date}>
          <span>From: </span>
          <time dateTime={parsedStartDate}>
            {`${startDate.day}-${startDate.month}-${startDate.year}`}
          </time>
          <span> To: </span>
          <time dateTime={parsedEndDate}>
            {`${endDate.day}-${endDate.month}-${endDate.year}`}
          </time>
        </p>
      );
    }
    else if (startDate && !endDate) {
      const parsedStartDate = `${startDate.year}/${startDate.month}/${startDate.day}`;
      return (
        <p className={styles.date}>
          <span>Date: </span>
          <time dateTime={parsedStartDate}>
            {`${startDate.day}-${startDate.month}-${startDate.year}`}
          </time>
        </p>
      );
    }
    else {
      return (<></>);
    }
  };

  return (
    <>
      { handleDate(startDate, endDate) }
    </>
  );

}

export default ExperienceCardDate;