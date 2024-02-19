import DayDisplay from "./_components/dayDisplay";
import DateDisplay from "./_components/dateDisplay";
import { getCurrentDay } from "../lib/utils";
import { SECTION_LIST } from "../lib/constants";
import Map from "./_components/map";
import SectionBar from "./_components/sectionBar";
import PubNavigator from "./_components/pubNavigator";
import fetchPubs from "../lib/data";
import Modal from "../_commons/modal";

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

const PubsPage = async ({ searchParams }: PubsPageProps) => {
  // day가 쿼리스트링으로 넘어오지 않으면 오늘 날짜로 설정
  const selectedDay = Number(searchParams?.day) || getCurrentDay(new Date());
  // section이 쿼리스트링으로 넘어오지 않으면 G-1로 설정
  const selectedSection = searchParams?.section || "seongho1";

  if (selectedDay === -1) {
    return <div>Invalid Date</div>;
  }

  if (!SECTION_LIST.some((s) => s.section === selectedSection)) {
    return <div>Invalid Section</div>;
  }

  const pubs = await fetchPubs();
  // const totalPubs = await fetchPubs(selectedDay, selectedSection);

  return (
    <>
      <DateDisplay selectedDay={selectedDay} />
      <DayDisplay selectedDay={selectedDay} />
      <div className="flex mt-2 w-[21rem] h-[31rem] flex-col items-center rounded-xl overflow-hidden relative">
        <Map
          selectedDay={selectedDay}
          selectedSection={selectedSection}
          pubs={pubs}
        />
        <PubNavigator pubs={pubs} />
        <SectionBar
          selectedDay={selectedDay}
          selectedSection={selectedSection}
        />
        <Modal />
      </div>
    </>
  );
};

export default PubsPage;
