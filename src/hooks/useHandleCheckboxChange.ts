import { useFilters } from "../contexts/FiltersContext"

export const useHandleCheckboxChange = () => {
	const { setSelectedGenres, setSelectedYears, setIsAdult } = useFilters()

	return (
		type: "genre" | "year" | "adult",
		value: string,
		isChecked: boolean
	) => {
		switch (type) {
			case "genre":
				setSelectedGenres(prev => ({ ...prev, [value]: isChecked }))
				break
			case "year":
				setSelectedYears(prev => ({ ...prev, [value]: isChecked }))
				break
			case "adult":
				setIsAdult(isChecked)
				break
			default:
				break
		}
	}
}
