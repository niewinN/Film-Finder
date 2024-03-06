import styles from "../components/MovieDetails/MovieDetails.module.css"
import { Layout } from "../components/Layout/Layout"
import { MovieInformation } from "../components/MovieInformation/MovieInformation"
import { Wrapper } from "../components/Wrapper/Wrapper"
import { Movie } from "../components/interfaces/Movie"
import { useEffect, useState } from "react"

export function WatchlistPage() {
	const [watchlist, setWatchlist] = useState<Movie[]>([])

	const loadWatchlist = () => {
		const storedWatchlist = JSON.parse(
			localStorage.getItem("watchlist") || "[]"
		)
		setWatchlist(storedWatchlist)
	}

	useEffect(() => {
		loadWatchlist()
	}, [])

	return (
		<Layout>
			<Wrapper>
				{watchlist.length > 0 ? (
					watchlist.map((movie: Movie) => (
						<div className={styles.movieDetails}>
							<MovieInformation
								key={movie.id}
								movie={movie}
								showRemoveButton={true}
								onWatchlistChange={loadWatchlist}
							/>
						</div>
					))
				) : (
					<div>Twoja lista obserwowanych jest pusta</div>
				)}
			</Wrapper>
		</Layout>
	)
}
