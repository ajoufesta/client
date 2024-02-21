import React from "react";
import Schedule from "./_components/Schedule";
import DateDisplay from "../pubs/_components/dateDisplay";
import DayDisplay from "../pubs/_components/dayDisplay";
import { getCurrentDay } from "../lib/utils";

interface StagePageProps {
  searchParams?: {
    day?: number;
  };
}
const Page = ({ searchParams }: StagePageProps) => {
  const selectedDay = Number(searchParams?.day) || getCurrentDay(new Date());
  return (
    <div className="flex flex-col justify-center items-center">
      <DateDisplay selectedDay={selectedDay} />
      <DayDisplay selectedDay={selectedDay} />
      <Schedule />
      {searchParams?.day}으아아{" "}
    </div>
  );
};

export default Page;
