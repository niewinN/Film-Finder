import styles from "./Wrapper.module.css"

interface WrapperProps {
	children: React.ReactNode
}

export function Wrapper({ children }: WrapperProps) {
	return <div className={styles.wrapper}>{children}</div>
}
