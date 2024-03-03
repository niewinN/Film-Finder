import { useEffect, useState } from "react"

interface Film {
	id: number
	title: string
	overview: string
	poster_path?: string
	vote_average: number
}

export const useTrendingFilms = () => {
	const [films, setFilms] = useState<Film[]>([])

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${
				import.meta.env.VITE_API_KEY
			}&language=en-US&page=1`
		)
			.then(res => res.json())
			.then(data => {
				const sortedFilms = [...data.results]
					.sort((a, b) => b.vote_average - a.vote_average)
					.slice(0, 8)
				setFilms(sortedFilms)
			})
			.catch(err => console.error(err))
	}, [])

	return films
}
