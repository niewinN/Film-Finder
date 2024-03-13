import styles from "./MovieCard.module.css"
import { Movie } from "../../interfaces/Movie"
import { useNavigate } from "react-router-dom"
import { trimOverview } from "../../utils/textLength"

interface MovieCardProps {
	movie: Movie
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
	const { id, title, poster_path, overview } = movie
	const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`
	const navigate = useNavigate()

	const onCardClick = () => {
		navigate(`/movie/${id}`)
		window.scrollTo(0, 0)
	}

	return (
		<div className={styles.card} onClick={onCardClick}>
			<img src={imageUrl} alt={`Poster of ${title}`} className={styles.image} />
			<div className={styles.info}>
				<h3>{title}</h3>
				<p>{trimOverview(overview, 30)}</p>
			</div>
		</div>
	)
}

export default MovieCard
