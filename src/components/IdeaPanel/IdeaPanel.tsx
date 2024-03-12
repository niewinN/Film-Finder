import styles from "./IdeaPanel.module.css"
import { FullWidthButton } from "../FullWidthButton/FullWidthButton"
import boxImg from "../../assets/box.png"
import { useState } from "react"

export function IdeaPanel({ onGenerateClick }) {
	const [countdown, setCountdown] = useState(0)

	const handleGenerateClick = () => {
		setCountdown(3) // Start the countdown
		const intervalId = setInterval(() => {
			setCountdown(prevCountdown => {
				if (prevCountdown <= 1) {
					clearInterval(intervalId) // Stop the countdown
					onGenerateClick() // Call the function passed as a prop
					return 0
				}
				return prevCountdown - 1
			})
		}, 1000) // Count down every second
	}
	return (
		<div className={styles.ideaPanel}>
			<div>
				<h1>Don't have an idea for a film?</h1>
				<p>Click the button below, let fate decide for you</p>
				<FullWidthButton onClick={handleGenerateClick} disabled={countdown > 0}>
					Generate
				</FullWidthButton>
			</div>
			{countdown > 0 ? (
				<div className={styles.countdown}>{countdown}</div> // Wyświetl odliczanie
			) : (
				<img src={boxImg} alt='Box Image' /> // Standardowe wyświetlanie obrazu, jeśli nie ma odliczania
			)}
		</div>
	)
}
