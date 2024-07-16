import React, { useContext } from 'react';
import ModeBtnBox from './ModeBtnBox';
import ColorContext from './Context';

export default function () {

    const context = useContext(ColorContext);
    return (
        <div className='modeBox flex items-center justify-between w-full '>
            <span className='text-3xl pt-2' style={{color : context.textColor}}>clac</span>
            <div className='flex items-center gap-5'>
                <span className='text-sm flex h-full pt-6 items-end' style={{color : context.textColor}}>THEME</span>
                <ModeBtnBox />
            </div>
        </div>
    )
}