import React from "react";
import TicketCards from "./TicketCards";
import TaskStatus from "./TaskStatus";
import ResolvedTasks from "./ResolvedTasks";

const MainSection = ({
  tickets,
  inProgress,
  resolved,
  handleAddToProgress,
  handleComplete,
}) => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 p-4 md:p-6">
      
      {/* Ticket Section */}
      <div className="md:col-span-1 lg:col-span-9">
        <TicketCards
          tickets={tickets}
          handleAddToProgress={handleAddToProgress}
          inProgress={inProgress}
        />
      </div>

      {/* Task Status Section */}
      <div className="md:col-span-1 lg:col-span-3">
        <h2 className="text-xl md:text-2xl font-bold text-stone-600 pb-4 md:pb-6">
          Task Status
        </h2>

        <div className="space-y-6">
          <TaskStatus
            inProgress={inProgress}
            handleComplete={handleComplete}
          />
          <ResolvedTasks resolved={resolved} />
        </div>
      </div>
    </div>
  );
};

export default MainSection;