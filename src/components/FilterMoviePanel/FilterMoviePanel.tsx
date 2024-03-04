import { useState } from "react"
import { adultOptions } from "../../constants/adultOptions"
import { genreOptions } from "../../constants/genreOptions"
import { yearOptions } from "../../constants/yearOptions"
import { CheckboxFilter } from "../CheckboxFilter/CheckboxFilter"
import styles from "./FilterMoviePanel.module.css"
import arrowIcon from "../../assets/arrow.png"
import { useFilters } from "../../hooks/useFilters"

export function FilterMoviePanel() {
	const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

	const { handleCheckboxChange } = useFilters()
	const toggleCollapse = () => setIsCollapsed(!isCollapsed)

	return (
		<div className={styles.filterPanel}>
			<h2 onClick={toggleCollapse}>
				Filters
				<img
					src={arrowIcon}
					style={{ transform: isCollapsed ? "rotate(180deg)" : "rotate(0deg)" }}
					alt='Toggle filters'
				/>
			</h2>
			{!isCollapsed && (
				<>
					<CheckboxFilter
						title='Gatunek'
						options={genreOptions}
						onChange={(value, isChecked) =>
							handleCheckboxChange("genre", value, isChecked)
						}
					/>
					<CheckboxFilter
						title='Rok wydania'
						options={yearOptions}
						onChange={(value, isChecked) =>
							handleCheckboxChange("year", value, isChecked)
						}
					/>
					<CheckboxFilter
						title='Dla dorosłych'
						options={adultOptions}
						onChange={(value, isChecked) =>
							handleCheckboxChange("adult", value, isChecked)
						}
					/>
				</>
			)}
		</div>
	)
}
