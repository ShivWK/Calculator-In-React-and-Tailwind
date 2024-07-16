import React, {useContext} from 'react'; 
import ColorContext from './Context';

export default function CalDisplay(props){
    let context = useContext(ColorContext);

    return(
        <div className='w-full my-4 h-24 rounded-lg flex items-center pt-1 px-4 text-4xl overflow-auto justify-end' style={{backgroundColor: props.dispColor,
            color: context.textColor
        }}>
            WINNER
        </div>
    )
}