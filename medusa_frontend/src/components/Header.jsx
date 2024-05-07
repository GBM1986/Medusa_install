import React from 'react';
import coffeebeans from "../assets/coffeebeans.png";

export const Header = () => {
  return (
    <div className='relative mb-6'>
      {/* Image */}
      <img src={coffeebeans} alt="beans" className="w-full h-[637px] object-cover" />

      {/* Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className='text-5xl md:text-7xl lg:text-9xl text-center font-Inspiration '>
          We Love Coffee <br /> And all the people who make it
        </h1>
      </div>
    </div>
  );
};
