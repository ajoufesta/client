import React from "react";
import ScheduleGradient from "../../../../public/scheduleGradient.svg";
import ScheduleTitleWrapper from "./ScheduleTitleWrapper";
import StageCurrentButton from "./StageCurrentButton";
import { Stage } from "@/app/lib/types"; // Stage 타입 import

interface ScheduleProps {
  stages: Stage[]; // stages props의 타입을 Stage 배열로 지정
}

const Schedule = ({ stages }: ScheduleProps) => {
  console.log(stages, "dfd");
  return (
    <div className="w-[27.4rem] h-[30.7rem] min-h-[30.7rem] flex flex-col items-center relative rounded-[1rem] bg-blue-700">
      <ScheduleTitleWrapper />
      <div className="min-h-[23rem] overflow-y-scroll w-[27.4rem] h-[22rem] px-[2.5rem]">
        {stages.map((stage, index) => (
          <StageCurrentButton
            key={index}
            startTime={stage.startTime}
            showName={stage.showName}
          />
        ))}
      </div>
      <ScheduleGradient className="absolute bottom-0" />
    </div>
  );
};

export default Schedule;
