import React from 'react';

const ResolvedTasks = ({ resolved }) => {
    return (
        <div>
            <h3 className="font-bold text-lg text-gray-700 mb-2">Resolved Tasks</h3>
            {
                (resolved.length > 0) ? (
                    resolved.map((ticket) => (
                        <div key={ticket.id} className="bg-blue-100 p-2 rounded-lg shadow-md flex flex-col gap-2  mb-3">
                            <div>
                                <h4 className="font-semibold text-sm  text-gray-700 py-1">{ticket.title}</h4>     
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No resolved tasks yet.</p>
                )
            }
        </div>
    );
};

export default ResolvedTasks;