import { MainBackground } from "../components/MainBackground/MainBackground"
import { WelcomeTextPanel } from "../components/WelcomeTextPanel/WelcomeTextPanel"
import { TrendingFilmList } from "../components/TrendingFilmList/TrendingFilmList"
import { Layout } from "../components/Layout/Layout"
import MovieList from "../components/MovieList/MovieList"

const movieListTypes = [
	{ type: "popular", title: "Popularne" },
	{ type: "topRated", title: "Najlepiej Oceniane" },
	{ type: "upcoming", title: "Nadchodzące" },
	{ type: "nowPlaying", title: "Obecnie Grane" },
]

export function MainPage() {
	return (
		<Layout>
			<MainBackground>
				<WelcomeTextPanel />
			</MainBackground>
			{movieListTypes.map(({ type, title }) => (
				<MovieList key={type} type={type} title={title} />
			))}
			{/* <TrendingFilmList /> */}
		</Layout>
	)
}
