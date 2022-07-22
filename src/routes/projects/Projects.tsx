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
				img: "img/maskottchen.webp",
				imgAlt: "project maskottchen preview image",
				liveUrl: "https://carloscr18.github.io/Maskottchen/",
				github: "https://github.com/CarlosCr18/Maskottchen",
				text: "Frontpage for a dog grooming center and store",
				skills: [
					{
						url: "img/html.webp",
						alt: "HTML5",
					},
					{
						url: "img/javascript.svg",
						alt: "Javascript",
					},
					{
						url: "img/CSS3.svg",
						alt: "CSS3",
					},
					{
						url: "img/react.webp",
						alt: "React",
					},
				],
			},
			{
				id: "japaneseApi",
				title: "Japanese alphabet api",
				img: "img/apiproject.webp",
				imgAlt: "Japanese alphabet api preview image",
				liveUrl: "https://japanese-alphabet-api.herokuapp.com/",
				github: "https://github.com/CarlosCr18/japAlphabetAPI",
				text: "An api that responds with the japanese alphabet",
				skills: [
					{
						url: "img/nodejs.svg",
						alt: "Javascript",
					},
					{
						url: "img/express.png",
						alt: "CSS3",
					},
					{
						url: "img/mongo.svg",
						alt: "React",
					},
				],
			},
			{
				id: "NiponABC",
				title: "NiponABC",
				img: "img/niponabc.webp",
				imgAlt: "project niponabc preview image",
				liveUrl: "https://niponabcapp.herokuapp.com/",
				github: "https://github.com/CarlosCr18/niponABC",
				text: "Learn and study the japanese alphabet playing",
				skills: [
					{
						url: "img/javascript.svg",
						alt: "Javascript",
					},
					{
						url: "img/CSS3.svg",
						alt: "CSS3",
					},
					{
						url: "img/react.webp",
						alt: "React",
					},
					{
						url: "img/next.svg",
						alt: "Next Js",
					},
				],
			},
			{
				id: "RandomQuotes",
				title: "Random quotes generator",
				img: "img/randomquotes.webp",
				imgAlt: "project random quotes preview image",
				liveUrl: "https://carloscr18.github.io/randomQuotes/",
				github: "https://github.com/CarlosCr18/randomQuotes",
				text: "Get some inspiration from a random quote",
				skills: [
					{
						url: "img/javascript.svg",
						alt: "Javascript",
					},
					{
						url: "img/CSS3.svg",
						alt: "CSS3",
					},
					{
						url: "img/react.webp",
						alt: "React",
					},
					{
						url: "img/redux.svg",
						alt: "Redux",
					},
				],
			},
			{
				id: "Pomodoro",
				title: "Pomodoro App",
				img: "img/pomodoro.webp",
				imgAlt: "project pomodoro preview image",
				liveUrl: "https://carloscr18.github.io/pomodoro/",
				github: "https://github.com/CarlosCr18/pomodoro",
				text: "A clock to keep track of your sessions length",
				skills: [
					{
						url: "img/javascript.svg",
						alt: "Javascript",
					},
					{
						url: "img/CSS3.svg",
						alt: "CSS3",
					},
					{
						url: "img/react.webp",
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
