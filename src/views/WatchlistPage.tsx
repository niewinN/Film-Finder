import "../styles/views.css"
import { Layout } from "../components/Layout/Layout"
import { MovieInformation } from "../components/MovieInformation/MovieInformation"
import { Wrapper } from "../components/Wrapper/Wrapper"
import { Movie } from "../interfaces/Movie"
import { useEffect, useState } from "react"
import { Modal } from "../components/Modal/Modal"
import { WatchlistError } from "../components/WatchlistError/WatchlistError"
import { useModal } from "../hooks/useModal"

export function WatchlistPage() {
	const [watchlist, setWatchlist] = useState<Movie[]>([])
	const { isModalVisible, showModal, hideModal, modalContent } = useModal()

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
						<div key={movie.id} className='movieDetailsPage'>
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
					<WatchlistError />
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
