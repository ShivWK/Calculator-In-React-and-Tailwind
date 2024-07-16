import React, {useContext} from 'react';
import ColorContext from './Context';
import KBDButtons from './KBDButtons';

export default function Keybord() {
    let context = useContext(ColorContext);

    return (
        <div className='w-full h-[22rem] rounded-lg flex flex-wrap p-5 gap-[0.97rem] ' style={{backgroundColor : context.tglkbdbg, }}>   
            <KBDButtons width={'4.5rem'}>1</KBDButtons>
            <KBDButtons width={'4.5rem'}>2</KBDButtons>
            <KBDButtons width={'4.5rem'}>3</KBDButtons>
            <KBDButtons width={'4.5rem'}>DEL</KBDButtons>
            <KBDButtons width={'4.5rem'}>4</KBDButtons>
            <KBDButtons width={'4.5rem'}>5</KBDButtons>
            <KBDButtons width={'4.5rem'}>6</KBDButtons>
            <KBDButtons width={'4.5rem'}>+</KBDButtons>
            <KBDButtons width={'4.5rem'}>7</KBDButtons>
            <KBDButtons width={'4.5rem'}>8</KBDButtons>
            <KBDButtons width={'4.5rem'}>9</KBDButtons>
            <KBDButtons width={'4.5rem'}>-</KBDButtons>
            <KBDButtons width={'4.5rem'}>1</KBDButtons>
            <KBDButtons width={'4.5rem'}>1</KBDButtons>
            <KBDButtons width={'4.5rem'}>1</KBDButtons>
            <KBDButtons width={'4.5rem'}>x</KBDButtons> 
            <KBDButtons width={'9.9rem'}>RESET</KBDButtons>
            <KBDButtons width={'9.9rem'}>=</KBDButtons>
        </div>
    )

}