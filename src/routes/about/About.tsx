import React from "react";
import styles from "./About.module.css";
import NavBar from "../../reusableComponents/navigationBar/navigationBar";
import ScrollContainer from "react-indiana-drag-scroll";

const About = () => {
	return (
		<div className={styles.About}>
			<NavBar></NavBar>
			<div className={styles.container}>
				<div className={styles.aboutText}>
					<p className={styles.aboutTextTop}>I'm a mechatronics engineer</p>
					<p className={styles.aboutTextMiddle}>I'm a wev developer</p>
					<p className={styles.aboutTextBottom}>
						I'm a self-taught developer with passion for websites and
						applications development, I love learning new technologies. I focus
						on full stack web development with a stronger front end
					</p>
				</div>

				<ScrollContainer className={styles.aboutSkills}>
					<div>
						<h3>Front End</h3>
						<div className={styles.aboutSkillsList}>
							<img
								loading="lazy"
								src="img/html.webp"
								alt="html icon"
								decoding="async"
							/>
							<img
								loading="lazy"
								src="img/javascript.svg"
								alt="javascript icon"
								decoding="async"
							/>
							<img
								loading="lazy"
								src="img/CSS3.svg"
								alt="css icon"
								decoding="async"
							/>
							<div>
								<img
									loading="lazy"
									src="img/react.webp"
									alt="React icon"
									decoding="async"
								/>
								<p>React</p>
							</div>
							<div>
								<img
									loading="lazy"
									src="img/github.svg"
									alt="Github icon"
									decoding="async"
								/>
								<p>Github</p>
							</div>
							<img
								loading="lazy"
								src="img/next.svg"
								alt="next icon"
								decoding="async"
							/>
						</div>
					</div>
					<div>
						<h3>Back End</h3>
						<div className={styles.aboutSkillsList}>
							<img
								loading="lazy"
								src="img/html.webp"
								alt="html icon"
								decoding="async"
							/>
							<img
								loading="lazy"
								src="img/javascript.svg"
								alt="javascript icon"
								decoding="async"
							/>
							<img
								loading="lazy"
								src="img/CSS3.svg"
								alt="css icon"
								decoding="async"
							/>
							<div>
								<img
									loading="lazy"
									src="img/react.webp"
									alt="React icon"
									decoding="async"
								/>
								<p>React</p>
							</div>
							<div>
								<img
									loading="lazy"
									src="img/github.svg"
									alt="Github icon"
									decoding="async"
								/>
								<p>Github</p>
							</div>
							<img
								loading="lazy"
								src="img/next.svg"
								alt="next icon"
								decoding="async"
							/>
						</div>
					</div>
					<div>
						<h3>Others</h3>
						<div className={styles.aboutSkillsList}>
							<img
								loading="lazy"
								src="img/html.webp"
								alt="html icon"
								decoding="async"
							/>
							<img
								loading="lazy"
								src="img/javascript.svg"
								alt="javascript icon"
								decoding="async"
							/>
							<img
								loading="lazy"
								src="img/CSS3.svg"
								alt="css icon"
								decoding="async"
							/>
							<div>
								<img
									loading="lazy"
									src="img/react.webp"
									alt="React icon"
									decoding="async"
								/>
								<p>React</p>
							</div>
							<div>
								<img
									loading="lazy"
									src="img/github.svg"
									alt="Github icon"
									decoding="async"
								/>
								<p>Github</p>
							</div>
							<img
								loading="lazy"
								src="img/next.svg"
								alt="next icon"
								decoding="async"
							/>
						</div>
					</div>
				</ScrollContainer>
			</div>
		</div>
	);
};

export default About;
