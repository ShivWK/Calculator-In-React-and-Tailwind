import React, { useState } from 'react';
import CalHeader from './Components/CalHaeder';
import ColorContext from './Components/Context';
import CalDisplay from './Components/CalDisplay';
import Keybord from './Components/Keybord';
export default function () {

  const [bgColor , setBgColor] = useState('hsl(222, 26%, 31%)');
  let [textColor, setTextColor] = useState('white');
  let [dispColor, setDispColor] = useState('hsl(224, 36%, 15%)');
  let [tglkbdbg, setTglKbdBg] = useState('hsl(223, 31%, 20%)');

  
  const textColorHandler = (clr) => {
    setTextColor(clr);
  }
  const bgcolorhandler = (clr)=>{
    setBgColor(clr)
  }

  return (
    <ColorContext.Provider value={{bgColor : setBgColor, textColorHandler : textColorHandler, textColor : textColor , dispColor: setDispColor, tglkbdbg : tglkbdbg, tglkbdbgHandler : setTglKbdBg}}>
    <div className='main w-full h-screen' style={{backgroundColor : bgColor}}>

      {/* The issue with your code is in the way you are trying to use the bgColor state variable within the className attribute of the div. Tailwind CSS does not support dynamic class names directly within the template string. Instead, you should apply the background color style inline using the style attribute. */}

      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] px-2 py-2 md:w-[30%] w-10/12 h-5/6 rounded-lg">
        <CalHeader backgroundclr={bgcolorhandler}/>
        <CalDisplay dispColor={dispColor}/>
        <Keybord/>
      </div>
    </div>
    </ColorContext.Provider>
  )
} 