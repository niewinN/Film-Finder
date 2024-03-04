import styles from "./CheckBoxFilter.module.css"

interface Option {
	label: string
	value: string
}

interface CheckboxFilterProps {
	title: string
	options: Option[]
	onChange: (value: string, isChecked: boolean) => void
}

export const CheckboxFilter: React.FC<CheckboxFilterProps> = ({
	title,
	options,
	onChange,
}) => {
	return (
		<div className={styles.checkboxFilter}>
			<h3>{title}</h3>
			{options.map(option => (
				<div className={styles.filtrBox} key={option.value}>
					<input
						type='checkbox'
						id={option.value}
						value={option.value}
						onChange={e => onChange(option.value, e.target.checked)}
					/>
					<label htmlFor={option.value}>{option.label}</label>
				</div>
			))}
		</div>
	)
}
