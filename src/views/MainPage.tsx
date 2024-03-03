import { Footer } from "../components/Footer/Footer"
import { MainBackground } from "../components/MainBackground/MainBackground"
import { NavMobile } from "../components/NavMobile/NavMobile"
import { WelcomeTextPanel } from "../components/WelcomeTextPanel/WelcomeTextPanel"
import { TrendingFilmList } from "../components/TrendingFilmList/TrendingFilmList"

export function MainPage() {
	return (
		<>
			<MainBackground>
				<WelcomeTextPanel />
				<NavMobile />
			</MainBackground>
			<TrendingFilmList />
			<Footer />
		</>
	)
}
