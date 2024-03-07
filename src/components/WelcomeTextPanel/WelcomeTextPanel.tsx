import { Link } from "react-router-dom"
import styles from "./WelcomeTextPanel.module.css"

export function WelcomeTextPanel() {
	return (
		<div className={styles.welcomePanel}>
			<div className={styles.searchBox}>
				<h1>Welcome to Film Finder</h1>
				<p>This is a place created for film lovers</p>
				<button>
					<Link to='/library'>Search</Link>
				</button>
			</div>
		</div>
	)
}
