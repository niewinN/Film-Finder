import styles from "./Error.module.css"

interface ErrorProps {
	children: React.ReactNode
	style?: React.CSSProperties
}

export function Error({ children, style }: ErrorProps) {
	return (
		<div style={style} className={styles.error}>
			{children}
		</div>
	)
}
