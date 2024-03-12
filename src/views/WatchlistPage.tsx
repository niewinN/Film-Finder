import styles from "../components/MovieDetails/MovieDetails.module.css"
import { Layout } from "../components/Layout/Layout"
import { MovieInformation } from "../components/MovieInformation/MovieInformation"
import { Wrapper } from "../components/Wrapper/Wrapper"
import { Movie } from "../interfaces/Movie"
import { useEffect, useState } from "react"
import { Modal } from "../components/Modal/Modal"
import { Error } from "../components/Error/Error"
import watchlistImg from "../assets/watchlist.png"

export function WatchlistPage() {
	const [watchlist, setWatchlist] = useState<Movie[]>([])
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [modalContent, setModalContent] = useState({ title: "", text: "" })

	const showModal = (title: string, text: string) => {
		setModalContent({ title, text })
		setIsModalVisible(true)
	}

	const hideModal = () => {
		setIsModalVisible(false)
	}

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
								showModal={showModal}
							/>
						</div>
					))
				) : (
					<>
						<Error>No movie added to watchlist</Error>
						<img width='300px' src={watchlistImg} alt='Error Image' />
					</>
				)}
				{isModalVisible && (
					<Modal
						title={modalContent.title}
						text={modalContent.text}
						onClose={hideModal}
					/>
				)}
			</Wrapper>
		</Layout>
	)
}
