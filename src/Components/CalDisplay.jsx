import React, {useContext} from 'react'; 
import ColorContext from './Context';

export default function CalDisplay(props){
    let context = useContext(ColorContext);

    return(
        <div className='w-full my-4 h-24 rounded-lg flex pt-2 px-2 gap-2 overflow-auto flex-col' style={{backgroundColor: props.dispColor,
            color: context.textColor
        }}>
            <input type="text" defaultValue={'000'} className='border-none outline-none flex items-center rounded-md w-full text-2xl bg-transparent' style={{color: context.textColor, textAlign : 'end'
}} />
            <input type="text" defaultValue={'000'} className='border-none outline-none p-0 flex items-center rounded-md w-full text-5xl bg-transparent' style={{color: context.textColor, textAlign : 'end'
}}/>
        </div>
    )
}