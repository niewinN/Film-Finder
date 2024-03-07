import styles from "./Logo.module.css"
import { Link } from "react-router-dom"

export function Logo() {
	const scrollToTop = () => {
		if (location.pathname === "/") {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			})
		}
	}

	return (
		<div className={styles.logo} onClick={scrollToTop}>
			<Link to='/'>Film Finder</Link>
		</div>
	)
}
