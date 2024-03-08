import styles from "../components/MovieDetails/MovieDetails.module.css"
import { useState } from "react"
import { IdeaPanel } from "../components/IdeaPanel/IdeaPanel"
import { Layout } from "../components/Layout/Layout"
import { MovieInformation } from "../components/MovieInformation/MovieInformation"

export function IdeaPage() {
	const [showIdeaPanel, setShowIdeaPanel] = useState<boolean>(true)
	const [movieData, setMovieData] = useState(null)

	const API_KEY = import.meta.env.VITE_API_KEY
	const API_URL = "https://api.themoviedb.org/3"

	const MAX_PAGE_LIMIT = 500 // Bezpieczne ograniczenie liczby stron

	const getRandomPage = maxPage => {
		return Math.floor(Math.random() * Math.min(maxPage, MAX_PAGE_LIMIT)) + 1
	}

	const fetchRandomMovieDetails = async () => {
		try {
			const initialResponse = await fetch(
				`${API_URL}/movie/popular?api_key=${API_KEY}`
			)
			const initialData = await initialResponse.json()
			const totalPages = Math.min(initialData.total_pages, MAX_PAGE_LIMIT)

			const randomPage = getRandomPage(totalPages)
			const response = await fetch(
				`${API_URL}/movie/popular?api_key=${API_KEY}&page=${randomPage}`
			)
			if (!response.ok) {
				throw new Error(`API call failed with status: ${response.status}`)
			}
			const data = await response.json()
			const movies = data.results
			if (movies.length === 0) {
				throw new Error("No movies found on the page")
			}
			const randomIndex = Math.floor(Math.random() * movies.length)
			return movies[randomIndex]
		} catch (error) {
			console.error("Error fetching random movie details:", error)
			return null
		}
	}

	const fetchMovieDetailsUntilFound = async () => {
		let movieDetails = null
		let attempts = 0

		while (!movieDetails && attempts < 10) {
			const movie = await fetchRandomMovieDetails()

			if (movie) {
				const detailsResponse = await fetch(
					`${API_URL}/movie/${movie.id}?api_key=${API_KEY}`
				)
				if (detailsResponse.ok) {
					movieDetails = await detailsResponse.json()
					break
				}
			}

			attempts += 1
		}

		if (movieDetails) {
			setMovieData(movieDetails)
			setShowIdeaPanel(false) // Zaktualizuj stan, aby wyświetlić MovieInformation
		} else {
			console.error("Failed to fetch movie details after several attempts.")
		}
	}

	return (
		<Layout>
			<div>
				{showIdeaPanel ? (
					<div>
						<IdeaPanel onGenerateClick={fetchMovieDetailsUntilFound} />
					</div>
				) : (
					<div className={styles.movieDetails}>
						<MovieInformation movie={movieData} />
					</div>
				)}
			</div>
		</Layout>
	)
}
