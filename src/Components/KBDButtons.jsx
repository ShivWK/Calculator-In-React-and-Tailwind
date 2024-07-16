import React, {useContext} from 'react';
import ColorContext from './Context';

export default function KBDButtons(props){
    let context = useContext(ColorContext);

    return (
        <button className='h-12 w-[9.9rem]  text-2xl border-b-[6px] rounded-lg flex items-center justify-center border-2' style={{color: context.textColor,
            width : props.width
        }}>{props.children}</button>
    )
}
// w-[4.5rem]