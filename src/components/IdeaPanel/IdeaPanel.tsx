import styles from "./IdeaPanel.module.css"
import { FullWidthButton } from "../FullWidthButton/FullWidthButton"
import boxImg from "../../assets/box.png"

export function IdeaPanel({ onGenerateClick }) {
	return (
		<div className={styles.ideaPanel}>
			<div>
				<h1>Don't have an idea for a film?</h1>
				<p>Click the button below, let fate decide for you</p>
				<FullWidthButton onClick={onGenerateClick}>Generate</FullWidthButton>
			</div>
			<img src={boxImg} alt='Box Image' />
		</div>
	)
}
