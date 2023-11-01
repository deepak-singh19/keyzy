"use client";
import React from 'react';
import OutputBox from './outputBox';
import { target_price, total_monthly_rent, rent, converted_rent, future_buy_back_price } from '../utils/calculation';

interface OutputFormProps {
    discount: number;
    setDiscount: Function;
    desiredYield: number;
    setDesiredYield: Function;
    convertedRentRate: number;
    setConvertedRentRate: Function;
    url: String;
    setUrl: Function;
    postCode: String;
    listingPrice:number;
    errorMessage:String;
    duration:number;
  }

const OutputForm = ({
    discount,
    setDiscount,
    desiredYield,
    setDesiredYield,
    convertedRentRate,
    setConvertedRentRate,
    url,
    setUrl,
    postCode,
    listingPrice,
    errorMessage,
    duration
  
  }:OutputFormProps) => {

    

    const targetPrice= target_price(listingPrice, discount);
    const mRent= rent(targetPrice, desiredYield);
    const convertedRent=converted_rent(targetPrice, desiredYield,convertedRentRate)
    const totalMonthlyRent= total_monthly_rent(mRent,convertedRent);
    const futureBuyBackPrice= future_buy_back_price(targetPrice,convertedRent,duration)

  return (
    <div className="flex flex-col w-[100%] h-full items-start justify-around px-[30px] ">
        <div className='font-semibold'>Data Retrieved</div>
        <div className="flex flex-col w-[100%] h-[600px] items-start justify-between my-4">
        
        <OutputBox label="Listing Price" output={listingPrice.toFixed(2)} currency={true}/>
        <OutputBox label="Post Code" output={postCode} currency={false}/>
        <div className='font-semibold my-4'>Outputs</div>
        <OutputBox label="Target Price" output={targetPrice.toFixed(2)} currency={true}/>
        <OutputBox label="Total Monthly Price" output={totalMonthlyRent.toFixed(2)} currency={true}/>
        <OutputBox label="Rent" output={mRent.toFixed(2)} currency={true} classname="ml-auto"/>
        <OutputBox label="Converted Rent" output={convertedRent.toFixed(2)} currency={true} classname="ml-auto"/>
        <OutputBox label="Future Buy-back Price" output={futureBuyBackPrice.toFixed(2)} currency={true}/>
        </div>

        
    </div>
  )
}

export default OutputForm;