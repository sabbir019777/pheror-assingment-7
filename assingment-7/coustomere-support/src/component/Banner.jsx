import React from 'react';
import Vector1 from "../assets/vector1.png";

const Banner = ({ inProgressCount = 0, resolvedCount = 0 }) => {
  return (

    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 min-h-screen bg-gray-100 p-4 sm:p-6">

  <div className="w-full sm:w-[780px] h-[250px] sm:h-[350px] md:h-[400px] rounded-lg shadow-md relative overflow-hidden flex items-center justify-center">
  <div className="absolute inset-0 bg-purple-600 bg-opacity-40 z-0"></div>

   <img src={Vector1}
     alt="In Progress Left"
   className="absolute left-0 top-1/2 -translate-y-1/2 h-full max-h-full w-auto object-contain z-10" />

   <img src={Vector1}
   alt="In Progress Right"
 className="absolute right-0 top-1/2 -translate-y-1/2 h-full max-h-full w-auto object-contain z-10 scale-x-[-1]" />

 <div className="relative z-20 text-white text-center px-2">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">In-Progress</h2>
    <p className="text-3xl sm:text-4xl md:text-5xl font-bold">{inProgressCount}</p>
 </div>
  </div>

 <div className="w-full sm:w-[780px] h-[250px] sm:h-[350px] md:h-[400px] rounded-lg shadow-md relative overflow-hidden flex items-center justify-center">
   <div className="absolute inset-0 bg-green-600 bg-opacity-40 z-0"></div>

    <img src={Vector1}
    alt="Resolved Left"
      className="absolute left-0 top-1/2 -translate-y-1/2 h-full max-h-full w-auto object-contain z-10" />

  <img src={Vector1}
alt="Resolved Right"
    className="absolute right-0 top-1/2 -translate-y-1/2 h-full max-h-full w-auto object-contain z-10 scale-x-[-1]" />

   <div className="relative z-20 text-white text-center px-2">
  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Resolved</h2>
   <p className="text-3xl sm:text-4xl md:text-5xl font-bold">{resolvedCount}</p>
 </div>
   </div>

  </div>
  );
};

export default Banner;
