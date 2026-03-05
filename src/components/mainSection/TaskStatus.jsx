import React from "react";

const TaskStatus = ({ inProgress = [], handleComplete }) => {
  return (
    <div>
      {inProgress.length > 0 ? (
        inProgress.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center mb-3"
          >
            <div>
              <h4 className="font-bold text-gray-700">
                {ticket.title}
              </h4>
              <p className="text-sm text-gray-400">
                #{ticket.id}
              </p>
            </div>

            <button
              onClick={() => handleComplete(ticket)}
              className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded transition"
            >
              Complete
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500">
          Select a ticket to add to task Status.
        </p>
      )}
    </div>
  );
};

export default TaskStatus;