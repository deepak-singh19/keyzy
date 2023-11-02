"use client";
import React, { useState, useEffect } from "react";
import InputForm from "./components/inputForm";
import OutputForm from "./components/outputForm";

const Home = () => {
  const [discount, setDiscount] = useState<number>(15);
  const [desiredYield, setDesiredYield] = useState<number>(4.5);
  const [convertedRentRate, setConvertedRentRate] = useState<number>(20);
  const [url, setUrl] = useState<String>("130774457#");
  const [duration, setDuration]= useState<number>(5)
  const [listingPrice, setListingPrice]= useState<number>(350000);
  const [postCode, setPostCode]= useState<String>("CR6 9RR");
  const [errorMessage, setErrorMessage]= useState<String>("");

  useEffect(() => {
    // Client-side code that will run on the client side
  }, []);

  return (
    <>
      <div className="md:hidden w-full h-full flex lg:flex lg:flex-row flex-col justify-around items-center">
        <div className="flex w-full lg:w-5/12">
          <InputForm
            discount={discount}
            setDiscount={setDiscount}
            desiredYield={desiredYield}
            setDesiredYield={setDesiredYield}
            convertedRentRate={convertedRentRate}
            setConvertedRentRate={setConvertedRentRate}
            url={url}
            setUrl={setUrl}
            listingPrice={listingPrice}
            setListingPrice={setListingPrice}
            duration={duration}
            setDuration={setDuration}
            setErrorMessage={setErrorMessage}
            errorMessage={errorMessage}
          />
        </div>
        <div className="sm:hidden lg:flex lg:w-[2px] lg:h-[600px] border-l-2 border-red-500 border-dotted my-12"></div>
        <div className="flex w-full lg:w-5/12">
          <OutputForm discount={discount}
            setDiscount={setDiscount}
            desiredYield={desiredYield}
            setDesiredYield={setDesiredYield}
            convertedRentRate={convertedRentRate}
            setConvertedRentRate={setConvertedRentRate}
            url={url}
            setUrl={setUrl}
            postCode={postCode}
            listingPrice={listingPrice}
            errorMessage={errorMessage}
            duration={duration}
            />
        </div>
      </div>

      {/* Tablet View */}
      <div className="hidden  lg:hidden md:flex md:w-full h-[100vh] justify-center items-center">
      Not tablet friendly - please use mobile or desktop device.
      </div>
    </>
  );
};

export default Home;
