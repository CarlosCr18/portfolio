import styles from "./navigation.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<nav className={styles.nav}>
			<div className={styles.linksContainer}>
				<div className={styles.link}>
					<Link to={"/"}>Home</Link>
				</div>
				<div className={styles.link}>
					<Link to={"/About"}>About</Link>
				</div>
				<div className={styles.link}>
					<Link to={"/Projects"}>Projects</Link>
				</div>
				<div className={styles.link}>
					<Link to={"/Contact"}>Contact</Link>
				</div>
				<div className={styles.linksIconsContainer}>
					<a
						href="https://github.com/CarlosCr18"
						target="_blank"
						aria-label="link to github"
						className={styles.link}
						rel="noreferrer"
					>
						<i className="fa fa-github"></i>
					</a>
					<a
						target="_blank"
						href="https://www.linkedin.com/in/carlos-lopez-crespo/"
						aria-label="link to linkedin"
						className={styles.link}
						rel="noreferrer"
					>
						<i className="fa fa-linkedin" aria-hidden="true"></i>
					</a>
					<a
						href="/resume.pdf"
						target="_blank"
						aria-label="link to download"
						className={styles.link}
						rel="noreferrer"
					>
						<i className="fa fa-download" aria-hidden="true"></i>
					</a>
				</div>
			</div>
		</nav>
	);
}
