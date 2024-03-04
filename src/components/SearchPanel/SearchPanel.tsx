import { SearchFilmInput } from "../SearchFilmInput/SearchFilmInput"
import styles from "./SearchPanel.module.css"

export function SearchPanel() {
	return (
		<div className={styles.searchPanel}>
			<h2>Biblioteka</h2>
			<p>Jaki film cię interesuję?</p>
			<SearchFilmInput />
		</div>
	)
}
