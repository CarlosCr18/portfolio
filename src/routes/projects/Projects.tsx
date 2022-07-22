import styles from "./Projects.module.css";
import NavBar from "../../reusableComponents/navigationBar/navigationBar";
import Card from "./card";
import ScrollContainer from "react-indiana-drag-scroll";

const Projects = () => {
	const currentProjectsData = {
		title: "Projects",
		text: "Here I show you a small list of projects that I've developed, some are more complex than the others or more aesthetic but I've learned so much developing each one of them, hope you enjoy them and any feedback is well welcomed.",
		projects: [
			{
				id: "Maskottchen",
				title: "Dog grooming center",
				img: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/maskottchen.webp",
				imgAlt: "project maskottchen preview image",
				liveUrl: "https://carloscr18.github.io/Maskottchen/",
				github: "https://github.com/CarlosCr18/Maskottchen",
				text: "Frontpage for a dog grooming center and store",
				skills: [
					{
						url: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/html.webp",
						alt: "HTML5",
					},
					{
						url: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/javascript.svg",
						alt: "Javascript",
					},
					{
						url: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/CSS3.svg",
						alt: "CSS3",
					},
					{
						url: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/react.webp",
						alt: "React",
					},
				],
			},
			{
				id: "japaneseApi",
				title: "Japanese alphabet api",
				img: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/apiproject.webp",
				imgAlt: "Japanese alphabet api preview image",
				liveUrl: "https://japanese-alphabet-api.herokuapp.com/",
				github: "https://github.com/CarlosCr18/japAlphabetAPI",
				text: "An api that responds with the japanese alphabet",
				skills: [
					{
						url: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/nodejs.svg",
						alt: "Javascript",
					},
					{
						url: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/express.png",
						alt: "CSS3",
					},
					{
						url: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/mongo.svg",
						alt: "React",
					},
				],
			},
			{
				id: "NiponABC",
				title: "NiponABC",
				img: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/niponabc.webp",
				imgAlt: "project niponabc preview image",
				liveUrl: "https://niponabcapp.herokuapp.com/",
				github: "https://github.com/CarlosCr18/niponABC",
				text: "Learn and study the japanese alphabet playing",
				skills: [
					{
						url: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/javascript.svg",
						alt: "Javascript",
					},
					{
						url: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/CSS3.svg",
						alt: "CSS3",
					},
					{
						url: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/react.webp",
						alt: "React",
					},
					{
						url: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/next.svg",
						alt: "Next Js",
					},
				],
			},
			{
				id: "RandomQuotes",
				title: "Random quotes generator",
				img: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/randomquotes.webp",
				imgAlt: "project random quotes preview image",
				liveUrl: "https://carloscr18.github.io/randomQuotes/",
				github: "https://github.com/CarlosCr18/randomQuotes",
				text: "Get some inspiration from a random quote",
				skills: [
					{
						url: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/javascript.svg",
						alt: "Javascript",
					},
					{
						url: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/CSS3.svg",
						alt: "CSS3",
					},
					{
						url: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/react.webp",
						alt: "React",
					},
					{
						url: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/redux.svg",
						alt: "Redux",
					},
				],
			},
			{
				id: "Pomodoro",
				title: "Pomodoro App",
				img: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/pomodoro.webp",
				imgAlt: "project pomodoro preview image",
				liveUrl: "https://carloscr18.github.io/pomodoro/",
				github: "https://github.com/CarlosCr18/pomodoro",
				text: "A clock to keep track of your sessions length",
				skills: [
					{
						url: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/javascript.svg",
						alt: "Javascript",
					},
					{
						url: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/CSS3.svg",
						alt: "CSS3",
					},
					{
						url: "https://crespoportfolioimages.s3.us-east-2.amazonaws.com/react.webp",
						alt: "React",
					},
				],
			},
		],
	};
	return (
		<div className={styles.projects}>
			<NavBar></NavBar>
			<div className={styles.projectsText}>
				<h2>Some personal projects,</h2>{" "}
				<p>
					I give you a brief description of the project in each card as well as
					the technologies I used to develop It
				</p>
			</div>
			<ScrollContainer className={styles.cardsContainer}>
				{currentProjectsData.projects.map((e, index) => (
					<Card key={index + e.id} cardData={e}></Card>
				))}
			</ScrollContainer>
		</div>
	);
};

export default Projects;
