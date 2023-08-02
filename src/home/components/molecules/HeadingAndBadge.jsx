import { Badge } from "../../../shared/components/atoms/Badge"
import "./headingAndBadge.scss"

export const HeadingAndBadge = () => {
    return (
        <div className="container">
            <Badge variant="container">
                <Badge variant="child">New Feature</ Badge>
                <div>Check out the team dashboard</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Badge>
        </div>
    )
}