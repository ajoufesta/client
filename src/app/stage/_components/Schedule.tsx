import React from "react";
import ScheduleGradient from "../../../../public/scheduleGradient.svg";
import ScheduleTitle from "./ScheduleTitle";
import ScheduleTitleWrapper from "./ScheduleTitleWrapper";
import StageCurrentButton from "./StageCurrentButton";

const Schedule = () => {
  return (
    <div className="w-[27.4rem] h-[30.7rem] flex flex-col items-center relative rounded-[1rem] bg-blue-700 ">
      <ScheduleTitleWrapper />
      <StageCurrentButton startTime="16:30" showName="리틀 장범준" />
      <ScheduleGradient className="absolute bottom-0" />
    </div>
  );
};

export default Schedule;
