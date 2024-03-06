export interface Genre {
	id: number
	name: string
}

export interface Movie {
	id: number
	title: string
	release_date: string
	vote_average: number
	overview: string
	poster_path: string
	vote_count: number
	runtime: number
	genres: Genre[]
}
