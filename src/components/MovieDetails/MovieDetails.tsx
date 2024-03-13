import styles from "./MovieDetails.module.css"
import { MovieInformation } from "../MovieInformation/MovieInformation"
import { Wrapper } from "../Wrapper/Wrapper"
import { Modal } from "../Modal/Modal"
import { useModal } from "../../hooks/useModal"

const MovieDetails: React.FC = () => {
	const { isModalVisible, showModal, hideModal, modalContent } = useModal()
	return (
		<Wrapper>
			<div className={styles.movieDetails}>
				<MovieInformation showModal={showModal} />
			</div>
			{isModalVisible && (
				<Modal
					title={modalContent.title}
					text={modalContent.text}
					onClose={hideModal}
				/>
			)}
		</Wrapper>
	)
}

export default MovieDetails
