import React, {useContext} from 'react';
import ColorContext from './Context';
import KBDButtons from './KBDButtons/KBDButtons';
import ExtraButtons from './ExtraButtons/ExtraButtons';

export default function Keybord() {
    let context = useContext(ColorContext);
    console.log(context.equalShadowColor);
    return (
        <div className='w-fit h-fit rounded-lg flex flex-wrap p-5  md:gap-[0.97rem]  gap-[1rem]' style={{backgroundColor : context.tglkbdbg, }}>   
            <KBDButtons customClass={'width-4-5-rem'}>7</KBDButtons>
            <KBDButtons customClass={'width-4-5-rem'}>8</KBDButtons>
            <KBDButtons customClass={'width-4-5-rem'}>9</KBDButtons>
            {/* <KBDButtons customClass={'width-4-5-rem'}>DEL</KBDButtons> */}

            <ExtraButtons customClass={'width-4-5-rem'} backColor={context.delreBackCOlor} Color={'text-white'} extraShadowColor={context.delreShadowColor}>DEL</ExtraButtons>

            <KBDButtons customClass={'width-4-5-rem'}>4</KBDButtons>
            <KBDButtons customClass={'width-4-5-rem'}>5</KBDButtons>
            <KBDButtons customClass={'width-4-5-rem'}>6</KBDButtons>
            <KBDButtons customClass={'width-4-5-rem'}>+</KBDButtons>
            <KBDButtons customClass={'width-4-5-rem'}>1</KBDButtons>
            <KBDButtons customClass={'width-4-5-rem'}>2</KBDButtons>
            <KBDButtons customClass={'width-4-5-rem'}>3</KBDButtons>
            <KBDButtons customClass={'width-4-5-rem'}>-</KBDButtons>
            <KBDButtons customClass={'width-4-5-rem'}>.</KBDButtons>
            <KBDButtons customClass={'width-4-5-rem'}>0</KBDButtons>
            <KBDButtons customClass={'width-4-5-rem'}>/</KBDButtons>
            <KBDButtons customClass={'width-4-5-rem'}>x</KBDButtons> 
            {/* <KBDButtons customClass={'width-9-5-rem'}>RESET</KBDButtons> */}

            <ExtraButtons customClass={'width-9-5-rem'} backColor={context.delreBackCOlor} Color={'text-white'} extraShadowColor={context.delreShadowColor}>RESET</ExtraButtons>

            <ExtraButtons customClass={'width-9-5-rem'} backColor={context.equalBgColor} Color={context.equalColor} extraShadowColor={context.equalShadowColor}>=</ExtraButtons>

            {/* <KBDButtons customClass={'width-9-5-rem'}>=</KBDButtons> */}
        </div>
    )
  
}