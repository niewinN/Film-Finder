import { useLockBodyScroll } from "../../hooks/useLockBodyScroll"
import styles from "./MenuList.module.css"
import { NavLink } from "react-router-dom"

interface MenuListProps {
	isOpen: boolean
	onClick: () => void
}

export function MenuList({ isOpen, onClick }: MenuListProps) {
	const navLinks = [
		{
			path: "library",
			linkName: "Biblioteka",
		},
		{
			path: "recommended",
			linkName: "Polecane",
		},
		{
			path: "aboutus",
			linkName: "O nas",
		},
	]

	useLockBodyScroll(isOpen)

	return (
		<ul className={`${styles.menuList} ${isOpen ? styles.expanded : ""} `}>
			{navLinks.map(link => (
				<li key={link.path} onClick={onClick}>
					<NavLink to='#'>{link.linkName}</NavLink>
				</li>
			))}
		</ul>
	)
}
