// import React, { createContext, useContext, ReactNode } from "react"
// import { useFilters } from "../hooks/useFilters"

// interface FiltersContextType {
// 	selectedGenres: { [key: string]: boolean }
// 	setSelectedGenres: React.Dispatch<
// 		React.SetStateAction<{ [key: string]: boolean }>
// 	>
// 	selectedYears: { [key: string]: boolean }
// 	setSelectedYears: React.Dispatch<
// 		React.SetStateAction<{ [key: string]: boolean }>
// 	>
// 	isAdult: boolean
// 	setIsAdult: React.Dispatch<React.SetStateAction<boolean>>
// 	handleCheckboxChange: (
// 		type: "genre" | "year" | "adult",
// 		value: string,
// 		isChecked: boolean
// 	) => void
// }

// const FiltersContext = createContext<FiltersContextType | undefined>(undefined)

// export const FiltersProvider = ({ children }: { children: ReactNode }) => {
// 	const filtersHook = useFilters()

// 	return (
// 		<FiltersContext.Provider value={filtersHook}>
// 			{children}
// 		</FiltersContext.Provider>
// 	)
// }

// export const useFiltersContext = () => {
// 	const context = useContext(FiltersContext)
// 	if (context === undefined) {
// 		throw new Error("useFiltersContext must be used within a FiltersProvider")
// 	}
// 	return context
// }
