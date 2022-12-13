import ProjectSkills from "./cardSkills";
import styles from "./Projects.module.css";

interface currentProjectsInterface {
  id: string;
  title: string;
  img: string;
  imgAlt: string;
  liveUrl: string;
  github: string;
  text: string;
  skills: { url: string; alt: string }[];
}
const Card = ({ cardData }: { cardData: currentProjectsInterface }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageDiv}>
        <img key={cardData.img} src={cardData.img} alt={cardData.id} loading="lazy" decoding="async" />
      </div>
      <div className={styles.cardInfo}>
        <div style={{ height: "210px" }}>
          <p className={styles.id}>{cardData.id}</p>
          <p className={styles.title}>{cardData.title}</p>
          <p className={styles.text}>{cardData.text}</p>
        </div>
        <div className={styles.skillsContainer}>
          {cardData.skills.map((sk, index) => (
            <ProjectSkills key={sk.url + "_" + index} currentSkills={sk}></ProjectSkills>
          ))}
        </div>
        <div className={styles.buttonsContainer}>
          <a target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.primaryButton}`} href={cardData.liveUrl}>
            Webpage
          </a>
          <a target="_blank" rel="noreferrer" className={styles.btn} href={cardData.github}>
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
