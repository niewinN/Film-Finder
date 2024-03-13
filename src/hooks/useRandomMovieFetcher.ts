import { useEffect, useRef, useState } from "react"

export function useRandomMovieFetcher(API_URL: string, API_KEY: string) {
	const [showIdeaPanel, setShowIdeaPanel] = useState(true)
	const [movieData, setMovieData] = useState(null)
	const [isLoadingMovie, setIsLoadingMovie] = useState(false)
	const [totalPages, setTotalPages] = useState<number | null>(null)
	const lastRequestIdRef = useRef(0)
	const MAX_PAGE_LIMIT = 500

	useEffect(() => {
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
		if (totalPages === null) return 1
		return Math.floor(Math.random() * Math.min(totalPages, MAX_PAGE_LIMIT)) + 1
	}

	const fetchRandomMovieDetails = async () => {
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

	const fetchMovieDetailsUntilFound = async () => {
		setShowIdeaPanel(false)
		setIsLoadingMovie(true)
		setMovieData(null)
		let movieDetails = null
		let attempts = 0
		const requestId = ++lastRequestIdRef.current

		while (!movieDetails && attempts < 10) {
			const movie = await fetchRandomMovieDetails()
			if (movie) {
				if (requestId !== lastRequestIdRef.current) {
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
			await new Promise(resolve => setTimeout(resolve, 500))
		}

		if (movieDetails && requestId === lastRequestIdRef.current) {
			setMovieData(movieDetails)
		} else if (!movieDetails) {
			console.error("Failed to fetch movie details after several attempts.")
			setShowIdeaPanel(true)
		}
		setIsLoadingMovie(false)
	}

	return {
		showIdeaPanel,
		setShowIdeaPanel,
		movieData,
		isLoadingMovie,
		fetchMovieDetailsUntilFound,
	}
}
