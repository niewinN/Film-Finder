type Genre = {
	id: number
	name: string
}

export const formatYear = (date: string) => date.split("-")[0]

export const formatRuntime = (runtime: number) => {
	const hours = Math.floor(runtime / 60)
	const minutes = runtime % 60

	if (hours === 0 && minutes === 0) {
		return "-"
	} else if (hours === 0) {
		return `${minutes}m`
	} else if (minutes === 0) {
		return `${hours}h`
	} else {
		return `${hours}h ${minutes}m`
	}
}

export const formatRating = (rating: number) =>
	rating !== 0 ? rating.toFixed(1) : "-"

export const formatGenres = (genres: Genre[]) =>
	genres.map(genre => genre.name).join(", ")

export const isDescriptionLong = (description: string): boolean => {
	return description.split(" ").length > 70
}
