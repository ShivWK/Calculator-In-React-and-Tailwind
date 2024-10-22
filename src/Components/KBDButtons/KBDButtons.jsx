import ColorContext from '../Context';
import React, { useContext } from 'react';
import './KBDButtons.css'

export default function KBDButtons(props) {
    let context = useContext(ColorContext);

    return (
        <button onClick={(e) => { context.ClickHandler(e) }} className={`md:h-10 h-11 width-4-5-rem text-2xl mb-1 shrink
         rounded-lg flex items-center justify-center  active:translate-y-1 transition-all duration-75 ${context.kbdbgColor} ${context.KbdkeytextColor}`} value={props.Value} style={{ boxShadow: `0 6px 0 0 ${context.shadowColor}` }}>{props.children}</button>
    )
}
