import { useLayoutEffect } from "react"

export function useLockBodyScroll(lock: boolean) {
	useLayoutEffect(() => {
		const originalStyle = window.getComputedStyle(document.body).overflow

		document.body.style.overflow = lock ? "hidden" : originalStyle

		return () => {
			document.body.style.overflow = originalStyle
		}
	}, [lock])
}
