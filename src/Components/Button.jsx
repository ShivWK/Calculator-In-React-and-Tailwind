import React, {useContext} from 'react';
import ColorContext from './Context';

export default function Button(props){
    let context = useContext(ColorContext);
    return(
        <button onClick={props.clickHandler} className={`w-4 h-4 transition-all duration-300  rounded-full`} style={props.isActive ? {backgroundColor : props.btncolor} : {}} ></button>
    )
}