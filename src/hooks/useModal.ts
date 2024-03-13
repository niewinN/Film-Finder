import { useState } from "react"

interface ModalContentProps {
	title: string
	text: string
}

export function useModal() {
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [modalContent, setModalContent] = useState<ModalContentProps>({
		title: "",
		text: "",
	})

	const showModal = (title: string, text: string) => {
		setModalContent({ title, text })
		setIsModalVisible(true)
	}

	const hideModal = () => {
		setIsModalVisible(false)
	}

	return {
		isModalVisible,
		showModal,
		hideModal,
		modalContent,
	}
}
