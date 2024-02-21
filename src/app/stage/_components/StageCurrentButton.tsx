import React from "react";

interface StagePropTypes {
  showName: string;
  startTime: string;
}

const StageCurrentButton = ({ showName, startTime }: StagePropTypes) => {
  return (
    <div className="w-[22.4rem] h-[3.6rem] flex justify-between items-center rounded-[0.5rem] text-blue-400 bg-white px-[1.6rem]">
      <div className="w-[5.2rem] h-[1.8rem] bg-blue-100 rounded-[5rem] text-center">
        {startTime}
      </div>
      <div className="w-[10.8rem] text-center">{showName}</div>
    </div>
  );
};

export default StageCurrentButton;
