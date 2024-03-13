import styles from "./VideoBackground.module.css"
import React, { ReactNode } from "react"
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
		</>
	)
}
