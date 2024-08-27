import React from 'react';

interface StagePropTypes {
  showName: string;
  startTime: string;
  endTime: string;
  isNow: boolean;
  isToday: boolean;
  status: 'SCHEDULED' | 'IN_PROGRESS' | 'DONE';
}

const StageCurrentButton = ({
  showName,
  startTime,
  endTime,
  status,
  isNow,
  isToday,
}: StagePropTypes) => {
  return (
    <div
      className={`w-full h-[5.1rem] flex justify-between items-center rounded-full font-bold text-brown-500 px-[1.6rem] ${
        isNow && status !== 'DONE' && isToday ? 'bg-brown-600' : ''
      }`}
    >
      <div
        className={`flex justify-between w-[13rem] h-[2.5rem] rounded-[5rem] text-center font-bold text-brown-500 text-2xl items-center px-6 ${
          isNow && status !== 'DONE' && isToday ? 'bg-white' : 'bg-brown-800'
        }`}
      >
        <span
          className={`text-brown-600 ${
            isNow && status !== 'DONE' && isToday
              ? 'font-semibold'
              : 'text-brown-600 font-normal'
          }`}
        >
          {startTime}
        </span>
        <span
          className={`text-brown-600 ${
            isNow && status !== 'DONE' && isToday
              ? 'font-semibold'
              : ' font-normal'
          }`}
        >
          -
        </span>
        <span
          className={`text-brown-600 ${
            isNow && status !== 'DONE' && isToday
              ? 'font-semibold'
              : 'font-normal'
          }`}
        >
          {endTime}
        </span>
      </div>
      <div
        className={`w-[11.9rem] text-center text-[1.6rem] ${
          isNow && status !== 'DONE' && isToday
            ? 'text-brown-300 font-semibold'
            : 'text-brown-600 font-normal'
        }`}
      >
        {showName}
      </div>
    </div>
  );
};

export default StageCurrentButton;
