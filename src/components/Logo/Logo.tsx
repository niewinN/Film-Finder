import styles from "./Logo.module.css"
import { Link } from "react-router-dom"

export function Logo() {
	return (
		<div className={styles.logo}>
			<Link to='/'>Film Finder</Link>
		</div>
	)
}
