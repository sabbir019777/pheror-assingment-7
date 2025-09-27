import React from "react";

const Navbar = () => {
  return (

  <div className="bg-white fixed top-0 left-0 w-full z-50 shadow-md flex flex-col sm:flex-row items-center px-4 sm:px-8 py-4 sm:h-[77px]">

 <div className="text-[#130B2D] font-bold text-2xl mb-2 sm:mb-0">
        CS — Ticket System
  </div>

 
<ul className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-7 ml-auto items-center text-[#130B2D] font-medium">
    
  <li className="cursor-pointer hover:text-purple-600 transition duration-150">Home</li>

 <li className="cursor-pointer hover:text-purple-600 transition duration-150">FAQ</li>

  <li className="cursor-pointer hover:text-purple-600 transition duration-150">Changelog</li>

   <li className="cursor-pointer hover:text-purple-600 transition duration-150">Blog</li>

   <li className="cursor-pointer hover:text-purple-600 transition duration-150">Download</li>

  <li className="cursor-pointer hover:text-purple-600 transition duration-150">Contact</li>
     </ul>

<button className="mt-2 sm:mt-0 w-full sm:w-[145px] sm:ml-5 h-[45px] bg-[#9F62F2] rounded flex items-center justify-center gap-1 text-white font-medium hover:bg-purple-500 hover:scale-105 transition duration-150">+ New Ticket</button>

 </div>
  );
};

export default Navbar;
