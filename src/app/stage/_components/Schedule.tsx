import React from 'react';
import StageCurrentButton from './StageCurrentButton';
import { Stage } from '@/app/lib/types';
import { checkNow } from './checkNow';

interface ScheduleProps {
  stages: Stage[];
  day: number;
  isToday: boolean;
}

const Schedule = ({ stages, isToday }: ScheduleProps) => {
  return (
    <div className="w-[32.5rem] flex flex-col items-center justify-center ">
      <div className="w-[31rem] pt-4 pb-8 h-fit flex flex-col items-center justify-center relative rounded-[1.2rem] bg-white px-[1.2rem] overflow-hidden">
        <div className="h-[4.5rem] w-full flex flex-col px-[1.3rem]">
          <div className="w-full flex justify-between">
            <div className="w-full h-[4rem] text-brown-600 text-[1.6rem] flex items-center justify-center font-bold">
              공연시간
            </div>
            <div className="w-full h-[4rem] text-brown-600 text-[1.6rem] flex items-center justify-center font-bold">
              공연팀
            </div>
          </div>
          <hr className="h-[0.2rem] bg-brown-700 w-full rounded-xl" />
        </div>
        {stages.map((stage) => (
          <>
            <StageCurrentButton
              startTime={stage.startTime}
              endTime={stage.endTime}
              showName={stage.teamName}
              status={stage.status}
              isNow={checkNow(stage.startTime, stage.endTime)}
              isToday={isToday}
            />
          </>
        ))}
        <div className="w-full flex flex-col text-center px-[1.6rem] mt-[1rem] gap-[0.5rem]">
          <div className="w-full flex justify-between text-2xl">
            <div className="flex justify-center items-center w-[5rem] h-[2.4rem] rounded-[5rem] text-center font-bold bg-brown-700 text-brown-100">
              상시
            </div>
            <div className="ml-[1.6rem] flex items-center w-[24rem] text-center text-brown-600">
              동아리 여름방학 사진 전시
            </div>
          </div>
          <div className="w-full flex justify-between text-2xl">
            <div className="flex justify-center items-center w-[5rem] h-[2.4rem] rounded-[5rem] text-center font-bold bg-brown-700 text-brown-100">
              상시
            </div>
            <div className="ml-[1.6rem] flex items-center w-[24rem] text-center text-brown-600">
              아주대학교 중앙동아리 AMI 전시
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
