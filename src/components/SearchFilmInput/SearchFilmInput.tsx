import styles from "./SearchFilmInput.module.css"
import useSearchMovies from "../../hooks/useSearchMovies"
import MovieItemList from "../MovieItemList/MovieItemList"
import { Error } from "../Error/Error"

export function SearchFilmInput() {
	const { query, setQuery, results, errorMessage } = useSearchMovies()

	return (
		<div className={styles.searchFilm}>
			<input
				type='text'
				placeholder='Film title...'
				value={query}
				onChange={e => setQuery(e.target.value)}
			/>
			{errorMessage && (
				<Error style={{ marginTop: "2rem" }}>{errorMessage}</Error>
			)}
			{results.length > 0 && <MovieItemList movies={results} />}
		</div>
	)
}
