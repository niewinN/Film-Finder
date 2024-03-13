import { useState, useCallback } from "react"

export const useCountdownWithAction = (
	initialCount: number,
	action: () => void
) => {
	const [countdown, setCountdown] = useState<number>(0)
	const [isActive, setIsActive] = useState<boolean>(false)

	const startCountdown = useCallback(() => {
		setCountdown(initialCount)
		setIsActive(true)
		const intervalId = setInterval(() => {
			setCountdown(currentCount => {
				if (currentCount <= 1) {
					clearInterval(intervalId)
					action()
					setIsActive(false)
					return 0
				}
				return currentCount - 1
			})
		}, 1000)
	}, [initialCount, action])

	return { countdown, isActive, startCountdown }
}
