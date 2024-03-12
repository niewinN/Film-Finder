import { useParams } from "react-router-dom"
import styles from "./MovieInformation.module.css"
import star from "../../assets/star.png"
import { FullWidthButton } from "../FullWidthButton/FullWidthButton"
import useMovieDetails from "../../hooks/useMovieDetails"
import { useEffect, useState } from "react"

type Genre = {
	id: number
	name: string
}

interface MovieInformationProps {
	movie?: Movie
	showRemoveButton?: boolean
	onWatchlistChange?: () => void
	showModal: (title: string, text: string) => void
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
	showModal,
}) => {
	const { id } = useParams<{ id: string }>()
	const { movie: movieFromHook, isLoading, error } = useMovieDetails(id)
	const [isAddedToWatchlist, setIsAddedToWatchlist] = useState(false)
	const movie = movieProp || movieFromHook

	useEffect(() => {
		if (!movie) return

		const existingWatchlist = JSON.parse(
			localStorage.getItem("watchlist") || "[]"
		)
		const isOnWatchlist = existingWatchlist.some(
			(m: Movie) => m.id === movie.id
		)
		setIsAddedToWatchlist(isOnWatchlist)
	}, [movie])

	if (isLoading) {
		return <div>Ładowanie...</div>
	}

	if (error) {
		return <div>Wystąpił błąd: {error}</div>
	}

	const isDescriptionLong = description => {
		return description.split(" ").length > 70
	}

	const descriptionClassName = isDescriptionLong(movie.overview)
		? `${styles.description} ${styles.long}`
		: styles.description

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
		if (isAddedToWatchlist) {
			// Logika usuwania z listy obserwowanych
			const updatedWatchlist = existingWatchlist.filter(
				(m: Movie) => m.id !== movie?.id
			)
			localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist))
			setIsAddedToWatchlist(false)
		} else {
			// Logika dodawania do listy obserwowanych
			if (!existingWatchlist.some((m: Movie) => m.id === movie?.id)) {
				const updatedWatchlist = [...existingWatchlist, movie]
				localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist))
				setIsAddedToWatchlist(true)
			}
		}
		if (onWatchlistChange) {
			onWatchlistChange()
		}

		showModal(
			`Watchlist Update`,
			`The movie was successfully ${
				showRemoveButton ? "removed from" : "added to"
			} your watchlist.`
		)

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
							<p className={styles.time}>
								{formatYear(movie.release_date)} <span>|</span>
								<span>{formatRuntime(movie.runtime)}</span>
							</p>
							<div>
								{formatRating(movie.vote_average)}
								<span>
									<img src={star} />
								</span>{" "}
							</div>
						</div>
						<p>Gatunek: {formatGenres(movie.genres)}</p>{" "}
						<p className={descriptionClassName}>
							Opis: {movie.overview || "Brak opisu."}
						</p>
						<FullWidthButton
							onClick={handleWatchlistToggle}
							disabled={!showRemoveButton && isAddedToWatchlist} // Tutaj poprawione
						>
							{showRemoveButton ? "Remove" : "Add to watchlist"}
						</FullWidthButton>
					</div>
				</>
			)}
		</div>
	)
}
