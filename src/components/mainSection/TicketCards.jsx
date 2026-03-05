import React from 'react';
import TicketCard from './TicketCard';

const TicketCards = ({ tickets, handleAddToProgress, inProgress }) => {
  return (
    <div className="w-full">
      {/* Title for the section */}
      <h2 className="text-2xl font-bold text-slate-600 mb-6">Customer Tickets</h2>

      {/* 2-column grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {tickets.length > 0 ? (
          tickets.map((ticket) => (
            <TicketCard 
              key={ticket.id} 
              ticket={ticket} 
              handleAddToProgress={handleAddToProgress} 
              inProgress={inProgress}
            />
          ))
        ) : (
          <div className="col-span-full py-10 text-center bg-white rounded-lg border border-dashed border-gray-300">
            <p className="text-gray-500">No tickets available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketCards;