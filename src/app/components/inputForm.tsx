"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import axios from "axios";

interface InputFormProps {
  discount: number;
  setDiscount: Function;
  desiredYield: number;
  setDesiredYield: Function;
  convertedRentRate: number;
  setConvertedRentRate: Function;
  url: String;
  setUrl: Function;
  setListingPrice: Function;
  listingPrice: number;
  duration: number;
  setDuration: Function;
  setErrorMessage: Function;
  errorMessage?: String;
}

const InputForm = ({
  discount,
  setDiscount,
  desiredYield,
  setDesiredYield,
  convertedRentRate,
  setConvertedRentRate,
  url,
  setUrl,
  setListingPrice,
  listingPrice,
  duration,
  setDuration,
  setErrorMessage,
  errorMessage,
}: InputFormProps) => {
  const discountStep = 1;
  const rentRateStep = 5;
  const discountSliderRef = useRef(null);
  const convertedRentSliderRef = useRef(null);
  const durrationArray = [3, 5, 7];

  const handleDiscountSliderChange = (value: number | number[]) => {
    const newValue = Array.isArray(value) ? value[0] : value;
    setDiscount(newValue);
  };

  const handleRentRateSliderChange = (value: number | number[]) => {
    const newValue = Array.isArray(value) ? value[0] : value;
    setConvertedRentRate(newValue);
  };

  const handleDurationChange = (a: number) => {
    setDuration(a);
  };

  const handleDesiredYieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setDesiredYield(newValue);

    if (newValue >= 4.5 && newValue <= 9) {
      setErrorMessage("");
    } else {
      setErrorMessage("Please fill value between 4.5% to 9%");
    }
  };

  // Function to calculate the left position for the tooltip
  const calculateTooltipPosition = (
    value: number,
    min: number,
    max: number
  ) => {
    const percentage = ((value - min) / (max - min)) * 100;
    return `${percentage}%`;
  };

  return (
    <div className="flex flex-col w-[100%] h-full items-start justify-around px-[30px] ">
      <div className="font-semibold">Input</div>
      <div className="flex flex-col w-[100%] h-[600px] items-start justify-between my-4 ">
        <div className="flex flex-row  flex-wrap h-auto items-center w-full">
          <label className="flex w-1/4">URL</label>
          <div className="w-3/4 bg-blue-500 justify-center h-auto items-center text-center text-sm text-white  px-2 py-1 break-words">
            {`https://www.rightmove.co.uk/properties/${url}`}
          </div>
    
        </div>

        <div className="flex flex-row  items-center w-full">
          <label className="flex w-1/4">Discount vs. Asking Price:</label>
          <div className="flex justify-between  w-3/4">
            <div className="w-1/12">0</div>
            <div className="flex flex-row justify-center items-center slider-with-tooltip">
              <Slider
                min={0}
                max={30}
                step={discountStep}
                value={discount}
                onChange={handleDiscountSliderChange}
                className="slider "
              />

              <div
                className="tooltip"
                style={{
                  left: `calc(${calculateTooltipPosition(discount, 0, 30)} )`, // Adjust the margin value as needed
                }}
              >
                {discount}%
              </div>
            </div>
            <div className="mx-2 w-1/12">30%</div>
          </div>
        </div>
        <div className="flex flex-row  items-center w-full">
          <label className="flex w-1/4">Desired Yield: </label>
          <div className="flex flex-row  items-center w-3/4">
            <div className="w-1/3 border bg-blue-500 text-white justify-center items-center text-center py-2 px-1">
              <input
                type="number"
                value={desiredYield}
                step="0.01"
                min={4}
                max={9}
                className="bg-blue-500 w-auto"
                onChange={handleDesiredYieldChange}
              />
              <span>%</span>
            </div>
            <div className="flex mx-4 text-sm text-red-300">{errorMessage}</div>
          </div>
        </div>
        <div className="flex flex-row  items-center w-full">
          <label className="flex w-1/4">Converted Rent Rate:</label>
          <div className="flex justify-between mx-2 w-3/4">
            <div className="mx-2 w-1/12">10%</div>
            <div className="flex flex-row w-full justify-center items-center slider-with-tooltip">
              <Slider
                min={10}
                max={25}
                step={rentRateStep}
                value={convertedRentRate}
                onChange={handleRentRateSliderChange}
                className="slider"
              />

              <div
                className="tooltip"
                style={{
                  left: calculateTooltipPosition(convertedRentRate, 10, 25),
                }}
              >
                {convertedRentRate}%
              </div>
            </div>
            <div className="mx-2 w-1/12">25%</div>
          </div>
        </div>
        <div className="flex flex-row  items-center w-full">
          <div className="flex w-1/4">Duration</div>
          <div className="w-3/4 flex flex-row justify-between">
            {durrationArray.map((dur, i) => (
              <div
                className={`w-1/4 border bg-blue-500 text-white justify-center items-center text-center py-2 px-1 hover:cursor-pointer ${
                  dur == duration ? "font-bold" : ""
                }`}
                key={i}
                onClick={() => handleDurationChange(dur)}
              >
                {dur} Years
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default InputForm;
