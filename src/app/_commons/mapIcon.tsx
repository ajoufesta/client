"use client";

import { Place, PlaceLocation } from "@/app/lib/types";
import useModalStore from "@/app/hooks/useModalStore";
import PlaceInfo from "./placeInfo";
import useSelectedLocationStore from "../hooks/useSelectedLocationStore";
import useIsOpenStore from "@/app/hooks/useIsOpenStore";
import { MapPinColor } from "../lib/constants";

const MapIcon = ({
  placeLocation,
  place,
}: {
  placeLocation: PlaceLocation;
  place: Place;
}) => {
  const { openModal, setModalContent } = useModalStore();
  const { setLocation, setPlace } = useSelectedLocationStore();
  const { setIsNavOpen, setIsSectionBarOpen, setIsDayOpen } = useIsOpenStore();

  return (
    <div
      className={`place-to-click z-10 ${
        "section" in place && MapPinColor[place.section][0]
      }`}
      style={{
        top: `${placeLocation.y * 0.1}rem`,
        left: `${placeLocation.x * 0.1}rem`,
      }}
      onClick={() => {
        setLocation(placeLocation);
        setPlace(place);
        setModalContent(<PlaceInfo place={place} />);
        openModal();
        setIsNavOpen(false);
        setIsDayOpen(false);
        setIsSectionBarOpen(false);
      }}
    >
      <span className="text-2xl rotate-45 font-bold text-white">
        {placeLocation.location.padStart(2, "0")}
      </span>
    </div>
  );
};

export default MapIcon;
