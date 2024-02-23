import Image from "next/image";
import {
  SECTION_LIST,
  PUB_LOCATIONS,
  BOOTH_LOCATIONS,
} from "@/app/lib/constants";
import { Place, PlaceLocation } from "@/app/lib/types";
import { getPlaceByLocation } from "@/app/lib/utils";
import MapIcon from "./mapIcon";

interface MapProps {
  selectedDay: number;
  selectedSection: string;
  places: Place[];
}

const Map = ({ selectedDay, selectedSection, places }: MapProps) => {
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
        sizes="(max-width: 60rem) 100vw, 40rem"
        priority
      />
      {places &&
        "pubId" in places[0] &&
        PUB_LOCATIONS[selectedDay][selectedSection] &&
        PUB_LOCATIONS[selectedDay][selectedSection].map(
          (location: PlaceLocation, index: number) => (
            <MapIcon
              key={location.location}
              placeLocation={location}
              place={getPlaceByLocation(places, location)}
            />
          ),
        )}
      {places &&
        "boothId" in places[0] &&
        BOOTH_LOCATIONS[selectedDay][selectedSection] &&
        BOOTH_LOCATIONS[selectedDay][selectedSection].map(
          (location: PlaceLocation, index: number) => (
            <MapIcon
              key={location.location}
              placeLocation={location}
              place={getPlaceByLocation(places, location)}
            />
          ),
        )}
    </div>
  );
};

export default Map;
