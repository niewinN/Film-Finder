import { useState } from "react"
import styles from "./NavMobile.module.css"
import { MenuList } from "../MenuList/MenuList"
import { BurgerIcon } from "../BurgerIcon/BurgerIcon"

export function NavMobile() {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={styles.navMobile}>
			<BurgerIcon isOpen={isOpen} onClick={toggleMenu} />
			<MenuList isOpen={isOpen} onClick={toggleMenu} />
		</div>
	)
}
