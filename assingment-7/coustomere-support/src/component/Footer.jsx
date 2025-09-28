import React from "react";

const Footer = () => {
  return (

  <div className="bg-black w-full py-12 px-4 sm:px-8 md:px-20">
<div className="flex flex-col sm:flex-row sm:justify-between gap-8">
        
  <div className="sm:w-2/3">
    <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-1">
  <span>CS — Ticket</span>
    <span className="font-normal">System</span>
  </h2>
     <p className="text-gray-400 text-sm sm:text-base leading-relaxed">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard <br />dummy text ever since the 1500s, when an <br />unknown printer took a galley of type and <br />scrambled it to make a type specimen book.
  </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 w-full sm:w-auto">
 <div>
    <h3 className="text-white text-lg font-semibold mb-2">Company</h3>
   <ul className="flex flex-col gap-1">
  <li className="text-gray-400 hover:text-white cursor-pointer">About Us</li>
     <li className="text-gray-400 hover:text-white cursor-pointer">Our Mission</li>
    <li className="text-gray-400 hover:text-white cursor-pointer">Contact Sales</li>
  </ul>
  </div>

   <div>
<h3 className="text-white text-lg font-semibold mb-2">Services</h3>
   <ul className="flex flex-col gap-1">
  <li className="text-gray-400 hover:text-white cursor-pointer">Products & Services</li>
     <li className="text-gray-400 hover:text-white cursor-pointer">Customer Stories</li>
   <li className="text-gray-400 hover:text-white cursor-pointer">Download Apps</li>
  </ul>
   </div>

   <div>
  <h3 className="text-white text-lg font-semibold mb-2">Information</h3>
    <ul className="flex flex-col gap-1">
    <li className="text-gray-400 hover:text-white cursor-pointer">Privacy Policy</li>
   <li className="text-gray-400 hover:text-white cursor-pointer">Terms & Conditions</li>
      <li className="text-gray-400 hover:text-white cursor-pointer">Join Us</li>
   </ul>
   </div>

  <div>
    <h3 className="text-white text-lg font-semibold mb-2">Social Links</h3>
   <ul className="flex flex-col gap-1">
  <li className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
     <span className="font-bold">x</span> <span>@CS — Ticket System</span>
   </li>
   <li className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
  <span className="font-bold">in</span> <span>@CS — Ticket System</span>
     </li>
   <li className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
  <span className="font-bold">f</span> <span>@CS — Ticket System</span>
    </li>
    <li className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
   <span className="font-bold">m</span> <span>support@cst.com</span>
  </li>
   </ul>
 </div>

  </div>
 </div>

  <div className="mt-8 text-center">
 <p className="text-gray-400 text-sm"> © 2025 CS —    Ticket System. All rights reserved.</p>
  </div>
 </div>
  );
};

export default Footer;
