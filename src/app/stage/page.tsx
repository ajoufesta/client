import React from "react";
import Schedule from "./_components/Schedule";
import DateDisplay from "../pubs/_components/dateDisplay";
import DayDisplay from "../pubs/_components/dayDisplay";
import { getCurrentDay } from "../lib/utils";
import Guest from "./_components/Guest";

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
      <Guest />
    </div>
  );
};

export default Page;
