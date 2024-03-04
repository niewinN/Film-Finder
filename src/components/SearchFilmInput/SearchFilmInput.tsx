import styles from "./SearchFilmInput.module.css"
import useSearchMovies from "../../hooks/useSearchMovies"
import MovieItemList from "../MovieItemList/MovieItemList"

export function SearchFilmInput() {
	const { query, setQuery, results, isSearching, errorMessage } =
		useSearchMovies()

	return (
		<div className={styles.searchFilm}>
			<input
				type='text'
				placeholder='Nazwa filmu...'
				value={query}
				onChange={e => setQuery(e.target.value)}
			/>
			{isSearching && <div>Searching...</div>}
			{errorMessage && <div>{errorMessage}</div>}
			{results.length > 0 && <MovieItemList movies={results} />}
		</div>
	)
}
