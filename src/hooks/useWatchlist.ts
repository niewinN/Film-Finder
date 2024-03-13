import { useState, useEffect } from "react"
import { Movie } from "../interfaces/Movie"

export const useWatchlist = (movie: Movie | null | undefined) => {
	const [isAddedToWatchlist, setIsAddedToWatchlist] = useState<boolean>(false)

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

	const toggleWatchlist = () => {
		let existingWatchlist = JSON.parse(
			localStorage.getItem("watchlist") || "[]"
		)

		if (isAddedToWatchlist) {
			existingWatchlist = existingWatchlist.filter(
				(m: Movie) => m.id !== movie?.id
			)
		} else {
			if (movie && !existingWatchlist.some((m: Movie) => m.id === movie.id)) {
				existingWatchlist.push(movie)
			}
		}

		localStorage.setItem("watchlist", JSON.stringify(existingWatchlist))
		setIsAddedToWatchlist(!isAddedToWatchlist)
	}

	return { isAddedToWatchlist, toggleWatchlist }
}
