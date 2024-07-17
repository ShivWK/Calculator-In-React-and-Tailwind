import ColorContext from '../Context';
import React, { useContext } from 'react';
import './KBDButtons.css'

export default function KBDButtons(props){
    let context = useContext(ColorContext);

    return (
        <button className={`md:h-12 h-11 ${props.customClass} text-2xl shadow-sharp-shadow
         rounded-lg flex items-center justify-center  active:translate-y-1 transition-all ${context.kbdbgColor} ${context.KbdkeytextColor} `} style={{boxShadow : `0 6px 0 0 ${context.shadowColor}`}}>{props.children}</button>
    )
}

//to make width responshive use css media queries , dont set width in style tag , give a cutom class and with media queries change the width  defined in those class 