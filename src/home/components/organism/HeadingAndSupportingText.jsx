import { ButtonGroup } from "../molecules/ButtonGroup"
import { HeadingAndBadge } from "../molecules/HeadingAndBadge"
import "./headingAndSupportingText.scss"

export const HeadingAndSupportingText = () => {
    return (
        <div className="headingContainer">
            <HeadingAndBadge />
            <h2>Beautiful analytics to grow smarter</h2>
            <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            <ButtonGroup />
        </div>
    )
}