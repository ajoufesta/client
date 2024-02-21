import React from "react";
import ScheduleGradient from "../../../../public/scheduleGradient.svg";
import ScheduleTitle from "./ScheduleTitle";
import ScheduleTitleWrapper from "./ScheduleTitleWrapper";

const Schedule = () => {
  return (
    <div className="w-[27.4rem] h-[30.7rem] flex relative rounded-[1rem] bg-blue-700 ">
      <ScheduleTitleWrapper />
      <ScheduleGradient className="absolute bottom-0" />
    </div>
  );
};

export default Schedule;
