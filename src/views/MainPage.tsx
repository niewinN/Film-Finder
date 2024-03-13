import "../styles/views.css"
import { WelcomeTextPanel } from "../components/WelcomeTextPanel/WelcomeTextPanel"
import { Layout } from "../components/Layout/Layout"
import MovieList from "../components/MovieList/MovieList"

type MovieListType = "popular" | "topRated" | "upcoming" | "nowPlaying"

const movieListTypes: { type: MovieListType; title: string }[] = [
	{ type: "popular", title: "Popular" },
	{ type: "topRated", title: "Top rated" },
	{ type: "upcoming", title: "Upcoming" },
	{ type: "nowPlaying", title: "Now playing" },
]

export function MainPage() {
	return (
		<Layout>
			<div className='mainPage'>
				<WelcomeTextPanel />
			</div>
			{movieListTypes.map(({ type, title }) => (
				<MovieList key={type} type={type} title={title} />
			))}
		</Layout>
	)
}
