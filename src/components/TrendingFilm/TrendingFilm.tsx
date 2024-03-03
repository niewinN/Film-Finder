import styles from "./TrendingFilm.module.css"

interface TrendingFilmProps {
	title: string
	overview: string
	posterPath?: string
	voteAverage: number
}

export function TrendingFilm({
	title,
	posterPath,
	voteAverage,
}: TrendingFilmProps) {
	return (
		<div className={styles.film}>
			{posterPath && (
				<img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />
			)}
			<h3>{title}</h3>
			<div>{voteAverage.toFixed(1)}</div>
		</div>
	)
}
