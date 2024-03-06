import { FilterMoviePanel } from "../components/FilterMoviePanel/FilterMoviePanel"
import { FlexContainer } from "../components/FlexContainer/FlexContainer"
import { Footer } from "../components/Footer/Footer"
import { MainContent } from "../components/MainContent/MainContent"
import { Navigation } from "../components/Navigation/Navigation"
import { SearchPanel } from "../components/SearchPanel/SearchPanel"
import { VideoBackground } from "../components/VideoBackground/VideoBackground"
import { Wrapper } from "../components/Wrapper/Wrapper"

export function Library() {
	return (
		// <div>
		<MainContent>
			<VideoBackground>
				<Navigation showLogo={true} />
				<Wrapper>
					<FlexContainer>
						<FilterMoviePanel />
						<SearchPanel />
					</FlexContainer>
				</Wrapper>
			</VideoBackground>
			<Footer />
		</MainContent>
		// </div>
	)
}
