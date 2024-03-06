import { NavDesktop } from "../NavDesktop/NavDesktop"
import { NavMobile } from "../NavMobile/NavMobile"
import { useIsDesktop } from "../../hooks/useIsDesktop"

interface NavigationProps {
	showLogo: boolean
}

export const Navigation: React.FC<NavigationProps> = ({ showLogo }) => {
	const isDesktop = useIsDesktop()

	if (isDesktop) {
		return <NavDesktop showLogo={showLogo} />
	} else {
		return <NavMobile showLogo={showLogo} />
	}
}
