import "./button.scss"

export const Button = (props) => {
    const buttonClass = `button button--${props.variant}`
    return (
        <button className={buttonClass}>{props.children}</button>
    )
}