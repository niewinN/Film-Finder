// import { useState } from "react"

// export function useFilters() {
// 	const [selectedGenres, setSelectedGenres] = useState<{
// 		[key: string]: boolean
// 	}>({})
// 	const [selectedYears, setSelectedYears] = useState<{
// 		[key: string]: boolean
// 	}>({})
// 	const [isAdult, setIsAdult] = useState<boolean>(false)

// 	const handleCheckboxChange = (
// 		type: "genre" | "year" | "adult",
// 		value: string,
// 		isChecked: boolean
// 	) => {
// 		switch (type) {
// 			case "genre":
// 				setSelectedGenres(prev => ({ ...prev, [value]: isChecked }))
// 				break
// 			case "year":
// 				setSelectedYears(prev => ({ ...prev, [value]: isChecked }))
// 				break
// 			case "adult":
// 				setIsAdult(isChecked)
// 				break
// 			default:
// 				break
// 		}
// 	}

// 	return {
// 		selectedGenres,
// 		setSelectedGenres,
// 		selectedYears,
// 		setSelectedYears,
// 		isAdult,
// 		setIsAdult,
// 		handleCheckboxChange,
// 	}
// }
