import { MovieItem } from "../MovieItem/MovieItem"
import styles from "./MovieItemList.module.css" // Załóżmy, że mamy tutaj odpowiednie style

interface Movie {
	id: number
	title: string
	release_date: string
	poster_path: string
}

interface MovieItemListProps {
	movies: Movie[] // Use the Movie interface to type the movies array
}

const MovieItemList = ({ movies }: MovieItemListProps) => {
	return (
		<div className={styles.movieItemList}>
			{movies.map(movie => (
				<MovieItem
					key={movie.id}
					title={movie.title}
					releaseDate={movie.release_date}
					posterPath={movie.poster_path}
				/>
			))}
		</div>
	)
}

export default MovieItemList
