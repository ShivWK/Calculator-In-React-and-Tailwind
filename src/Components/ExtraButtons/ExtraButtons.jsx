import React, { useContext } from 'react';
import ColorContext from '../Context';
import './ExtraButton.css'

export default function ExtraButtons(props) {
    let context = useContext(ColorContext);
    return (
        <button onClick={(e) => { context.ClickHandler(e) }} value={props.Value} className={`h-11 md:h-10 ${props.customClass} text-2xl mb-1
         rounded-lg flex items-center justify-center  active:translate-y-1 transition-all duration-75 ${props.backColor} ${props.widthOfBtn} ${props.Color} `} style={{ boxShadow: `0 6px 0 0 ${props.extraShadowColor}` }}>{props.children}</button>
    )
}

