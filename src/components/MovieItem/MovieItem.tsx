import React from "react"
import styles from "./MovieItem.module.css"

interface MovieItemProps {
	title: string
	releaseDate: string
	posterPath: string
}

export const MovieItem: React.FC<MovieItemProps> = ({
	title,
	releaseDate,
	posterPath,
}) => {
	const backgroundImageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`

	return (
		<div
			className={styles.movieItem}
			style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
			<div className={styles.overlay}></div>
			{/* <div className={styles.movieInfo}> */}
			<span className={styles.title}>{title}</span>
			<span className={styles.year}>
				Production: {new Date(releaseDate).getFullYear()}
			</span>
			{/* </div> */}
		</div>
	)
}
