import styles from "./Projects.module.css";

interface projectsSkills {
	url: string;
	alt: string;
}

const ProjectSkills = ({
	currentSkills,
}: {
	currentSkills: projectsSkills;
}) => {
	return (
		<img
			className={styles.skillsImg}
			key={currentSkills.url}
			src={currentSkills.url}
			alt={currentSkills.alt}
			loading="lazy"
			decoding="async"
		/>
	);
};

export default ProjectSkills;
