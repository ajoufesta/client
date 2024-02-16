import { SECTION_LIST } from "@/app/lib/constants";

const Map = ({
  selectedDay,
  selectedSection,
}: {
  selectedDay: number;
  selectedSection: string;
}) => {
  const section = SECTION_LIST.find((s) => s.section === selectedSection);

  return (
    <img
      src={section?.image}
      alt={section?.name}
      className="w-full h-full object-cover"
    />
  );
};

export default Map;
