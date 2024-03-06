import styles from "./FullWidthButton.module.css"

interface FullWidthButtonProps {
	children: React.ReactNode
	onClick?: () => void
}

export function FullWidthButton({ children, onClick }: FullWidthButtonProps) {
	return (
		<button className={styles.button} onClick={onClick}>
			{children}
		</button>
	)
}
