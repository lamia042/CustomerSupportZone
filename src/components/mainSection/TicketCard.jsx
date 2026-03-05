import React from 'react';
import { Calendar, Circle } from 'lucide-react'; // Using lucide-react for the icons

const TicketCard = ({ ticket, handleAddToProgress, inProgress }) => {
  const isInProgress = inProgress.some(
   (item) => item.id === ticket.id
);
    // console.log("Rendering TicketCard for ticket ID:", ticket.id);
  return (
    <div onClick={()=>{handleAddToProgress(ticket)}} className="max-w-md bg-white rounded-lg border border-gray-100 shadow-sm p-5 font-sans">
      {/* Header Row */}
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-xl font-bold text-slate-800 tracking-tight">
            {ticket.title}
        </h2>
        <div
  className={`flex-shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium
  ${
    isInProgress
      ? "bg-yellow-100 text-yellow-700"
      : "bg-green-100 text-green-700"
  }`}
>
  <div
    className={`w-2.5 h-2.5 rounded-full
    ${isInProgress ? "bg-yellow-600" : "bg-green-600"}`}
  ></div>

  {isInProgress ? "In Progress" : "Open"}
</div>
      </div>

      {/* Description */}
      <p className="text-slate-500 text-sm leading-relaxed mb-6">
        {ticket.description}
      </p>

      {/* Footer Row */}
      <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
        <div className="flex gap-4 items-center">
          <span className="text-slate-400">#{ticket.id}</span>
          <span className={`font-bold uppercase tracking-wider ${ticket.priority === 'High' ? 'text-red-500' : ticket.priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>
             {ticket.priority} Priority
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <span className="text-slate-600">{ticket.customer}</span>
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-slate-400" />
            <span>{ticket.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;