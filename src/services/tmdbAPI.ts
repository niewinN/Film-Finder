const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"

const endpoints = {
	popular: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
	topRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
	upcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
	nowPlaying: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
}

export const fetchMovies = async (type: keyof typeof endpoints) => {
	const response = await fetch(endpoints[type])
	if (!response.ok) {
		throw new Error("Failed to fetch movies")
	}
	return response.json()
}
