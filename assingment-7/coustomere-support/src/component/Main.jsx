import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ticketsData = [

  { id: "#1001", title: "Login Issues - Can't Access Account", desc: "Customer is unable to log in to their account. They've tried resetting their password multiple times but still...", status: "Open", priority: "HIGH PRIORITY", assigned: "John Smith", date: "1/15/2024" },

  { id: "#1002", title: "Payment Failed - Card Declined", desc: "Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.", status: "Open", priority: "HIGH PRIORITY", assigned: "Sarah Johnson", date: "1/16/2024" },

  { id: "#1003", title: "Unable to Download Invoice", desc: "Customer cannot download their January invoice from the billing section. The download button is...", status: "Open", priority: "MEDIUM PRIORITY", assigned: "Michael Brown", date: "1/17/2024" },

  { id: "#1004", title: "Incorrect Billing Address", desc: "Customer’s billing address shows a different city. They updated it but it still displays the old one.", status: "Open", priority: "LOW PRIORITY", assigned: "Emily Davis", date: "1/18/2024" },

  { id: "#1005", title: "App Crash on Launch", desc: "Customer reports that the mobile app crashes immediately upon opening on Android 13.", status: "Open", priority: "HIGH PRIORITY", assigned: "David Wilson", date: "1/19/2024" },

  { id: "#1006", title: "Refund Not Processed", desc: "Customer requested a refund two weeks ago but has not received the amount yet.", status: "Open", priority: "MEDIUM PRIORITY", assigned: "Sophia Taylor", date: "1/20/2024" },

  { id: "#1007", title: "Two-Factor Authentication Issue", desc: "Customer is not receiving 2FA codes on their registered phone number.", status: "Open", priority: "HIGH PRIORITY", assigned: "James Anderson", date: "1/21/2024" },

  { id: "#1008", title: "Unable to Update Profile Picture", desc: "Customer tries to upload a new profile picture but gets 'Upload failed' error.", status: "Open", priority: "LOW PRIORITY", assigned: "Olivia Martinez", date: "1/22/2024" },

  { id: "#1009", title: "Subscription Auto-Renewal", desc: "Customer wants to enable auto-renewal for their subscription but the toggle is disabled.", status: "Open", priority: "MEDIUM PRIORITY", assigned: "Liam Thomas", date: "1/17/2024" },

  { id: "#1010", title: "Missing Order Confirmation Email", desc: "Customer placed an order but didn't receive a confirmation email even though payment succeeded.", status: "Open", priority: "MEDIUM PRIORITY", assigned: "Isabella Garcia", date: "1/24/2024" },
];

const MainSection = () => {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

 const handleAddTask = (ticket) => {
   if (inProgress.find((t) => t.id === ticket.id)) {
    toast.info("Ticket already in progress");
   return;
  }

   setInProgress([...inProgress, ticket]);
    toast.success("Ticket added to In Progress");
  };

  const handleComplete = (ticket) => {
   setInProgress(inProgress.filter((t) => t.id !== ticket.id));
 setResolved([...resolved, ticket]);
    setTickets(tickets.filter((t) => t.id !== ticket.id));
   toast.success("Ticket resolved!");
  };

  return (
  <div className="flex flex-col gap-4 p-4 flex-1 bg-white">

  <div className="mb-4">
    <h2 className="text-2xl font-bold text-black">Customer Tickets</h2>
 </div>

  <div className="flex flex-col lg:flex-row gap-4">
    
 <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
   {tickets.map((t) => (
   <div
  key={t.id}
   className="bg-white p-4 rounded shadow cursor-pointer hover:shadow-lg"
   onClick={() => handleAddTask(t)}
   >
   <h4 className="font-bold text-black">{t.title}</h4>
   <p className="text-sm text-black">{t.desc}</p>
 <p className="text-xs mt-1 text-black"> {t.customer || t.assigned}</p>
              
  <p className=" text-xs mt-1 text-black"> {t.customer || t.date}</p>
  <button className=" text-xs mt-1 text-black"> {t.customer || t.status}</button>
         
   <span
  className={`text-xs px-2 py-0.5 rounded ${
     t.priority === "HIGH"
    ? "bg-red-100 text-black"
    : t.priority === "MEDIUM"
  ? "bg-yellow-100 text-black"
      : "bg-green-100 text-black"
    }`}
    >
 {t.priority}
    </span>
  </div>
   ))}
 </div>


  <div className="w-full lg:w-80 flex flex-col gap-3">
<div className="bg-gray-200 p-2 rounded">
  <h4 className="font-bold text-black">Task Status</h4>
  </div>
 {inProgress.map((t) => (
  <div
   key={t.id}
  className="bg-white p-3 rounded shadow flex justify-between items-center" >
 <span className="text-black">{t.title}</span>
     <button
    onClick={() => handleComplete(t)}
  className="bg-green-500 text-black px-2 py-1 rounded text-xs" > Complete
  </button>
  </div>
 ))}
  </div>
  </div>
  </div>
  );
};

export default MainSection;
