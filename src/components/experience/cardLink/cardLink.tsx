import styles from "./cardLink.module.css";

interface CardLinkProps {
  url?: string;
  client?: string;
}

const ExperienceCardLink: React.FC<CardLinkProps> = ( {url, client} ) => {

  const handleButton = (url: string | undefined, client: string | undefined) => {
    if (url) {
      return (
        <a href={url} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
          <span>Go to page </span>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
        </a>
      );
    }
    else if (client) {
      return (
        <p>
          <span style={{fontWeight: 600}}>Cliente: </span>
          <span>{client}</span>
        </p>
      );
    }
    else if (!client && !url) {
      return (<></>);
    }
  }

  return (
    <>
      { handleButton(url, client) }
    </>
  );

}

export default ExperienceCardLink;