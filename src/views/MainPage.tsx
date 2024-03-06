import { Footer } from "../components/Footer/Footer"
import { MainBackground } from "../components/MainBackground/MainBackground"
import { NavMobile } from "../components/NavMobile/NavMobile"
import { WelcomeTextPanel } from "../components/WelcomeTextPanel/WelcomeTextPanel"
import { TrendingFilmList } from "../components/TrendingFilmList/TrendingFilmList"
import { NavDesktop } from "../components/NavDesktop/NavDesktop"
import { useIsDesktop } from "../hooks/useIsDesktop"
import { MainContent } from "../components/MainContent/MainContent"
import { Navigation } from "../components/Navigation/Navigation"
import { VideoBackground } from "../components/VideoBackground/VideoBackground"

export function MainPage() {
	const isDesktop = useIsDesktop()

	return (
		<>
			<MainContent>
				<VideoBackground>
					<MainBackground>
						<WelcomeTextPanel />
						<Navigation showLogo={false} />
					</MainBackground>
					<TrendingFilmList />
				</VideoBackground>
				<Footer />
			</MainContent>
		</>
	)
}
