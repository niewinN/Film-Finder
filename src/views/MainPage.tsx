import { Footer } from "../components/Footer/Footer"
import { MainBackground } from "../components/MainBackground/MainBackground"
import { NavMobile } from "../components/NavMobile/NavMobile"
import { WelcomeTextPanel } from "../components/WelcomeTextPanel/WelcomeTextPanel"
import { TrendingFilmList } from "../components/TrendingFilmList/TrendingFilmList"
import { NavDesktop } from "../components/NavDesktop/NavDesktop"
import { useIsDesktop } from "../hooks/useIsDesktop"

export function MainPage() {
	const isDesktop = useIsDesktop()

	return (
		<>
			<MainBackground>
				<WelcomeTextPanel />
				{isDesktop ? (
					<NavDesktop showLogo={false} />
				) : (
					<NavMobile showLogo={false} />
				)}
			</MainBackground>
			<TrendingFilmList />
			<Footer />
		</>
	)
}
