import React, {useContext} from 'react';
import ColorContext from './Context';
import KBDButtons from './KBDButtons/KBDButtons';
import ExtraButtons from './ExtraButtons/ExtraButtons';

export default function Keybord() {
    let context = useContext(ColorContext);
    return (
        <div className='w-fit h-fit rounded-lg flex flex-wrap p-5  md:gap-[0.97rem]  gap-[1rem]' style={{backgroundColor : context.tglkbdbg, }}>   
            <KBDButtons Value={'7'}>7</KBDButtons>
            <KBDButtons Value={'8'}>8</KBDButtons>
            <KBDButtons Value={'9'}>9</KBDButtons>
            <ExtraButtons Value={'del'} customClass={'width-4-5-rem'} backColor={context.delreBackCOlor} Color={'text-white'} extraShadowColor={context.delreShadowColor}>DEL</ExtraButtons>
            <KBDButtons Value={'4'}>4</KBDButtons>
            <KBDButtons Value={'5'}>5</KBDButtons>
            <KBDButtons Value={'6'}>6</KBDButtons>
            <KBDButtons Value={'+'}>+</KBDButtons>
            <KBDButtons Value={'1'}>1</KBDButtons>
            <KBDButtons Value={'2'}>2</KBDButtons>
            <KBDButtons Value={'3'}>3</KBDButtons>
            <KBDButtons Value={'-'}>−</KBDButtons>
            <KBDButtons Value={'.'}>.</KBDButtons>
            <KBDButtons Value={'0'}>0</KBDButtons>
            <KBDButtons Value={'/'}>÷</KBDButtons>
            <KBDButtons Value={'*'}>x</KBDButtons> 
            <ExtraButtons Value={'reset'} customClass={'width-9-5-rem'} backColor={context.delreBackCOlor} Color={'text-white'} extraShadowColor={context.delreShadowColor}>RESET</ExtraButtons>
            <ExtraButtons Value={'='} customClass={'width-9-5-rem'} backColor={context.equalBgColor} Color={context.equalColor} extraShadowColor={context.equalShadowColor}>=</ExtraButtons>

{/* MULTIPLE TIMES we are using the same component again and again this is redundent we can use an array and map function to improve readability  */}

        </div>
    )
  
}