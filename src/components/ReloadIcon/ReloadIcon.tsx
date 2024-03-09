import styles from "./ReloadIcon.module.css"
import reloadImg from "../../assets/reload.svg"

export function ReloadIcon({ onGenerateClick }) {
	return (
		<div className={styles.reload}>
			<img onClick={onGenerateClick} src={reloadImg} alt='' />
		</div>
	)
}
