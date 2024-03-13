import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const useScrollToTop = () => {
	const location = useLocation()
	const [prevPath, setPrevPath] = useState<string>("")

	useEffect(() => {
		if (prevPath !== location.pathname) {
			window.scrollTo(0, 0)
		} else {
			window.scrollTo({ top: 0, behavior: "smooth" })
		}

		setPrevPath(location.pathname)
	}, [location])

	return null
}

export default useScrollToTop
