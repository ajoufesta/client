import Image from "next/image";
import DayDisplay from "./_components/dayDisplay";
import DateDisplay from "./_components/dateDisplay";
import PubMap from "./_components/pubMap";
import { FESTIVAL_DATE } from "../lib/constants";
import { get } from "http";
import { getCurrentDay } from "../lib/utils";

export const metadata = {
  title: "Pubs",
  description: "Pubs Page",
};

interface PubsPageProps {
  searchParams?: {
    day?: string;
    section?: string;
  };
}

const PubsPage = ({ searchParams }: PubsPageProps): JSX.Element => {
  // day가 쿼리스트링으로 넘어오지 않으면 오늘 날짜로 설정
  const selectedDay = Number(searchParams?.day) || getCurrentDay(new Date());
  // section이 쿼리스트링으로 넘어오지 않으면 G-1로 설정
  const selectedSection = searchParams?.section || "G-1";

  if (selectedDay === -1) {
    return <div>Invalid Date</div>;
  }

  // const totalPubs = await fetchPubs(selectedDay, selectedSection);
  //   return <Pubs day={day} section={section} />;
  return (
    <>
      <DateDisplay selectedDay={selectedDay} />
      <DayDisplay selectedDay={selectedDay} />
      <PubMap />
    </>
  );
};

export default PubsPage;
