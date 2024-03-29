import { MainContent } from "../MainContent/MainContent"
import { Navigation } from "../Navigation/Navigation"
import { VideoBackground } from "../VideoBackground/VideoBackground"
import { Footer } from "../Footer/Footer"

interface LayoutProps {
	children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
	return (
		<>
			<MainContent>
				<Navigation showLogo={true} />
				<VideoBackground>{children}</VideoBackground>
			</MainContent>
			<Footer />
		</>
	)
}
