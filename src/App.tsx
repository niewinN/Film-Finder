import { FiltersProvider } from "./contexts/FiltersContext"
import { Library } from "./views/Library"
import { MainPage } from "./views/MainPage"
import { Routes, Route } from "react-router-dom"
import { MovieDetailsPage } from "./views/MovieDetailsPage"
import { WatchlistPage } from "./views/WatchlistPage"
import { IdeaPage } from "./views/IdeaPage"
function App() {
	return (
		<FiltersProvider>
			<Routes>
				<Route path='' element={<MainPage />} />
				<Route path='/library' element={<Library />} />
				<Route path='/movie/:id' element={<MovieDetailsPage />} />
				<Route path='/watchlist' element={<WatchlistPage />} />
				<Route path='/idea' element={<IdeaPage />} />
			</Routes>
		</FiltersProvider>
	)
}

export default App
