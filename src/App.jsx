import React, { useState } from 'react';

export default function(){
  let [buttonIndex, setButtonIndex] = useState(null);

  function handleClickTheme1(){
    setButtonIndex(1);
  } 

  function handleClickTheme2(){
    setButtonIndex(2);
  } 

  function handleClickTheme3(){
    setButtonIndex(3);
  } 

  return(
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] px-2 py-2 md:w-[30%] w-10/12 h-5/6 border-2 rounded-lg">
      <div className='modeBox flex items-center justify-between w-full'> 
        <span className='text-3xl pt-2'>clac</span>
        <div className='flex items-center gap-5'>
          <span className='text-sm flex h-full pt-6 items-end'>THEME</span>
            <div className='modeBtn flex flex-col'>
              <div className='number flex gap-3 justify-center'>
                <span className='text-sm'>1</span>
                <span className='text-sm'>2</span>
                <span className='text-sm'>3</span>
              </div>
              <div className='flex justify-between rounded-full p-1 bg-slate-600 w-14 h-5'>
                <button onClick={handleClickTheme1} className={`w-3 h-3 transition-all duration-200 ${buttonIndex === 1 ? 'rounded-full bg-[rgb(202,85,2)]' : ''}`}></button>
                <button onClick={handleClickTheme2} className={`w-3 h-3 transition-all duration-200 ${buttonIndex === 2 ? 'rounded-full bg-[rgb(202,85,2)]' : ''}`}></button>
                <button onClick={handleClickTheme3} className={`w-3 h-3 transition-all duration-200 ${buttonIndex === 3 ? 'rounded-full bg-[rgb(202,85,2)]' : ''}`}></button>
              </div>
            </div>
            {/* active:rounded-full w-3 h-3 avtive:bg-orange-700 */}
          </div>
        </div>
        
    </div>
  )
}``