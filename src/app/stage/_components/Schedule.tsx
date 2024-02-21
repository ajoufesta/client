import React from "react";
import ScheduleGradient from "../../../../public/scheduleGradient.svg";

const Schedule = () => {
  return (
    <div className="w-[27.4rem] h-[30.7rem] relative rounded-[1rem] bg-blue-700">
      <ScheduleGradient className="absolute bottom-0" />
    </div>
  );
};

export default Schedule;
