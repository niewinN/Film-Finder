import { FilterMoviePanel } from "../components/FilterMoviePanel/FilterMoviePanel"
import { FlexContainer } from "../components/FlexContainer/FlexContainer"
import { Layout } from "../components/Layout/Layout"
import { SearchPanel } from "../components/SearchPanel/SearchPanel"

export function Library() {
	return (
		<Layout>
			<FlexContainer>
				<FilterMoviePanel />
				<SearchPanel />
			</FlexContainer>
		</Layout>
	)
}
