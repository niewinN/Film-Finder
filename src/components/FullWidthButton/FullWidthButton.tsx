import styles from "./FullWidthButton.module.css"

interface FullWidthButtonProps {
	children: React.ReactNode
	onClick?: () => void
	disabled?: boolean
}

export function FullWidthButton({
	children,
	onClick,
	disabled,
}: FullWidthButtonProps) {
	return (
		<button
			className={`${styles.button} ${disabled ? styles.disabled : ""}`}
			onClick={onClick}
			disabled={disabled}>
			{children}
		</button>
	)
}
