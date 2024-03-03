import styles from "./TrendingFilmList.module.css"
import { TrendingFilm } from "../TrendingFilm/TrendingFilm"
import { useTrendingFilms } from "../../hooks/useTrendingFilms"
import { MainContent } from "../MainContent/MainContent"

export function TrendingFilmList() {
	const films = useTrendingFilms()

	return (
		<div className={styles.trendingList}>
			<MainContent>
				<div className={styles.flex}>
					<h2>Najpopularniejsze filmy</h2>
				</div>
				<ul>
					{films.map(film => (
						<TrendingFilm
							key={film.id}
							title={film.title}
							overview={film.overview}
							posterPath={film.poster_path}
							voteAverage={film.vote_average}
						/>
					))}
				</ul>
			</MainContent>
		</div>
	)
}
