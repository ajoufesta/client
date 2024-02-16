"use client";

import Link from "next/link";
import { FESTIVAL_DATE } from "@/app/lib/constants";
import { useQueryWithDefault } from "@/app/hooks/useQueryWithDefault";
import { useToggle } from "@/app/hooks/useToggle";

const DayDisplay = ({ selectedDay }: { selectedDay: number }) => {
  const { getQueryParam, getQueryUrl } = useQueryWithDefault();
  const [isToggle, handleToggle] = useToggle();

  const selectedSection = getQueryParam("section", "seongho1");

  return (
    <div
      className="flex flex-col items-center w-auto font-medium relative cursor-pointer"
      onClick={handleToggle}
    >
      <div className="pl-8 text-white text-center text-2xl font-bold w-full p-2 flex items-center justify-center">
        {`DAY ${selectedDay}`}
        <img
          src="/arrow-down.svg"
          className={`w-3 ml-3 ${isToggle ? "rotate-180" : ""}`}
          alt="arrow-down"
        />
      </div>
      <div
        className={`bg-white absolute top-full z-10 rounded-md overflow-hidden ${
          isToggle ? "block" : "hidden"
        }`}
      >
        <ul>
          {FESTIVAL_DATE.map((date, index) => (
            <li
              key={index}
              className={`px-10 py-1 text-base text-center font-normal hover:bg-blue-100 hover:text-blue-400 hover:font-semibold`}
            >
              <Link href={getQueryUrl(index + 1, selectedSection)}>
                DAY {index + 1}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DayDisplay;
