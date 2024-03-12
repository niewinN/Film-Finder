import styles from "./MovieDetails.module.css"
import React, { useState } from "react"
import { MovieInformation } from "../MovieInformation/MovieInformation"
import { Wrapper } from "../Wrapper/Wrapper"
import { Modal } from "../Modal/Modal"

const MovieDetails: React.FC = () => {
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [modalContent, setModalContent] = useState({ title: "", text: "" })

	const showModal = (title: string, text: string) => {
		setModalContent({ title, text })
		setIsModalVisible(true)
	}

	const hideModal = () => {
		setIsModalVisible(false)
	}
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
