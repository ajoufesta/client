import { FESTIVAL_DATE } from "@/app/lib/constants";
import { isToday, getFormattedDate } from "@/app/lib/utils";
import React from "react";

const DateDisplay = ({ selectedDay }: { selectedDay: number }) => {
  if (selectedDay === -1 || selectedDay > FESTIVAL_DATE.length) {
    return null;
  }

  return (
    <div className="w-auto p-3 flex justify-center items-center h-5 flex-shrink-0 rounded-[3rem] bg-blue-700 text-blue-300 text-center text-sm font-semibold">
      {isToday(selectedDay)
        ? "TODAY"
        : getFormattedDate(FESTIVAL_DATE[selectedDay - 1])}
    </div>
  );
};

export default DateDisplay;
