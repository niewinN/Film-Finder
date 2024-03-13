import styles from "./FilterMoviePanel.module.css"
import { useState } from "react"
import { adultOptions } from "../../constants/adultOptions"
import { genreOptions } from "../../constants/genreOptions"
import { yearOptions } from "../../constants/yearOptions"
import { CheckboxFilter } from "../CheckboxFilter/CheckboxFilter"
import arrowIcon from "../../assets/arrow.png"
import { useHandleCheckboxChange } from "../../hooks/useHandleCheckboxChange"

export function FilterMoviePanel() {
	const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
	const handleCheckboxChange = useHandleCheckboxChange()
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
						title='Genre'
						options={genreOptions}
						onChange={(value, isChecked) =>
							handleCheckboxChange("genre", value, isChecked)
						}
					/>
					<CheckboxFilter
						title='Release date'
						options={yearOptions}
						onChange={(value, isChecked) =>
							handleCheckboxChange("year", value, isChecked)
						}
					/>
					<CheckboxFilter
						title='For adults'
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
