import styles from "./BurgerIcon.module.css"
// import { useScrollPage } from "../../hooks/useScrollPage"

interface BurgerIconProps {
	isOpen: boolean
	onClick: () => void
}

export function BurgerIcon({ isOpen, onClick }: BurgerIconProps) {
	// const isScrolled = useScrollPage()

	return (
		<div
			className={`${styles.menuIcon} ${isOpen ? styles.open : ""} `}
			onClick={onClick}>
			{Array.from({ length: 3 }, (_, index) => (
				<div key={index} className={styles.menuLine}></div>
			))}
		</div>
	)
}
