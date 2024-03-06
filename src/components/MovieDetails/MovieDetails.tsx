import styles from "./MovieDetails.module.css"
import React from "react"
import { MovieInformation } from "../MovieInformation/MovieInformation"
import { Wrapper } from "../Wrapper/Wrapper"

const MovieDetails: React.FC = () => {
	return (
		<Wrapper>
			<div className={styles.movieDetails}>
				<MovieInformation />
			</div>
		</Wrapper>
	)
}

export default MovieDetails
