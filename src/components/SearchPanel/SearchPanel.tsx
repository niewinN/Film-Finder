import styles from "./SearchPanel.module.css"
import { SearchFilmInput } from "../SearchFilmInput/SearchFilmInput"

export function SearchPanel() {
	return (
		<div className={styles.searchPanel}>
			<p>What film are you interested in?</p>
			<SearchFilmInput />
		</div>
	)
}
