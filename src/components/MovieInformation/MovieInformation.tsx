import { useParams } from "react-router-dom"
import styles from "./MovieInformation.module.css"

import star from "../../assets/star.png"
import { FullWidthButton } from "../FullWidthButton/FullWidthButton"
import useMovieDetails from "../../hooks/useMovieDetails"

type Genre = {
	id: number
	name: string
}

interface MovieInformationProps {
	movie?: Movie
	showRemoveButton?: boolean
	onWatchlistChange?: () => void
}

interface Movie {
	id: number
	title: string
	release_date: string
	vote_average: number
	overview: string
	poster_path: string
	vote_count: number
	runtime: number
	genres: Genre[]
}

export const MovieInformation: React.FC<MovieInformationProps> = ({
	movie: movieProp,
	showRemoveButton = false,
	onWatchlistChange,
}) => {
	const { id } = useParams<{ id: string }>()
	const { movie: movieFromHook, isLoading, error } = useMovieDetails(id)
	const movie = movieProp || movieFromHook
	// const { movie, isLoading, error } = useMovieDetails(id || "")

	if (isLoading) {
		return <div>Ładowanie...</div>
	}

	if (error) {
		return <div>Wystąpił błąd: {error}</div>
	}

	const formatYear = (date: string) => date.split("-")[0]

	const formatRuntime = (runtime: number) => {
		const hours = Math.floor(runtime / 60)
		const minutes = runtime % 60

		if (hours === 0 && minutes === 0) {
			return "-"
		} else if (hours === 0) {
			return `${minutes}m`
		} else if (minutes === 0) {
			return `${hours}h`
		} else {
			return `${hours}h ${minutes}m`
		}
	}

	const formatRating = (rating: number) =>
		rating !== 0 ? rating.toFixed(1) : "-"

	const formatGenres = (genres: Genre[]) =>
		genres.map(genre => genre.name).join(", ")

	const handleWatchlistToggle = () => {
		const existingWatchlist = JSON.parse(
			localStorage.getItem("watchlist") || "[]"
		)
		if (showRemoveButton) {
			// Logika usuwania z listy obserwowanych
			const updatedWatchlist = existingWatchlist.filter(
				(m: Movie) => m.id !== movie?.id
			)
			localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist))
		} else {
			// Logika dodawania do listy obserwowanych
			if (!existingWatchlist.some((m: Movie) => m.id === movie?.id)) {
				const updatedWatchlist = [...existingWatchlist, movie]
				localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist))
			}
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
						alt={`Plakat filmu ${movie.title}`}
					/>
					<div className={styles.box}>
						<h1>{movie.title}</h1>
						<div>
							<p>{formatYear(movie.release_date)}</p>
							<div>
								{formatRating(movie.vote_average)}
								<span>
									<img src={star} />
								</span>{" "}
							</div>
						</div>
						<p>Gatunek: {formatGenres(movie.genres)}</p>{" "}
						<p>Opis: {movie.overview || "Brak opisu."}</p>
						<p className={styles.last}>
							Czas trwania: {formatRuntime(movie.runtime)}
						</p>
						<FullWidthButton onClick={handleWatchlistToggle}>
							{showRemoveButton ? "Remove" : "Add to watchlist"}
						</FullWidthButton>
					</div>
				</>
			)}
		</div>
	)
}
