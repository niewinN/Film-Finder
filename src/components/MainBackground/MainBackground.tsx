import styles from "./MainBackground.module.css"
import backgroundImage from "../../assets/background.mp4"

interface MainBackgroundProps {
	children: React.ReactNode
}

export function MainBackground({ children }: MainBackgroundProps) {
	return (
		<div className={styles.background}>
			<div className={styles.overlay}></div>
			<video autoPlay muted playsInline loop controls={false}>
				<source src={backgroundImage} type='video/mp4' />
			</video>
			{children}
		</div>
	)
}
