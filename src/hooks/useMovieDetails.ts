import { useState, useEffect } from "react"
import { Movie } from "../interfaces/Movie"

const useMovieDetails = (id?: string) => {
	const [movie, setMovie] = useState<Movie | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [error, setError] = useState<string>("")

	useEffect(() => {
		const fetchMovieDetails = async () => {
			if (!id) {
				setIsLoading(false)
				return
			}
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
		fetchMovieDetails()
	}, [id])

	return { movie, isLoading, error }
}

export default useMovieDetails
