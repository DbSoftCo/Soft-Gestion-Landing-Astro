import "./badge.scss"

export const Badge = (props) => {
    const badgeClass = `badge badge--${props.variant}`

    return <div className={badgeClass} >{props.children}</div>
}