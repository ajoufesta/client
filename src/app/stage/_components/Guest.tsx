import React from "react";
import { Stage } from "@/app/lib/types";

interface ScheduleProps {
  stages: Stage[];
}

const Guest = () => {
  return (
    <div className="w-[27.4rem] h-[15.5rem] flex flex-col items-center justify-center relative rounded-[1rem] bg-blue-700 mt-[0.5rem] pt-10 text-blue-900 ">
      <div className="absolute top-[-1.5rem] w-[7.6rem] h-[3rem] text-blue-900 text-[1.5rem] flex items-center text-center justify-center bg-blue-600 rounded-[0.5rem] flex-shrink-0">
        GUEST
      </div>
      <div className="w-[22.4rem] h-[3.6rem] flex justify-center items-center  mb-3  rounded-[0.5rem] text-[1.4rem]">
        박재범
      </div>
      <div className="w-[22.4rem] h-[3.6rem] flex justify-center items-center  mb-3  rounded-[0.5rem] text-[1.4rem]">
        현아
      </div>
      <div className="w-[22.4rem] h-[3.6rem] flex justify-center items-center  mb-3 rounded-[0.5rem] text-[1.4rem]">
        문다현
      </div>
    </div>
  );
};

export default Guest;
