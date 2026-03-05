import React from "react";
import vectorLeft from "../../assets/vector1.png";
import vectorRight from "../../assets/vector2.png";

const Banner = ({
  inProgressCount,
  resolvedCount
}) => {
  console.log("Banner Props:", { inProgressCount, resolvedCount });
  const cardBase =
    "relative overflow-hidden rounded-2xl p-10 text-white shadow-lg h-52 flex flex-col justify-center items-center";

  const vectorStyle = (left, right) => ({
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    zIndex: 0,
    backgroundImage: `url(${left}), url(${right})`,
    backgroundPosition: "left top, right top",
    backgroundRepeat: "no-repeat",
    opacity: 0.7,
    filter: "contrast(0.2) brightness(40.1)",
  });

  return (
    <div className="w-full py-14">
      <div className="max-w-7xl mx-auto px-8  grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* In-Progress Card */}
        <div
          className={`${cardBase} bg-gradient-to-br from-[#632EE3] to-[#9F62F2]`}
        >
          <div style={vectorStyle(vectorLeft, vectorLeft)}></div>

          <h3 className="relative z-10 text-lg font-medium opacity-90">
            In-Progress
          </h3>
          <p className="relative z-10 text-5xl font-bold mt-3">{inProgressCount}</p>
        </div>

        {/* Resolved Card */}
        <div
          className={`${cardBase} bg-gradient-to-br from-[#54CF68] to-[#00827A]`}
        >
          <div style={vectorStyle(vectorLeft, vectorLeft)}></div>

          <h3 className="relative z-10 text-lg font-medium opacity-90">
            Resolved
          </h3>
          <p className="relative z-10 text-5xl font-bold mt-3">{resolvedCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
