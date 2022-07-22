import React from "react";
import styles from "./Home.module.css";
import NavBar from "../../reusableComponents/navigationBar/navigationBar";

const Home = () => {
	return (
		<div className={styles.home}>
			<NavBar></NavBar>
			<div className={styles.container}>
				<div className={styles.contentHome} id="content-home">
					<h1 className={styles.homeTitle}>I'm Carlos Crespo</h1>
					<div className={styles.homeText}>
						<br />
					</div>
					<div className={styles.homeTextPortfolio}>Front end developer.</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
