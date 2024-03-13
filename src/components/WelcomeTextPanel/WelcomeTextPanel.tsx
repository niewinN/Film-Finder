import styles from "./WelcomeTextPanel.module.css"
import { Link } from "react-router-dom"

export function WelcomeTextPanel() {
	return (
		<div className={styles.welcomePanel}>
			<div className={styles.searchBox}>
				<h1>Welcome to Film Finder</h1>
				<p>This is a place created for film lovers</p>
				<Link className={styles.button} to='/library'>
					Search
				</Link>
			</div>
		</div>
	)
}
