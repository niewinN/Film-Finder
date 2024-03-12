import styles from "./Modal.module.css"
import React from "react"
import ReactDOM from "react-dom"
import { FullWidthButton } from "../FullWidthButton/FullWidthButton"
import modalImg from "../../assets/modal.png"

interface ModalProps {
	title: string
	text: string
	onClose: () => void
}

export const Modal: React.FC<ModalProps> = ({ title, text, onClose }) => {
	return ReactDOM.createPortal(
		<div className={styles.modal}>
			<div>
				<img style={{ width: "200px" }} src={modalImg} alt='Modal Image' />
				<h2>{title}</h2>
				<p>{text}</p>
				<FullWidthButton onClick={onClose}>Ok</FullWidthButton>
			</div>
		</div>,
		document.body
	)
}
