import { SearchFilmInput } from "../SearchFilmInput/SearchFilmInput"
import styles from "./SearchPanel.module.css"

export function SearchPanel() {
	return (
		<div className={styles.searchPanel}>
			<p>What film are you interested in?</p>
			<SearchFilmInput />
		</div>
	)
}
