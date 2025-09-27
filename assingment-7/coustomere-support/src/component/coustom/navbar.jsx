import React from "react";

const Navbar = () => {
  return (

 <div className="bg-white flex flex-col sm:flex-row items-center w-full px-4 sm:px-8 py-4 h-auto sm:h-[77px]">

  <div className="text-[#130B2D] font-bold text-2xl mb-2 sm:mb-0"> CS — Ticket System </div>

  <ul className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-7 text-[#130B2D] items-center ml-auto">
   <li className="cursor-pointer hover:text-purple-600 transition duration-100">Home</li>
  <li className="cursor-pointer hover:text-purple-600 transition duration-100">FAQ</li>
    <li className="cursor-pointer hover:text-purple-600 transition duration-100">Changelog</li>
  <li className="cursor-pointer hover:text-purple-600 transition duration-100">Blog</li>
  <li className="cursor-pointer hover:text-purple-600 transition duration-100">Download</li>
  <li className="cursor-pointer hover:text-purple-600 transition duration-100">Contact</li>
   <li className="hidden sm:block"></li>
  </ul>

 <button className="mt-2 sm:mt-0 w-full sm:w-[145px] sm:ml-5 h-[45px] bg-[#9F62F2] rounded flex items-center justify-center gap-1 text-white font-medium hover:bg-purple-500 hover:scale-110 transition duration-100"> + New Ticket</button>

 <div className="hidden sm:block"></div>

</div>
  );
};

export default Navbar;

