import { Button } from "../../../shared/components/atoms/Button"
import style from "./buttonGroup.module.scss"
import { icons } from "feather-icons"
import playCircleIcon from "/play-circle.svg"

export const ButtonGroup = () => {
    return (
        <div className={style.buttonGroup}>
            <Button variant="normal">Sign up</Button>
            <Button variant="icon"><img src={playCircleIcon} className="buttonIcon"/>Demo</Button>
        </div>
    )
}