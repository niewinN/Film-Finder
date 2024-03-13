import styles from "./MovieItemList.module.css"
import { MovieItem } from "../MovieItem/MovieItem"

interface Movie {
	id: number
	title: string
	release_date: string
	poster_path: string
}

interface MovieItemListProps {
	movies: Movie[]
}

const MovieItemList = ({ movies }: MovieItemListProps) => {
	return (
		<div className={styles.movieItemList}>
			{movies.map(movie => (
				<MovieItem
					id={movie.id}
					title={movie.title}
					releaseDate={movie.release_date}
					posterPath={movie.poster_path}
				/>
			))}
		</div>
	)
}

export default MovieItemList
