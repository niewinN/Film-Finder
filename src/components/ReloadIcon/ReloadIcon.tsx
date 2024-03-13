import styles from "./ReloadIcon.module.css"
import reloadImg from "../../assets/reload.svg"

interface ReloadIconProps {
	onGenerateClick: () => void
}

export function ReloadIcon({ onGenerateClick }: ReloadIconProps) {
	return (
		<div className={styles.reload}>
			<img
				onClick={onGenerateClick}
				src={reloadImg}
				alt='Generate another movie'
			/>
		</div>
	)
}
