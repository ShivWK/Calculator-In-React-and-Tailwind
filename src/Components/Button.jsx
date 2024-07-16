import React from 'react';

export default function Button(props){
    return(
        <button onClick={props.clickHandler} className={`w-3 h-3 transition-all duration-200 ${props.isActive ? 'rounded-full' : ''}`} style={props.isActive ? {backgroundColor : props.btncolor} : {}} ></button>
    )
}