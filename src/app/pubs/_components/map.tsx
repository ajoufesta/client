import Image from "next/image";
import PubIcon from "./pubIcon";
import { SECTION_LIST, PUB_LOCATIONS } from "@/app/lib/constants";
import { Pub, PubLocation } from "@/app/lib/types";
import { getPubByLocation } from "@/app/lib/utils";

const Map = ({
  selectedDay,
  selectedSection,
  pubs,
}: {
  selectedDay: number;
  selectedSection: string;
  pubs: Pub[];
}) => {
  const section = SECTION_LIST.find((s) => s.section === selectedSection);

  if (!section) {
    return null;
  }

  if (![1, 2, 3].includes(selectedDay)) {
    return null;
  }

  return (
    <div className="w-full h-full relative">
      <Image
        src={section.image}
        alt={section.name}
        fill={true}
        sizes="(max-width: 600px) 100vw, 400px"
        priority
      />
      {PUB_LOCATIONS[selectedDay][selectedSection] &&
        PUB_LOCATIONS[selectedDay][selectedSection].map(
          (location: PubLocation, index: number) => (
            <PubIcon
              key={location.location}
              pubLocation={location}
              pub={getPubByLocation(pubs, location)}
            />
          ),
        )}
    </div>
  );
};

export default Map;
