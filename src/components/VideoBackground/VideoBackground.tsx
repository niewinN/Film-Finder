// src/components/VideoBackground/VideoBackground.tsx

import React, { ReactNode } from "react"
import styles from "./VideoBackground.module.css" // Upewnij się, że ścieżka do pliku CSS jest poprawna
// import main from "../../assets/main.mp4"
import fogik from "../../assets/fogik.mp4"

interface VideoBackgroundProps {
	children: ReactNode
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({
	children,
}) => {
	return (
		<>
			<div className={styles.videoBackground}>
				<div className={styles.overlay}></div>
				<video
					playsInline
					autoPlay
					muted
					loop
					id='background-video'
					className={styles.video}>
					<source src={fogik} type='video/mp4' />
				</video>
			</div>
			<div className={styles.content}>{children}</div>{" "}
			{/* Umieść dzieci w osobnym kontenerze na wierzchu */}
		</>
	)
}
