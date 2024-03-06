import { useState, useEffect } from "react"
import useDebounce from "./useDebounce"
import { useFilters } from "../contexts/FiltersContext"
import { filterMovies } from "../utils/movieFilters"

interface Movie {
	id: number
	title: string
	poster_path: string
	backdrop_path: string
	release_date: string
	adult: boolean
	genre_ids: number[]
}

const useSearchMovies = (initialQuery: string = "", delay: number = 500) => {
	const [query, setQuery] = useState<string>(initialQuery)
	const [results, setResults] = useState<Movie[]>([])
	const [isSearching, setIsSearching] = useState<boolean>(false)
	const [errorMessage, setErrorMessage] = useState<string>("")

	const { selectedGenres, selectedYears, isAdult } = useFilters()

	const debouncedQuery = useDebounce<string>(query, delay)

	useEffect(() => {
		if (debouncedQuery.trim()) {
			setIsSearching(true)
			const api_key = import.meta.env.VITE_API_KEY
			const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${encodeURIComponent(
				debouncedQuery
			)}&language=en-US&include_adult=true`

			fetch(url)
				.then(res => {
					if (!res.ok) {
						throw new Error(`HTTP error! Status: ${res.status}`)
					}
					return res.json()
				})
				.then(data => {
					const filters = { selectedGenres, selectedYears, isAdult }
					const filteredResults = filterMovies(data.results, filters)

					setResults(filteredResults)

					if (filteredResults.length === 0) {
						setErrorMessage("No movies found matching the criteria.")
					} else {
						setErrorMessage("")
					}
				})
				.catch(error => {
					console.error("Error fetching data: ", error)
					setResults([])
					setErrorMessage("Error fetching data")
				})
				.finally(() => {
					setIsSearching(false)
				})
		} else {
			setResults([])
			setErrorMessage("")
		}
	}, [debouncedQuery, isAdult, selectedYears, selectedGenres])

	return { query, setQuery, results, isSearching, errorMessage }
}

export default useSearchMovies
