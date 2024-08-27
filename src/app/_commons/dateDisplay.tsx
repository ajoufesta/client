import { FESTIVAL_DATE } from '@/app/lib/constants';
import { isToday, getFormattedDate } from '@/app/lib/utils';
import React from 'react';

interface Props {
  selectedDay: number;
}

const DateDisplay = ({ selectedDay }: Props) => {
  if (selectedDay === -1 || selectedDay > FESTIVAL_DATE.length) {
    return null;
  }

  return (
    <span className="font-bold text-brown-300 text-[1.6rem] rounded-[3rem] bg-brown-600 mb-[1rem] py-[0.5rem] px-[1rem] flex justify-center items-center">
      {isToday(selectedDay)
        ? 'TODAY'
        : getFormattedDate(FESTIVAL_DATE[selectedDay - 1])}
    </span>
  );
};

export default DateDisplay;
