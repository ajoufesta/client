import React from "react";
import ScheduleGradient from "../../../../public/scheduleGradient.svg";
import ScheduleTitle from "./ScheduleTitle";
import ScheduleTitleWrapper from "./ScheduleTitleWrapper";
import StageCurrentButton from "./StageCurrentButton";
import { useState, useEffect } from "react";

const Schedule = () => {
  return (
    <div className="w-[27.4rem] h-[30.7rem] min-h-[30.7rem] flex flex-col items-center relative rounded-[1rem] bg-blue-700">
      <ScheduleTitleWrapper />
      <div className="min-h-[23rem] overflow-y-scroll w-[27.4rem] h-[22rem] px-[2.5rem]">
        <StageCurrentButton startTime="16:30" showName="리틀 장범준" />
        <StageCurrentButton startTime="16:30" showName="리틀 장범준" />
        <StageCurrentButton startTime="16:30" showName="리틀 장범준" />
        <StageCurrentButton startTime="16:30" showName="리틀 장범준" />
        <StageCurrentButton startTime="16:30" showName="리틀 장범준" />
        <StageCurrentButton startTime="16:30" showName="리틀 장범준" />
        <StageCurrentButton startTime="16:30" showName="리틀 장범준" />
        <StageCurrentButton startTime="16:30" showName="리틀 장범준" />
        <StageCurrentButton startTime="16:30" showName="리틀 장범준" />
        <StageCurrentButton startTime="16:30" showName="리틀 장범준" />
        <StageCurrentButton startTime="16:30" showName="리틀 장범준" />
        <StageCurrentButton startTime="16:30" showName="리틀 장범준" />
      </div>

      <ScheduleGradient className="absolute bottom-0" />
    </div>
  );
};

export default Schedule;
