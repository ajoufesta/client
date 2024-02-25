"use client";

import { Place, PlaceLocation } from "@/app/lib/types";
import useModalStore from "@/app/hooks/useModalStore";
import PlaceInfo from "./placeInfo";
import useSelectedLocationStore from "../hooks/useSelectedLocationStore";
import useIsOpenStore from "@/app/hooks/useIsOpenStore";

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
      className="place-to-click z-10"
      style={{
        top: `${placeLocation.y * 0.1}rem`,
        left: `${placeLocation.x * 0.1}rem`,
        transform: `rotate(${placeLocation.rotate}deg)`,
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
      <span className="text-2xl font-bold">{placeLocation.location}</span>
    </div>
  );
};

export default MapIcon;
