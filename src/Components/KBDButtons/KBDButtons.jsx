import ColorContext from '../Context';
import React, { useContext } from 'react';
import './KBDButtons.css'

export default function KBDButtons(props){
    let context = useContext(ColorContext);

    return (
        <button className={`md:h-12 h-11 ${props.customClass} shrink  text-2xl border-b-[6px] rounded-lg flex items-center justify-center border-2`} style={{color: context.textColor}}>{props.children}</button>
    )
}

//to make width responshive use css media queries , dont set width in style tag , give a cutom class and with media queries change the width  defined in those class 