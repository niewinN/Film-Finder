import { FilterMoviePanel } from "../components/FilterMoviePanel/FilterMoviePanel"
import { FlexContainer } from "../components/FlexContainer/FlexContainer"
import { Footer } from "../components/Footer/Footer"
import { NavDesktop } from "../components/NavDesktop/NavDesktop"
import { NavMobile } from "../components/NavMobile/NavMobile"
import { SearchPanel } from "../components/SearchPanel/SearchPanel"
import { Wrapper } from "../components/Wrapper/Wrapper"
import { useIsDesktop } from "../hooks/useIsDesktop"

export function Library() {
	const isDesktop = useIsDesktop()
	const navigation = isDesktop ? (
		<NavDesktop showLogo={true} />
	) : (
		<NavMobile showLogo={true} />
	)
	return (
		<div>
			{navigation}
			<Wrapper>
				<FlexContainer>
					<FilterMoviePanel />
					<SearchPanel />
				</FlexContainer>
			</Wrapper>
			<Footer />
		</div>
	)
}
