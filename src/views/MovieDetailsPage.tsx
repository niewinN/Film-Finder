import { Footer } from "../components/Footer/Footer"
import { MainContent } from "../components/MainContent/MainContent"
import MovieDetails from "../components/MovieDetails/MovieDetails"
import { Navigation } from "../components/Navigation/Navigation"
import { VideoBackground } from "../components/VideoBackground/VideoBackground"

export function MovieDetailsPage() {
	return (
		<MainContent>
			{/* <div> */}
			<Navigation showLogo={true} />
			<VideoBackground>
				<MovieDetails />
			</VideoBackground>
			<Footer />
			{/* </div> */}
		</MainContent>
	)
}
