import React, { useEffect, useRef, useState } from "react"
import { fetchMovies } from "../../services/tmdbAPI"
import MovieCard from "../MovieCard/MovieCard"
import styles from "./MovieList.module.css"
import { Movie } from "../../interfaces/Movie"
import arrowLeft from "../../assets/arrow_left.svg"
import arrowRight from "../../assets/arrow_right.svg"
import { Wrapper } from "../Wrapper/Wrapper"

interface MovieListProps {
	type: "popular" | "topRated" | "upcoming" | "nowPlaying"
	title: string
}

const MovieList: React.FC<MovieListProps> = ({ type, title }) => {
	const [movies, setMovies] = useState<Movie[]>([])

	const listRef = useRef<HTMLDivElement>(null)
	const isDragging = useRef(false)
	const startPos = useRef(0)
	const currentScrollLeft = useRef(0)

	const onMouseDown = (e: React.MouseEvent) => {
		isDragging.current = true
		startPos.current = e.pageX
		currentScrollLeft.current = listRef.current?.scrollLeft || 0
	}

	const onMouseMove = (e: React.MouseEvent) => {
		if (!isDragging.current) return
		e.preventDefault()
		const x = e.pageX
		const walk = (x - startPos.current) * 2 // szybkość przewijania
		if (listRef.current) {
			listRef.current.scrollLeft = currentScrollLeft.current - walk
		}
	}

	const onMouseUp = () => {
		isDragging.current = false
	}

	const onMouseLeave = () => {
		isDragging.current = false
	}

	const scroll = (direction: "left" | "right") => {
		if (listRef.current) {
			const scrollAmount = direction === "right" ? 332 : -332 // można dostosować wartość przewijania
			listRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
		}
	}

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
			{/* <Wrapper> */}
			<h2 className={styles.listTitle}>{title}</h2>
			{/* </Wrapper> */}
			<div className={styles.container}>
				<button className={styles.scrollButton} onClick={() => scroll("left")}>
					<img src={arrowLeft} alt='Ikona SVG' width='30' height='30' />
				</button>
				<div
					className={styles.list}
					ref={listRef}
					onMouseDown={onMouseDown}
					onMouseMove={onMouseMove}
					onMouseUp={onMouseUp}
					onMouseLeave={onMouseLeave}>
					{movies.map(movie => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</div>
				<button className={styles.scrollButton} onClick={() => scroll("right")}>
					<img src={arrowRight} alt='Ikona SVG' width='30' height='30' />
				</button>
			</div>
		</>
	)
}

export default MovieList
