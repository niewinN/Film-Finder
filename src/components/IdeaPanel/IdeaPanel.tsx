import styles from "./IdeaPanel.module.css"
import { FullWidthButton } from "../FullWidthButton/FullWidthButton"
import boxImg from "../../assets/box.png"
import { useCountdownWithAction } from "../../hooks/useCountdownWithAction"

interface IdeaPanelProps {
	onGenerateClick: () => void
}

export function IdeaPanel({ onGenerateClick }: IdeaPanelProps) {
	const { countdown, isActive, startCountdown } = useCountdownWithAction(
		3,
		onGenerateClick
	)

	return (
		<div className={styles.ideaPanel}>
			<div>
				<h1>Don't have an idea for a film?</h1>
				<p>Click the button below, let fate decide for you</p>
				<FullWidthButton onClick={startCountdown} disabled={isActive}>
					Generate
				</FullWidthButton>
			</div>
			{countdown > 0 ? (
				<div className={styles.countdown}>{countdown}</div>
			) : (
				<img src={boxImg} alt='Box Image' />
			)}
		</div>
	)
}
