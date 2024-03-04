import styles from "./Wrapper.module.css"

export function Wrapper({ children }) {
	return <div className={styles.wrapper}>{children}</div>
}
