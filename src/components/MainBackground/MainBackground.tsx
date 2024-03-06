import styles from "./MainBackground.module.css"
import pls from "../../assets/pls.mp4"

interface MainBackgroundProps {
	children: React.ReactNode
}

export function MainBackground({ children }: MainBackgroundProps) {
	return (
		<div className={styles.background}>
			<div className={styles.overlay}></div>
			{/* <video autoPlay muted playsInline loop controls={false}>
				<source src={pls} type='video/mp4' />
			</video> */}
			{children}
		</div>
	)
}
