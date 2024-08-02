import React from "react";
import bigcardimg from '../../assets/images/moremoviestuffland.jpg';

export default function Homepagecard() {
  return (
    <>
      <div className="w-[70dvw] h-[40dwv] bg-red-500 mt-10 rounded-[20px] flex items-center justify-center">
        <img src={bigcardimg} alt="Big Card" className="w-full h-full rounded-[20px]" />
      </div>
    </>
  );
}





