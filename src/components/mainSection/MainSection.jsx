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
    <div className="container mx-auto grid grid-cols-12 gap-6 p-6">
      <div className="col-span-9">
        <div>
          {
            <TicketCards
              tickets={tickets}
              handleAddToProgress={handleAddToProgress}
              inProgress={inProgress}
            />
          }
        </div>
      </div>

      <div className="col-span-3">
        <h2 className="text-2xl font-bold text-stone-600 pb-6">Task Status</h2>
        <div className="space-y-6">
          <TaskStatus inProgress={inProgress} handleComplete={handleComplete} />
          <ResolvedTasks resolved={resolved} />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
