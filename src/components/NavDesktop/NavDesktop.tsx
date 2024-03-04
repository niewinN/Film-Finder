import styles from "./NavDesktop.module.css"
import { NavLink } from "react-router-dom"
import { NAV_LINKS } from "../../constants/links"
import { Logo } from "../Logo/Logo"

interface NavDesktopProps {
	showLogo: boolean
}

export function NavDesktop({ showLogo }: NavDesktopProps) {
	return (
		<div className={styles.wrapper}>
			<div>
				{showLogo && <Logo />}
				<ul className={styles.navDesktop}>
					{NAV_LINKS.map(link => {
						return (
							<li key={link.path}>
								<NavLink to={link.path}>{link.linkName}</NavLink>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
