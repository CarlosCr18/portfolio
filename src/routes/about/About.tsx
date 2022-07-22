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
					src: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/javascript.svg",
					alt: "Javascript Icon",
					title: "Javascript 1.5 years of experience",
				},
				{
					src: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/html.webp",
					alt: "HTML Icon",
					title: "HTML 1.5 years of experience",
				},
				{
					src: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/CSS3.svg",
					alt: "CSS Icon",
					title: "CSS 1.5 years of experience",
				},
				{
					src: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/TypeScript.svg",
					alt: "Typescript Icon",
					title: "Typescript less than 1 year of experience",
				},
				{
					src: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/react.webp",
					alt: "React Icon",
					title: "React 1.5 years of experience",
				},
				{
					src: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/redux.svg",
					alt: "Redux Icon",
					title: "Redux 1.5 years of experience",
				},
				{
					src: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/vue.svg",
					alt: "Vue Icon",
					title: "Vue less than 1 year of experience",
				},
			],
		},
		{
			title: "Back End",
			skills: [
				{
					src: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/nodejs.svg",
					alt: "NodeJS Icon",
					title: "NodeJS less than 1 year of experience",
				},
				{
					src: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/express.png",
					alt: "Express Icon",
					title: "Express less than 1 year of experience",
				},
				{
					src: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/next.svg",
					alt: "NextJS Icon",
					title: "NextJS less than 1 year of experience",
				},
				{
					src: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/mongo.svg",
					alt: "MongoDB Icon",
					title: "MongoDB less than 1 year of experience",
				},
				{
					src: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/php.svg",
					alt: "PHP Icon",
					title: "PHP less than 1 year of experience",
				},
				{
					src: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/postgresql.svg",
					alt: "Postgresql Icon",
					title: "Postgresql less than 1 year of experience",
				},
			],
		},
		{
			title: "Others",
			skills: [
				{
					src: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/git.svg",
					alt: "Git Icon",
					title:
						"GitHub 1.5 years of experience, GitLab less than 1 year of experience.",
				},
				{
					src: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/svn.svg",
					alt: "SVN Icon",
					title: "SVN less than 1 year of experience",
				},
				{
					src: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/Python.svg",
					alt: "Python Icon",
					title: "Python less than 1 year of experience",
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
						src="https://crespoportfolioimages.s3.us-east-2.amazonaws.com/scroll.png"
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
