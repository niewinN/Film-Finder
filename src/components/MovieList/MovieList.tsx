import styles from "./MovieList.module.css"
import React, { useEffect, useState } from "react"
import { fetchMovies } from "../../services/tmdbAPI"
import MovieCard from "../MovieCard/MovieCard"
import { Movie } from "../../interfaces/Movie"
import arrowLeft from "../../assets/arrow_left.svg"
import arrowRight from "../../assets/arrow_right.svg"
import useScrollList from "../../hooks/useScrollList"

interface MovieListProps {
	type: "popular" | "topRated" | "upcoming" | "nowPlaying"
	title: string
}

const MovieList: React.FC<MovieListProps> = ({ type, title }) => {
	const [movies, setMovies] = useState<Movie[]>([])
	const { listRef, startDragging, stopDragging, drag, scroll } =
		useScrollList(332)

	useEffect(() => {
		const loadMovies = async () => {
			try {
				const data = await fetchMovies(type)
				setMovies(data.results)
			} catch (error) {
				console.error("Failed to fetch movies:", error)
			}
		}

		loadMovies()
	}, [type])

	return (
		<>
			<h2 className={styles.listTitle}>{title}</h2>

			<div className={styles.container}>
				<button className={styles.scrollButton} onClick={() => scroll("left")}>
					<img
						src={arrowLeft}
						alt='Swipe list to the left'
						width='30'
						height='30'
					/>
				</button>
				<div
					className={styles.list}
					ref={listRef}
					onMouseDown={startDragging}
					onMouseMove={drag}
					onMouseUp={stopDragging}
					onMouseLeave={stopDragging}>
					{movies.map(movie => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</div>
				<button className={styles.scrollButton} onClick={() => scroll("right")}>
					<img
						src={arrowRight}
						alt='Swipe list to the right'
						width='30'
						height='30'
					/>
				</button>
			</div>
		</>
	)
}

export default MovieList
