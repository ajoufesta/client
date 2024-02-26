import Image from "next/image";
import DateDisplay from "../_commons/dateDisplay";
import DayDisplay from "../_commons/dayDisplay";
import { getCurrentDay } from "../lib/utils";
import SectionNavigator from "./_components/sectionNavigator";
import Tutorial from "./_components/tutorial";
import UnderBar from "./_components/underBar";

interface EntireMapPageProps {
  searchParams?: {
    day?: string;
    section?: string;
  };
}

const EntireMapPage = ({ searchParams }: EntireMapPageProps) => {
  // day가 쿼리스트링으로 넘어오지 않으면 오늘 날짜로 설정
  const selectedDay = Number(searchParams?.day) || getCurrentDay(new Date());

  if (selectedDay === -1) {
    return <div>Invalid Date</div>;
  }

  return (
    <>
      <DateDisplay selectedDay={selectedDay} />
      <h1 className="text-4xl font-normal text-center mt-4 text-white mb-4">
        동아리 박람회
      </h1>
      <div className="flex mt-2 w-[33.4rem] h-[49.9rem] flex-col items-center rounded-xl overflow-hidden relative">
        <Image
          src="/wholeMap.png"
          alt="wholeMap"
          width={1000}
          height={1000}
          priority
        />
        <UnderBar />
        <SectionNavigator />
        <Tutorial />
      </div>
    </>
  );
};

export default EntireMapPage;
