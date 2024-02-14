"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { FESTIVAL_DATE } from "@/app/lib/constants";

interface DayDisplayProps {
  selectedDay: number;
}

const DayDisplay = ({ selectedDay }: DayDisplayProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const createDayURL = (day: number) => {
    const params = new URLSearchParams();
    params.set("day", day.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div
      className="flex flex-col items-center w-auto font-medium relative cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="pl-8 text-white text-center text-2xl font-bold w-full p-2 flex items-center justify-center">
        {`DAY ${selectedDay}`}
        <img
          src="/arrow-down.svg"
          className={`w-3 ml-3 ${isOpen ? "rotate-180" : ""}`}
          alt="arrow-down"
        />
      </div>
      <div
        className={`bg-white absolute top-full z-10 rounded-md overflow-hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul>
          {FESTIVAL_DATE.map((date, index) => (
            <li
              key={index}
              className={`px-10 py-1 text-base text-center font-normal hover:bg-blue-100 hover:text-blue-400 hover:font-semibold
              ${index + 1 === Number(selectedDay) ? "hidden" : "block"}
              `}
            >
              <Link href={createDayURL(FESTIVAL_DATE.indexOf(date) + 1)}>
                DAY {FESTIVAL_DATE.indexOf(date) + 1}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DayDisplay;
