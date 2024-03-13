import styles from "./MovieItem.module.css"
import { useNavigate } from "react-router-dom"

interface MovieItemProps {
	id: number
	title: string
	releaseDate: string
	posterPath: string
}

export const MovieItem: React.FC<MovieItemProps> = ({
	id,
	title,
	releaseDate,
	posterPath,
}) => {
	const navigate = useNavigate()
	const backgroundImageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`

	return (
		<div
			className={styles.movieItem}
			style={{ backgroundImage: `url(${backgroundImageUrl})` }}
			onClick={() => navigate(`/movie/${id}`)}>
			<div className={styles.overlay}></div>
			<span className={styles.title}>{title}</span>
			<span className={styles.year}>
				Production: {new Date(releaseDate).getFullYear()}
			</span>
		</div>
	)
}
