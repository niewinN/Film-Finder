import styles from "./MovieInformation.module.css"
import { useParams } from "react-router-dom"
import star from "../../assets/star.png"
import { FullWidthButton } from "../FullWidthButton/FullWidthButton"
import useMovieDetails from "../../hooks/useMovieDetails"
import { Movie } from "../../interfaces/Movie"
import {
	formatYear,
	formatGenres,
	formatRating,
	formatRuntime,
	isDescriptionLong,
} from "../../utils/movieFormats"
import { useWatchlist } from "../../hooks/useWatchlist"

interface MovieInformationProps {
	movie?: Movie
	showRemoveButton?: boolean
	onWatchlistChange?: () => void
	showModal?: (title: string, text: string) => void
}

export const MovieInformation: React.FC<MovieInformationProps> = ({
	movie: movieProp,
	showRemoveButton = false,
	onWatchlistChange,
	showModal,
}) => {
	const { id } = useParams<{ id: string }>()
	const { movie: movieFromHook, isLoading, error } = useMovieDetails(id)
	const movie = movieProp || movieFromHook
	const { isAddedToWatchlist, toggleWatchlist } = useWatchlist(movie)

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>Error: {error}</div>
	if (!movie) return <div>Movie not found</div>

	const descriptionClassName = isDescriptionLong(movie.overview)
		? `${styles.description} ${styles.long}`
		: styles.description

	const handleWatchlistToggle = () => {
		toggleWatchlist()
		if (showModal) {
			showModal(
				`Watchlist Update`,
				`The movie was successfully ${
					showRemoveButton ? "removed from" : "added to"
				} your watchlist.`
			)
		}
		if (onWatchlistChange) {
			onWatchlistChange()
		}
	}

	return (
		<div className={styles.movieInformation}>
			{movie && (
				<>
					<img
						src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						alt={`Poster of ${movie.title}`}
					/>
					<div className={styles.box}>
						<h1>{movie.title}</h1>
						<div>
							<p className={styles.time}>
								{formatYear(movie.release_date)} <span>|</span>
								<span>{formatRuntime(movie.runtime)}</span>
							</p>
							<div>
								{formatRating(movie.vote_average)}
								<span>
									<img src={star} alt='Star rating' />
								</span>{" "}
							</div>
						</div>
						<p>Genre: {formatGenres(movie.genres)}</p>{" "}
						<p className={descriptionClassName}>
							Description: {movie.overview || "No description."}
						</p>
						<FullWidthButton
							onClick={handleWatchlistToggle}
							disabled={!showRemoveButton && isAddedToWatchlist}>
							{showRemoveButton ? "Remove" : "Add to watchlist"}
						</FullWidthButton>
					</div>
				</>
			)}
		</div>
	)
}
