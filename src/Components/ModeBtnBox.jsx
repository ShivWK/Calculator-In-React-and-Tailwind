import React, {useState , useContext} from 'react';
import Button from './Button';
import ColorContext from './Context';

export default function ModeBtnBox(){
    let context = useContext(ColorContext);
    let [buttonIndex, setButtonIndex] = useState(1);

    function handleClickTheme1(){
        setButtonIndex(1);
        context.bgColor('hsl(222, 26%, 31%)');
        context.textColorHandler('white');
        context.dispColor('hsl(224, 36%, 15%)');
        context.tglkbdbgHandler('hsl(223, 31%, 20%)');
        context.setKbdbgColor('bg-[rgb(234,227,220)]');
        context.setKbdkeytextColor('text-[rgb(53,53,44)]')
        context.setshadowColor('rgb(180,165,151)')
    }
    function handleClickTheme2(){
        setButtonIndex(2);
        context.bgColor('hsl(0, 0%, 90%)');
        context.textColorHandler('rgb(27, 36, 40)');
        context.dispColor('hsl(0, 0%, 93%)');
        context.tglkbdbgHandler('hsl(0, 5%, 81%)');
        context.setKbdbgColor('bg-[rgb(234,227,220)]');
        context.setKbdkeytextColor('text-[rgb(53,53,44)]')
        context.setshadowColor('rgb(166,157,145)')

    }
    function handleClickTheme3(){
        setButtonIndex(3);
        context.bgColor('rgb(22, 6, 40)');
        context.textColorHandler('rgb(255, 229, 61)');
        context.dispColor('hsl(268, 71%, 12%)');
        context.tglkbdbgHandler('hsl(268, 71%, 12%)');
        context.setKbdbgColor('bg-[rgb(88,7,125)]');
        context.setKbdkeytextColor('text-[rgb(255,229,61)]')
        context.setshadowColor('rgb(188,21,244)')
    }

    return(
        <div className='modeBtn flex flex-col'>
            <div className='number flex gap-3 justify-center'>
              <span className='text-xs' style={{color : context.textColor}}>1</span>
              <span className='text-xs' style={{color : context.textColor}}>2</span>
              <span className='text-xs' style={{color : context.textColor}}>3</span>
            </div>
            <div className='flex justify-between items-center rounded-full p-1 w-14 h-6' style={{backgroundColor : context.tglkbdbg}}>
              <Button clickHandler={handleClickTheme1} isActive = {buttonIndex === 1} btncolor={'rgb(208,63,47)'}></Button>
              <Button clickHandler={handleClickTheme2} isActive = {buttonIndex === 2} btncolor={'rgb(202,85,2)'}></Button>
              <Button clickHandler={handleClickTheme3} isActive = {buttonIndex === 3} btncolor={'rgb(0,224,209)'}></Button>
            </div>
          </div>
    )
}