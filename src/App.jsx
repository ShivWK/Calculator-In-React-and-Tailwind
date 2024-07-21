import React, { useState } from 'react';
import CalHeader from './Components/CalHaeder';
import ColorContext from './Components/Context';
import CalDisplay from './Components/CalDisplay';
import Keybord from './Components/Keybord';
export default function () {

  let [bgColor, setBgColor] = useState('hsl(222, 26%, 31%)');
  let [textColor, setTextColor] = useState('white');
  let [dispColor, setDispColor] = useState('hsl(224, 36%, 15%)');
  let [tglkbdbg, setTglKbdBg] = useState('hsl(223, 31%, 20%)');
  let [kbdbgColor, setKbdBgColor] = useState('bg-[rgb(234,227,220)]');
  let [KbdkeytextColor, setKbdkeytextColor] = useState('text-[rgb(53,53,44)]');
  let [shadowColor, setShadowColor] = useState('rgb(180,165,151)');
  let [delreBackCOlor, setDelReBackColor] = useState('bg-[rgb(99,112,151)]');
  let [equalColor, setEqualColor] = useState('text-white');
  let [equalBgColor, setEqualBgColor] = useState('bg-[rgb(208,63,47)]');
  let [delreShadowColor, setDelReShadowColor] = useState('rgb(64,78,114)');
  let [equalShadowColor, setEqualShadowColor] = useState('rgb(147,38,26)');
  let [expression, setExpression] = useState('');
  let [inputData, setInputData] = useState('');

  const textColorHandler = (clr) => {
    setTextColor(clr);
  }
  const bgcolorhandler = (clr) => {
    setBgColor(clr)
  }

  const ClickHandler = (e) => {

    let value = e.target.value;

    switch (true) {

      case !isNaN(value):
        setExpression(expression.concat(value));
        setInputData(inputData.concat(value));
        break;

      case value == "+":
      case value == '-':
      case value == '*':
      case value == '/':
      case value == '.':
        if (inputData !== '' && expression == '') {
          setExpression(expression.concat(inputData, value));
          setInputData('');
        } else {
          setExpression(expression.concat(value));
          setInputData('');
        }

        break;

      case value == 'del':
        setExpression(expression.slice(0, -1)); //we are giving value from 0th index to n-2th index excluding the last one
        setInputData(inputData.slice(0, -1));
        break;

      case value == 'reset':
        setExpression('');
        setInputData('');
        break;

      case value == '=':
        try {
          setInputData(String(eval(expression)));
          setExpression('');
        } catch (error) {
          setInputData('Error');
          setExpression('');
        }
        break;

      default:
        console.log('Undefined Entry');
    }

  }
  //setInputData('')

  const equalHandler = () => {
    setInputData(eval(expression));
    setExpression('');
  }

  return (
    <ColorContext.Provider value={
      {
        bgColor: setBgColor,
        textColorHandler: textColorHandler,
        textColor: textColor,
        dispColor: setDispColor,
        tglkbdbg: tglkbdbg,
        tglkbdbgHandler: setTglKbdBg,
        kbdbgColor: kbdbgColor,
        setKbdbgColor: setKbdBgColor,
        KbdkeytextColor: KbdkeytextColor,
        setKbdkeytextColor: setKbdkeytextColor,
        shadowColor: shadowColor,
        setshadowColor: setShadowColor,
        delreBackCOlor: delreBackCOlor,
        setDelReBackColor: setDelReBackColor,
        equalColor: equalColor,
        setequalColor: setEqualColor,
        equalBgColor: equalBgColor,
        setEqualBgColor: setEqualBgColor,
        delreShadowColor: delreShadowColor,
        setDelReShadowColor: setDelReShadowColor,
        equalShadowColor: equalShadowColor,
        setEqualShadowColor: setEqualShadowColor,
        ClickHandler: ClickHandler,
        equalHandler: equalHandler
      }}>
      <div className='main w-full h-screen' style={{ backgroundColor: bgColor }}>

        {/* The issue with your code is in the way you are trying to use the bgColor state variable within the className attribute of the div. Tailwind CSS does not support dynamic class names directly within the template string. Instead, you should apply the background color style inline using the style attribute. */}

        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] md:-translate-y-[53%] -translate-y-[51%] px-2 py-2 md:w-[30%] w-11/12 h-5/6 rounded-lg">
          <CalHeader backgroundclr={bgcolorhandler} />
          <CalDisplay expValue={expression} inputValue={inputData} dispColor={dispColor} />
          <Keybord />
          <h3 className='text-gray-400 mt-8 md:mt-6 text-center italic '>By Shivendra</h3>
        </div>

      </div>

    </ColorContext.Provider>

  )

}

// top-[88%] md:top-[95%] left-[50%] -translate-x-[50%] absolute