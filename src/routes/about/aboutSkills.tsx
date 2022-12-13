import styles from "./About.module.css";

interface skillsProps {
  title: string;
  skills: { src: string; title: string; alt: string }[];
}

const AboutSkills = ({ skillsData }: { skillsData: skillsProps }) => {
  return (
    <div className={styles.skillsContainer}>
      <h3>{skillsData.title}</h3>
      <div className={styles.aboutSkillsList}>
        {skillsData.skills.map((sk, index) => {
          return (
            <div key={sk.src + "_" + index}>
              <img src={sk.src} alt={sk.alt} title={sk.title} decoding="async" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutSkills;
