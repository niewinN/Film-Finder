import { useEffect, useState } from "react"
import styles from "./NavMobile.module.css"
import { MenuList } from "../MenuList/MenuList"
import { BurgerIcon } from "../BurgerIcon/BurgerIcon"
import { useLocation } from "react-router-dom"
import { Logo } from "../Logo/Logo"

interface NavMobileProps {
	showLogo: boolean
}

export function NavMobile({ showLogo }: NavMobileProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [otherPage, setOtherPage] = useState<boolean>(false)

	const location = useLocation()

	useEffect(() => {
		setOtherPage(location.pathname !== "/")
	}, [location])

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={`${styles.navMobile} ${otherPage ? styles.topBar : ""}`}>
			{showLogo && <Logo />}
			<BurgerIcon isOpen={isOpen} onClick={toggleMenu} />
			<MenuList isOpen={isOpen} onClick={toggleMenu} />
		</div>
	)
}
