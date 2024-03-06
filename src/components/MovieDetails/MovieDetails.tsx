import styles from "./MovieDetails.module.css"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

interface Movie {
	title: string
	release_date: string
	vote_average: number
	overview: string
	poster_path: string
}

const MovieDetails: React.FC = () => {
	const { id } = useParams<{ id: string }>()
	const [movie, setMovie] = useState<Movie | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [error, setError] = useState<string>("")

	useEffect(() => {
		const fetchMovieDetails = async () => {
			setIsLoading(true)
			try {
				const apiKey = import.meta.env.VITE_API_KEY
				const response = await fetch(
					`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
				)
				if (!response.ok) {
					throw new Error("Nie udało się pobrać danych filmu")
				}
				const data = await response.json()
				setMovie(data)
			} catch (error) {
				setError(error instanceof Error ? error.message : "Nieznany błąd")
			} finally {
				setIsLoading(false)
			}
		}

		if (id) {
			fetchMovieDetails()
		}
	}, [id])

	if (isLoading) {
		return <div>Ładowanie...</div>
	}

	if (error) {
		return <div>Wystąpił błąd: {error}</div>
	}

	return (
		<div className={styles.movieDetails}>
			{movie && (
				<>
					<img
						src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						alt={`Plakat filmu ${movie.title}`}
					/>
					<div>
						<h1>{movie.title}</h1>
						<p>Data wydania: {movie.release_date}</p>
						<p>Ocena: {movie.vote_average}</p>
						<p>{movie.overview}</p>
					</div>
				</>
			)}
		</div>
	)
}

export default MovieDetails
