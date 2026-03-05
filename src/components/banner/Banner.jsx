import React from "react";
import vectorLeft from "../../assets/vector1.png";

const Banner = ({ inProgressCount, resolvedCount }) => {
  const cardBase =
    "relative overflow-hidden rounded-2xl p-10 text-white shadow-lg h-52 flex flex-col justify-center items-center";

  return (
    <div className="w-full py-14">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* In-Progress Card */}
        <div className={`${cardBase} bg-gradient-to-br from-[#632EE3] to-[#9F62F2]`}>
          {/* Left Vector */}
          <img
            src={vectorLeft}
            className="absolute top-0 left-0 opacity-70 pointer-events-none z-0"
          />
          {/* Right Vector (Flipped) */}
          <img
            src={vectorLeft}
            className="absolute top-0 right-0 opacity-70 pointer-events-none z-0 scale-x-[-1]"
          />

          <h3 className="relative z-10 text-lg font-medium opacity-90">In-Progress</h3>
          <p className="relative z-10 text-5xl font-bold mt-3">{inProgressCount}</p>
        </div>

        {/* Resolved Card */}
        <div className={`${cardBase} bg-gradient-to-br from-[#54CF68] to-[#00827A]`}>
          <img
            src={vectorLeft}
            className="absolute top-0 left-0 opacity-70 pointer-events-none z-0"
          />
          <img
            src={vectorLeft}
            className="absolute top-0 right-0 opacity-70 pointer-events-none z-0 scale-x-[-1]"
          />

          <h3 className="relative z-10 text-lg font-medium opacity-90">Resolved</h3>
          <p className="relative z-10 text-5xl font-bold mt-3">{resolvedCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;