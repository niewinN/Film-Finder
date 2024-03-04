interface NavLink {
	path: string
	linkName: string
}

export const NAV_LINKS: NavLink[] = [
	{
		path: "/library",
		linkName: "Biblioteka",
	},
	{
		path: "/recommended",
		linkName: "Polecane",
	},
	{
		path: "/aboutus",
		linkName: "O nas",
	},
	{
		path: "/idea",
		linkName: "Pomysł",
	},
]
