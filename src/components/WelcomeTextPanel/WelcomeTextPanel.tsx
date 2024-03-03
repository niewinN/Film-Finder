import { Link } from "react-router-dom"
import styles from "./WelcomeTextPanel.module.css"

export function WelcomeTextPanel() {
	return (
		<div className={styles.welcomePanel}>
			<div className={styles.searchBox}>
				<h1>Witaj w Film Finder</h1>
				<p>To tutaj znajdziesz wszystko o filmach</p>
				<button>
					<Link to='#'>Sprawdź</Link>
				</button>
			</div>
		</div>
	)
}
