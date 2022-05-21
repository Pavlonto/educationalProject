import React, {useState} from "react";
import s from './OnOff.module.css'

type OnOffUC = {
    setOnOff: (value: boolean) => void
}


export const OnOffUC = (props: OnOffUC) => {

    let [on, setOn] = useState(false)

    function change(value: boolean) {
        setOn(value)
    }

    function onClicked() {
        change(true)
        props.setOnOff(true)
    }

    function offClicked() {
        change(false)
        props.setOnOff(false)
    }
        return (
            <div className={s.squares}>
                <span className={on ? s.green + ' ' + s.activeG : s.green} onClick={onClicked}>On</span>
                <span className={on ? s.red : s.red + ' ' + s.activeR} onClick={offClicked}>Off</span>
                <span className={on ? s.circle + ' ' + s.activeCG : s.circle + ' ' + s.activeCR}>12</span>
            </div>
        )

}