import { MainBackground } from "../components/MainBackground/MainBackground"
import { WelcomeTextPanel } from "../components/WelcomeTextPanel/WelcomeTextPanel"
import { TrendingFilmList } from "../components/TrendingFilmList/TrendingFilmList"
import { Layout } from "../components/Layout/Layout"

export function MainPage() {
	return (
		<Layout>
			<MainBackground>
				<WelcomeTextPanel />
			</MainBackground>
			<TrendingFilmList />
		</Layout>
	)
}
