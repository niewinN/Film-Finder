// import { genreMap } from "../constants/genreOptions"

// interface FetchMoviesParams {
// 	query: string
// 	isAdult: boolean
// 	selectedYears: {
// 		[key: string]: boolean
// 	}
// 	selectedGenres: {
// 		[key: string]: boolean
// 	}
// }

// interface Movie {
// 	id: number
// 	title: string
// 	poster_path: string
// 	release_date: string
// 	adult: boolean
// 	genre_ids: number[]
// }

// export const fetchMovies = async ({
// 	query,
// 	isAdult,
// 	selectedYears,
// 	selectedGenres,
// }: FetchMoviesParams): Promise<Movie[]> => {
// 	const api_key = import.meta.env.VITE_API_KEY
// 	// Ensure include_adult parameter is set to true when isAdult is not specifically set to false.
// 	const includeAdult = isAdult !== false ? "true" : "false"
// 	const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${encodeURIComponent(
// 		query
// 	)}&language=en-US&include_adult=${includeAdult}`

// 	try {
// 		const response = await fetch(url)
// 		if (!response.ok) {
// 			throw new Error(`HTTP error! Status: ${response.status}`)
// 		}
// 		const data = await response.json()
// 		return data.results.filter((movie: Movie) => {
// 			const hasPosterAndReleaseDate = movie.poster_path && movie.release_date
// 			const matchesAdultCriteria = isAdult ? movie.adult : true

// 			const anyYearSelected = Object.values(selectedYears).some(value => value)
// 			const matchesSelectedYears = (release_date: string) => {
// 				if (!anyYearSelected) return true
// 				const year = parseInt(release_date.split("-")[0])
// 				return (
// 					(selectedYears.before_2000 && year < 2000) ||
// 					(selectedYears["2000_2010"] && year >= 2000 && year <= 2010) ||
// 					(selectedYears["2010_2020"] && year > 2010 && year <= 2020) ||
// 					(selectedYears.after_2020 && year > 2020)
// 				)
// 			}

// 			const selectedGenreIds = Object.keys(selectedGenres)
// 				.filter(key => selectedGenres[key])
// 				.map(key => genreMap[key])
// 			const matchesGenreCriteria =
// 				selectedGenreIds.length === 0 ||
// 				movie.genre_ids.some(id => selectedGenreIds.includes(id))

// 			return (
// 				hasPosterAndReleaseDate &&
// 				matchesAdultCriteria &&
// 				matchesSelectedYears(movie.release_date) &&
// 				matchesGenreCriteria
// 			)
// 		})
// 	} catch (error) {
// 		console.error("Error fetching data: ", error)
// 		throw error // Rethrow to allow the calling function to handle it
// 	}
// }
