import { useState } from "react";
import styles from "./Contact.module.css";
import NavBar from "../../reusableComponents/navigationBar/navigationBar";
import axios from "axios";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const formCurrentData = {
		title: "Let's work together!",
		text: "Do you love development as much as I do? \n Do you have a project in mind that you think we can make it happen? \n My inbox is always open wether you are a potential client, a recruiter or you just want to say hello!",
		formSent: "Thank you for leaving a message, I will get to you soon!",
		nameLabel: "Name",
		namePlaceholder: "Your name",
		emailPlaceholder: "Your email address",
		textAreaLabel: "What's in your mind?",
		textAreaPlaceholder: "Your message",
		submitButtonText: "Send",
		submitLoadingText: "Sending...",
	};
	// let formCurrentData = language === "en" ? formData[1] : formData[0];
	return (
		<div className={styles.contact}>
			<NavBar></NavBar>
			<div className={styles.contentForm} id="content-form">
				<div className={styles.contentFormContainer}>
					<div className={styles.contentFormText}>
						<h2>{formCurrentData.title}</h2>
						<p
							className={styles.contentFormTextText}
							id="content-form-text-text"
						>
							{formCurrentData.text.split("\n")[0]}
							<br></br>
							<br></br>
							{formCurrentData.text.split("\n")[1]}
							<br></br>
							<br></br>
							{formCurrentData.text.split("\n")[2]}
							<br></br>
							<br></br>
							You can reach me through this form or via Email at
							CarlosCrespo18@gmail.com
						</p>
					</div>
					<div className={styles.contentFormForm}>
						<p className={styles.formSent} id="formSent">
							{formCurrentData.formSent}
						</p>
						<form
							className={styles.form}
							id="ContactForm"
							method="post"
							onSubmit={(e) => {
								e.preventDefault();
								let form = e.target as HTMLFormElement;
								let submitLoading = document.getElementById("submitLoading");
								let submitButton = document.getElementById("submitButton");
								if (submitLoading && submitButton) {
									submitLoading.style.display = "block";
									submitButton.style.display = "none";
								}

								axios.defaults.headers.post["Content-Type"] =
									"application/json";
								axios
									.post(
										"https://formsubmit.co/ajax/6b09db79274ba4b5e642ee65d5f484ce",
										{
											name: name,
											email: email,
											message: message,
										},
										{ timeout: 2000 }
									)
									.then((response) => {
										console.log(response, "success");
										(form as HTMLFormElement).style.display = "none";
										let contactForm = document.getElementById("ContactForm");
										let formSent = document.getElementById("formSent");
										if (contactForm && formSent) {
											contactForm.style.display = "none";
											formSent.style.display = "block";
										}
									})
									.catch((error) => {
										console.log(error, "Error");
										alert("Error");
										if (submitLoading && submitButton) {
											submitLoading.style.display = "none";
											submitButton.style.display = "block";
										}
									});
							}}
						>
							<label htmlFor="name">{formCurrentData.nameLabel}</label>
							<input
								type="text"
								placeholder={formCurrentData.namePlaceholder}
								id="name"
								name="name"
								onChange={(e) => setName(e.target.value)}
								required
							/>
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder={formCurrentData.emailPlaceholder}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
							<label htmlFor="message">{formCurrentData.textAreaLabel}</label>
							<textarea
								className="contactanos-form-textarea"
								placeholder={formCurrentData.textAreaPlaceholder}
								id="message"
								name="message"
								onChange={(e) => setMessage(e.target.value)}
								required
							></textarea>
							<button
								id="submitButton"
								className={styles.submitButton}
								type="submit"
							>
								{formCurrentData.submitButtonText}
							</button>
							<p id="submitLoading" className={styles.submitLoading}>
								{formCurrentData.submitLoadingText}
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Contact;
