import { FiltersProvider } from "./contexts/FiltersContext"
import { Library } from "./views/Library"
import { MainPage } from "./views/MainPage"
import { Routes, Route } from "react-router-dom"
import { MovieDetailsPage } from "./views/MovieDetailsPage"

function App() {
	return (
		<FiltersProvider>
			<Routes>
				<Route path='' element={<MainPage />} />
				<Route path='/library' element={<Library />} />
				<Route path='/movie/:id' element={<MovieDetailsPage />} />
			</Routes>
		</FiltersProvider>
	)
}

export default App
