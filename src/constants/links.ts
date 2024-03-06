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
		path: "/watchlist",
		linkName: "Watchlist",
	},
	{
		path: "/idea",
		linkName: "Pomysł",
	},
]
