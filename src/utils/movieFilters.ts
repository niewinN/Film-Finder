import { genreMap } from "../constants/genreOptions"

interface Movie {
	id: number
	title: string
	poster_path: string
	backdrop_path: string
	release_date: string
	adult: boolean
	genre_ids: number[]
}

interface Filters {
	selectedGenres: { [key: string]: boolean }
	selectedYears: { [key: string]: boolean }
	isAdult: boolean
}

export const filterMovies = (movies: Movie[], filters: Filters): Movie[] => {
	const { selectedGenres, selectedYears, isAdult } = filters

	return movies.filter((movie: Movie) => {
		const hasPosterAndReleaseDate = movie.poster_path && movie.release_date
		const matchesAdultCriteria = isAdult ? movie.adult : true

		const anyYearSelected = Object.values(selectedYears).some(value => value)
		const matchesSelectedYears = (release_date: string) => {
			if (!anyYearSelected) return true
			const year = parseInt(release_date.split("-")[0])
			return (
				(selectedYears.before_2000 && year < 2000) ||
				(selectedYears["2000_2010"] && year >= 2000 && year <= 2010) ||
				(selectedYears["2010_2020"] && year > 2010 && year <= 2020) ||
				(selectedYears.after_2020 && year > 2020)
			)
		}

		const selectedGenreIds = Object.keys(selectedGenres)
			.filter(key => selectedGenres[key])
			.map(key => genreMap[key])
		const matchesGenreCriteria =
			selectedGenreIds.length === 0 ||
			movie.genre_ids.some(id => selectedGenreIds.includes(id))

		return (
			hasPosterAndReleaseDate &&
			matchesAdultCriteria &&
			matchesSelectedYears(movie.release_date) &&
			matchesGenreCriteria
		)
	})
}
