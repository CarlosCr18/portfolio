import { useState } from "react";
import styles from "./About.module.css";
import NavBar from "../../reusableComponents/navigationBar/navigationBar";
import ScrollContainer from "react-indiana-drag-scroll";
import AboutSkills from "./aboutSkills";

const About = () => {
	const [showMouse, setShowMouse] = useState(true);
	const skillsData = [
		{
			title: "Front End",
			skills: [
				{
					src: "img/javascript.svg",
					alt: "Javascript Icon",
					title: "1.5 years of experience",
				},
				{
					src: "img/html.webp",
					alt: "HTML Icon",
					title: "1.5 years of experience",
				},
				{
					src: "img/CSS3.svg",
					alt: "CSS Icon",
					title: "1.5 years of experience",
				},
				{
					src: "img/typescript.svg",
					alt: "Typescript Icon",
					title: "less than 1 year of experience",
				},
				{
					src: "img/react.webp",
					alt: "React Icon",
					title: "1.5 years of experience",
				},
				{
					src: "img/redux.svg",
					alt: "Redux Icon",
					title: "1.5 years of experience",
				},
				{
					src: "img/vue.svg",
					alt: "Vue Icon",
					title: "less than 1 year of experience",
				},
			],
		},
		{
			title: "Back End",
			skills: [
				{
					src: "img/nodejs.svg",
					alt: "NodeJS Icon",
					title: "less than 1 year of experience",
				},
				{
					src: "img/express.png",
					alt: "Express Icon",
					title: "less than 1 year of experience",
				},
				{
					src: "img/next.svg",
					alt: "Next Icon",
					title: "less than 1 year of experience",
				},
				{
					src: "img/mongo.svg",
					alt: "MongoDB Icon",
					title: "less than 1 year of experience",
				},
				{
					src: "img/php.svg",
					alt: "PHP Icon",
					title: "less than 1 year of experience",
				},
				{
					src: "img/postgresql.svg",
					alt: "Postgresql Icon",
					title: "less than 1 year of experience",
				},
			],
		},
		{
			title: "Others",
			skills: [
				{
					src: "img/git.svg",
					alt: "Git Icon",
					title:
						"GitHub 1.5 years of experience, GitLab less than 1 year of experience.",
				},
				{
					src: "img/svn.svg",
					alt: "SVN Icon",
					title: "Less than 1 year of experience",
				},
				{
					src: "img/python.svg",
					alt: "Python Icon",
					title: "Less than 1 year of experience",
				},
			],
		},
	];
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

				<ScrollContainer
					className={styles.aboutSkills}
					onStartScroll={() => setShowMouse(false)}
				>
					<img
						className={
							showMouse
								? `${styles.mouseScroll}`
								: `${styles.mouseScroll} ${styles.invisible}`
						}
						src="/img/scroll.png"
						alt="Scroll"
					/>
					{skillsData.map((sk, index) => (
						<AboutSkills
							key={sk.title + "_" + index}
							skillsData={sk}
						></AboutSkills>
					))}
				</ScrollContainer>
			</div>
		</div>
	);
};

export default About;
