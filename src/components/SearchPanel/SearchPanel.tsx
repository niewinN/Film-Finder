import { SearchFilmInput } from "../SearchFilmInput/SearchFilmInput"
import styles from "./SearchPanel.module.css"

export function SearchPanel() {
	return (
		<div className={styles.searchPanel}>
			<p>Jaki film cię interesuję?</p>
			<SearchFilmInput />
		</div>
	)
}
