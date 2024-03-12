import styles from "../components/MovieDetails/MovieDetails.module.css"
import { useState, useEffect, useRef } from "react"
import { IdeaPanel } from "../components/IdeaPanel/IdeaPanel"
import { Layout } from "../components/Layout/Layout"
import { MovieInformation } from "../components/MovieInformation/MovieInformation"
import { ReloadIcon } from "../components/ReloadIcon/ReloadIcon"

export function IdeaPage() {
	const [showIdeaPanel, setShowIdeaPanel] = useState(true)
	const [movieData, setMovieData] = useState(null)
	const [isLoadingMovie, setIsLoadingMovie] = useState(false)
	const [totalPages, setTotalPages] = useState(null)

	const API_KEY = import.meta.env.VITE_API_KEY
	const API_URL = "https://api.themoviedb.org/3"
	const MAX_PAGE_LIMIT = 500 // Bezpieczne ograniczenie liczby stron

	useEffect(() => {
		// Inicjalne pobranie liczby stron, jeśli jeszcze nie mamy tej informacji
		const fetchTotalPages = async () => {
			if (totalPages === null) {
				try {
					const response = await fetch(
						`${API_URL}/movie/popular?api_key=${API_KEY}`
					)
					const data = await response.json()
					setTotalPages(Math.min(data.total_pages, MAX_PAGE_LIMIT))
				} catch (error) {
					console.error("Error fetching total pages:", error)
				}
			}
		}
		fetchTotalPages()
	}, [totalPages, API_KEY, API_URL])

	const getRandomPage = () => {
		return Math.floor(Math.random() * Math.min(totalPages, MAX_PAGE_LIMIT)) + 1
	}

	const fetchRandomMovieDetails = async () => {
		// Pomijamy, jeśli nie mamy informacji o liczbie stron
		if (!totalPages) return

		try {
			const randomPage = getRandomPage()
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
			return movies[Math.floor(Math.random() * movies.length)]
		} catch (error) {
			console.error("Error fetching random movie details:", error)
			return null
		}
	}

	const lastRequestIdRef = useRef(0)

	const fetchMovieDetailsUntilFound = async () => {
		setShowIdeaPanel(false)
		setIsLoadingMovie(true)
		setMovieData(null)
		let movieDetails = null
		let attempts = 0
		const requestId = ++lastRequestIdRef.current // Inkrementuj przy każdym wywołaniu

		while (!movieDetails && attempts < 10) {
			const movie = await fetchRandomMovieDetails()
			if (movie) {
				if (requestId !== lastRequestIdRef.current) {
					// Jeśli identyfikator żądania się nie zgadza, przerywamy pętlę
					return
				}
				const detailsResponse = await fetch(
					`${API_URL}/movie/${movie.id}?api_key=${API_KEY}`
				)
				if (detailsResponse.ok) {
					movieDetails = await detailsResponse.json()
					break
				}
			}
			attempts += 1
			await new Promise(resolve => setTimeout(resolve, 500)) // 500ms delay
		}

		if (movieDetails && requestId === lastRequestIdRef.current) {
			setMovieData(movieDetails)
		} else if (!movieDetails) {
			console.error("Failed to fetch movie details after several attempts.")
			setShowIdeaPanel(true)
		}
		setIsLoadingMovie(false)
	}

	return (
		<Layout>
			<div>
				{showIdeaPanel && !isLoadingMovie && (
					<IdeaPanel onGenerateClick={fetchMovieDetailsUntilFound} />
				)}
				{movieData && !isLoadingMovie && (
					<div className={styles.movieDetails}>
						<MovieInformation movie={movieData} />
					</div>
				)}
			</div>
			{movieData && !isLoadingMovie && (
				<ReloadIcon onGenerateClick={fetchMovieDetailsUntilFound} />
			)}
		</Layout>
	)
}
