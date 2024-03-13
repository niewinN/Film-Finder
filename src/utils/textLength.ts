export const trimOverview = (overview: string, wordLimit: number) => {
	const words = overview.split(/\s+/)
	if (words.length > wordLimit) {
		return `${words.slice(0, wordLimit).join(" ")}...`
	}
	return overview
}
