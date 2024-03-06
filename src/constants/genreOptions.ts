export const genreOptions = [
	{ label: "Comedy", value: "comedy" },
	{ label: "Horror", value: "horror" },
	{ label: "Historical", value: "historical" },
	{ label: "Thriller", value: "thriller" },
	{ label: "War", value: "war" },
	{ label: "Western", value: "western" },
	{ label: "Science Fiction", value: "science_fiction" },
	{ label: "Documentary", value: "documentary" },
	{ label: "Family", value: "family" },
	{ label: "Romance", value: "romance" },
]

export const genreMap: { [key: string]: number } = {
	comedy: 35,
	horror: 27,
	historical: 36,
	thriller: 53,
	war: 10752,
	western: 37,
	science_fiction: 878,
	documentary: 99,
	family: 10751,
	romance: 10749,
}
