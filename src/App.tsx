import { Library } from "./views/Library"
import { MainPage } from "./views/MainPage"
import { Routes, Route } from "react-router-dom"

function App() {
	return (
		<Routes>
			<Route path='' element={<MainPage />} />
			<Route path='/library' element={<Library />} />
		</Routes>
	)
}

export default App
