import { getFormattedDate } from '@/app/lib/utils';
import React from 'react';

const DateDisplay = () => {
  return (
    <div className={'flex justify-center'}>
      <span className="font-bold text-brown-300 text-[1.6rem] rounded-[3rem] bg-brown-600 py-[0.5rem] px-[1rem] flex justify-center items-center w-fit">
        {getFormattedDate(new Date().toISOString().slice(0, 10))}
      </span>
    </div>
  );
};

export default DateDisplay;
