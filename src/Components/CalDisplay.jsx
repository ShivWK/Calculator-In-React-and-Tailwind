import React, {useContext} from 'react'; 
import ColorContext from './Context';

export default function CalDisplay(props){
    let context = useContext(ColorContext);

    return(
        <div className='w-full my-4 h-24 rounded-lg flex pt-2 px-3 gap-1 flex-col items-center justify-center' style={{backgroundColor: props.dispColor,
            color: context.textColor
        }}>
            <input type="text" readOnly value={props.expValue.replace(/\*/g, '×').replace(/-/g, '−')} className='border-none outline-none flex items-center rounded-md w-full text-xl bg-transparent' style={{color: context.textColor, textAlign : 'end'
}} /> 
{/* for operator use unicode of them not english alphabets */}
            <input type="text" readOnly value={props.inputValue} className='border-none outline-none flex items-center rounded-md w-full text-3xl bg-transparent' style={{color: context.textColor, textAlign : 'end'
}}/>
        </div>
    )
}