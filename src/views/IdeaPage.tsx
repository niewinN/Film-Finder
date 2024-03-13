import "../styles/views.css"
import { IdeaPanel } from "../components/IdeaPanel/IdeaPanel"
import { Layout } from "../components/Layout/Layout"
import { MovieInformation } from "../components/MovieInformation/MovieInformation"
import { ReloadIcon } from "../components/ReloadIcon/ReloadIcon"
import { useRandomMovieFetcher } from "../hooks/useRandomMovieFetcher"
import { Modal } from "../components/Modal/Modal"
import { useModal } from "../hooks/useModal"

export function IdeaPage() {
	const API_KEY = import.meta.env.VITE_API_KEY
	const API_URL = "https://api.themoviedb.org/3"

	const {
		showIdeaPanel,
		movieData,
		isLoadingMovie,
		fetchMovieDetailsUntilFound,
	} = useRandomMovieFetcher(API_URL, API_KEY)

	const { isModalVisible, showModal, hideModal, modalContent } = useModal()

	return (
		<Layout>
			<div>
				{showIdeaPanel && !isLoadingMovie && (
					<IdeaPanel onGenerateClick={fetchMovieDetailsUntilFound} />
				)}
				{movieData && !isLoadingMovie && (
					<div className='movieDetailsPage'>
						<MovieInformation movie={movieData} showModal={showModal} />
					</div>
				)}
			</div>
			{movieData && !isLoadingMovie && (
				<ReloadIcon onGenerateClick={fetchMovieDetailsUntilFound} />
			)}
			{isModalVisible && (
				<Modal
					title={modalContent.title}
					text={modalContent.text}
					onClose={hideModal}
				/>
			)}
		</Layout>
	)
}
