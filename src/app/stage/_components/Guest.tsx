import React from "react";

const Guest = () => {
  return (
    <div className="w-[27.4rem] h-[15.5rem] flex flex-col items-center relative rounded-[1rem] bg-blue-700 mt-[0.5rem] ">
      <div className="absolute top-[-1.5rem] w-[7.6rem] h-[3rem] text-blue-900 text-[1.5rem] flex items-center text-center justify-center bg-blue-600 rounded-[0.5rem]">
        GUEST
      </div>
      <div className="h-[3.6rem] w-[22.4rem] flex  justify-center items-center px-[4.1rem] mb-3 bg-white rounded-[0.5rem]">
        박재범
      </div>
    </div>
  );
};

export default Guest;
