import React from "react";

const tickets = [
  { id: "#1001", title: "Login Issues - Can't Access Account", desc: "Customer is unable to log in to their account. They've tried resetting their password multiple times but still...", status: "Open", priority: "HIGH", assigned: "John Smith", date: "1/15/2024" },

  { id: "#1002", title: "Payment Failed - Card Declined", desc: "Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.", status: "Open", priority: "HIGH", assigned: "Sarah Johnson", date: "1/16/2024" },

  { id: "#1003", title: "Unable to Download Invoice", desc: "Customer cannot download their January invoice from the billing section. The download button is...", status: "In-Progress", priority: "MEDIUM", assigned: "Michael Brown", date: "1/17/2024" },

  { id: "#1004", title: "Incorrect Billing Address", desc: "Customer’s billing address shows a different city. They updated it but it still displays the old one.", status: "Open", priority: "LOW", assigned: "Emily Davis", date: "1/18/2024" },

  { id: "#1005", title: "App Crash on Launch", desc: "Customer reports that the mobile app crashes immediately upon opening on Android 13.", status: "Open", priority: "HIGH", assigned: "David Wilson", date: "1/19/2024" },

  { id: "#1006", title: "Refund Not Processed", desc: "Customer requested a refund two weeks ago but has not received the amount yet.", status: "In-Progress", priority: "MEDIUM", assigned: "Sophia Taylor", date: "1/20/2024" },

  { id: "#1007", title: "Two-Factor Authentication Issue", desc: "Customer is not receiving 2FA codes on their registered phone number.", status: "Open", priority: "HIGH", assigned: "James Anderson", date: "1/21/2024" },

  { id: "#1008", title: "Unable to Update Profile Picture", desc: "Customer tries to upload a new profile picture but gets 'Upload failed' error.", status: "Open", priority: "LOW", assigned: "Olivia Martinez", date: "1/22/2024" },

  { id: "#1009", title: "Order Delayed", desc: "Customer wants to enable auto-renewal for their subscription but the toggle is disabled.", status: "Open", priority: "MEDIUM", assigned: "Liam Scott", date: "1/23/2024" },

  { id: "#1010", title: "Email Notifications Not Working", desc: "Customer placed an order but didn't receive a confirmation email even though payment succeeded.", status: "Open", priority: "LOW", assigned: "Emma White", date: "1/24/2024" },

];

const Main = () => {
  return (

 <div className="relative w-full min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8 shadow flex flex-col lg:flex-row gap-6 lg:gap-8">
   
  <div className="flex-1 flex flex-col">
 <div className="text-black font-bold text-lg mb-4 md:mb-6"> Customer Tickets</div>

   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 h-full">

  {tickets.map((ticket, index) => (
   <TicketBox key={index} ticket={ticket} />
  ))}
   </div>
  </div>

 <div className="w-full sm:w-[360px] flex flex-col gap-4 sm:gap-6 mt-4 lg:mt-0">
   <div className="w-full h-[70px] flex flex-col justify-center gap-1.5 bg-gray-100 rounded-[5px] p-2.5 sm:p-3">
  <span className="text-black font-bold text-[16px]">Task Status</span>
  <span className="text-gray-500 text-[12px] font-semibold">Select a ticket to add to Task Status
  </span>
 </div>
  <div className="w-full h-[60px] flex flex-col justify-center gap-1.5 bg-gray-100 rounded-[5px] p-2.5 sm:p-3">
   <span className="text-black font-bold text-[16px]">Resolved Task</span>
  <span className="text-gray-500 text-[12px] font-semibold">No resolved tasks yet.</span>
  </div>
  </div>
 </div>
  );
};


const TicketBox = ({ ticket }) => {
const borderColor =
  ticket.priority === "HIGH"
   ? "border-red-500"
  : ticket.priority === "MEDIUM"
    ? "border-orange-500"
    : "border-green-500";

  const statusColor =
    ticket.status === "Open"
   ? "bg-green-300 text-green-700 font-semibold"
    : "bg-yellow-100 text-yellow-700 font-semibold";

  const priorityColor =
    ticket.priority === "HIGH"
    ? "bg-red-100 text-red-700 font-semibold"
   : ticket.priority === "MEDIUM"
    ? "bg-yellow-100 text-yellow-700 font-semibold"
      : "bg-green-100 text-green-700 font-semibold";

  return (
 <div
      className={`w-full bg-white rounded-[5px] p-3 border-l-[4px] ${borderColor} shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1 cursor-pointer`}
    >
   
   <div className="flex justify-between items-start mb-1.5">
   <div className="font-bold text-[14px] text-gray-800">{ticket.title}</div>
   <span className={`px-2 py-0.5 rounded-[20px] text-[12px] ${statusColor}`}>
   {ticket.status}
   </span>
  </div>


<div className="text-[12px] text-gray-600 font-semibold mb-1.5 line-clamp-3">
  {ticket.desc}
   </div>

 
  <div className="flex justify-between items-center text-[11px] text-gray-500 font-semibold">
  <div className="flex items-center gap-1.5">
  <span>{ticket.id}</span>
 {ticket.priority && (
    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${priorityColor}`}>
    {ticket.priority} PRIORITY
   </span>
  )}
 </div>
   <div className="flex items-center gap-1.5">
  <span>{ticket.assigned}</span>
  <span>{ticket.date}</span>
 </div>
  </div>
  </div>
  );
};

export default Main;
