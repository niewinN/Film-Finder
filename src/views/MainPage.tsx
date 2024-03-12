import { MainBackground } from "../components/MainBackground/MainBackground"
import { WelcomeTextPanel } from "../components/WelcomeTextPanel/WelcomeTextPanel"
import { Layout } from "../components/Layout/Layout"
import MovieList from "../components/MovieList/MovieList"

const movieListTypes = [
	{ type: "popular", title: "Popular" },
	{ type: "topRated", title: "Top rated" },
	{ type: "upcoming", title: "Upcoming" },
	{ type: "nowPlaying", title: "Now playing" },
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
		</Layout>
	)
}
