import { useLockBodyScroll } from "../../hooks/useLockBodyScroll"
import styles from "./MenuList.module.css"
import { NavLink } from "react-router-dom"
import { NAV_LINKS } from "../../constants/links"

interface MenuListProps {
	isOpen: boolean
	onClick: () => void
}

export function MenuList({ isOpen, onClick }: MenuListProps) {
	useLockBodyScroll(isOpen)

	return (
		<ul className={`${styles.menuList} ${isOpen ? styles.expanded : ""} `}>
			{NAV_LINKS.map(link => (
				<li key={link.path} onClick={onClick}>
					<NavLink to={link.path}>{link.linkName}</NavLink>
				</li>
			))}
		</ul>
	)
}
