import { useState, useRef } from "react"

const useScrollList = (scrollAmount: number) => {
	const listRef = useRef<HTMLDivElement>(null)
	const [isDragging, setIsDragging] = useState(false)
	const startPos = useRef(0)
	const currentScrollLeft = useRef(0)

	const startDragging = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setIsDragging(true)
		startPos.current = e.pageX
		currentScrollLeft.current = listRef.current?.scrollLeft || 0
	}

	const stopDragging = () => {
		setIsDragging(false)
	}

	const drag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (!isDragging) return
		e.preventDefault()
		const x = e.pageX
		const walk = (x - startPos.current) * 2
		if (listRef.current) {
			listRef.current.scrollLeft = currentScrollLeft.current - walk
		}
	}

	const scroll = (direction: "left" | "right") => {
		if (listRef.current) {
			const directionAmount =
				direction === "right" ? scrollAmount : -scrollAmount
			listRef.current.scrollBy({ left: directionAmount, behavior: "smooth" })
		}
	}

	return { listRef, startDragging, stopDragging, drag, scroll }
}

export default useScrollList
