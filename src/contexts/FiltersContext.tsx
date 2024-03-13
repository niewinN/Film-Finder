import React, { createContext, useState, ReactNode, useContext } from "react"

interface FiltersContextType {
	selectedGenres: { [key: string]: boolean }
	setSelectedGenres: React.Dispatch<
		React.SetStateAction<{ [key: string]: boolean }>
	>
	selectedYears: { [key: string]: boolean }
	setSelectedYears: React.Dispatch<
		React.SetStateAction<{ [key: string]: boolean }>
	>
	isAdult: boolean
	setIsAdult: React.Dispatch<React.SetStateAction<boolean>>
}

const FiltersContext = createContext<FiltersContextType | undefined>(undefined)

export const FiltersProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [selectedGenres, setSelectedGenres] = useState<{
		[key: string]: boolean
	}>({})
	const [selectedYears, setSelectedYears] = useState<{
		[key: string]: boolean
	}>({})
	const [isAdult, setIsAdult] = useState<boolean>(false)

	const value = {
		selectedGenres,
		setSelectedGenres,
		selectedYears,
		setSelectedYears,
		isAdult,
		setIsAdult,
	}

	return (
		<FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
	)
}

export const useFilters = () => {
	const context = useContext(FiltersContext)
	if (context === undefined) {
		throw new Error("useFilters must be used within a FiltersProvider")
	}
	return context
}
