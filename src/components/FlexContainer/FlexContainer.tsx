import styles from "./FlexContainer.module.css"

interface FlexContainerProps {
	children: React.ReactNode
}

export function FlexContainer({ children }: FlexContainerProps) {
	return <div className={styles.container}>{children}</div>
}
