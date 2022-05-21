import React from "react";
import s from './OnOff.module.css'

type OnOffType = {
    setOnOff: (value: boolean) => void
    onOff: boolean
}

export const OnOff = (props: OnOffType) => {

    return (
            <div className={s.squares}>
                <span className={props.onOff ? s.green + ' ' + s.activeG : s.green} onClick={() => {props.setOnOff(true)}}>On</span>
                <span className={props.onOff ? s.red : s.red + ' ' + s.activeR} onClick={() => {props.setOnOff(false)}}>Off</span>
                <span className={props.onOff ? s.circle + ' ' + s.activeCG : s.circle + ' ' + s.activeCR}>12</span>
            </div>
        )
}