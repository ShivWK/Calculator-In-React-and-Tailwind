import React from 'react';

export default function Button(props){
    return(
        <button onClick={props.clickHandler} className='w-4 h-4 transition-all duration-200 rounded-full' style={props.isActive ? {backgroundColor : props.btncolor} : {}} ></button>
    )
}