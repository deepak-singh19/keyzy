"use client";
import React from 'react';

interface OutputBoxProps{
    label:String;
    output:number | String;
    currency:boolean;
    errorMessage?:String ;
    classname?:String;
}

const OutputBox = ({label,output,currency,classname}:OutputBoxProps) => {
  return (
    <div className=' w-full flex flex-row justify-between '>
            <div className={`${classname} flex w-2/5`}><label>{label}</label></div>
            <div className='w-2/5'>{currency?"£":""}<span>{output}</span></div>
        </div>
  )
}

export default OutputBox