import React, {useContext} from 'react';
import ColorContext from '../Context';

export default function ExtraButtons(props){
    let context = useContext(ColorContext);
    return (
        <button className={`h-11 md:h-12 ${props.customClass} text-2xl mb-1
         rounded-lg flex items-center justify-center  active:translate-y-1 transition-all duration-75 ${props.backColor} ${props.widthOfBtn} ${props.Color} `} style={{boxShadow : `0 6px 0 0 ${props.extraShadowColor}`}}>{props.children}</button>
    )
}

//shadow in tailwindcss with custom value creates problem sometime so give it in style tag, this problem may be due to JIT Just-In-Time compilation in TailwindCSS (Study about JIT in TailwindCSS)
