import { HeadingAndSupportingText } from "../organism/HeadingAndSupportingText"
import macBook from "/macbook-16.svg";
import "./headingSection.scss"

export const HeadingSection = () => {
    return (
        <div className="headingSection">
            <HeadingAndSupportingText />
            <img src={macBook} alt="macBook pro 16" />
        </div>
    )
}