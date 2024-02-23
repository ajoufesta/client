"use client";

import { Place, PlaceLocation } from "@/app/lib/types";
import useModalStore from "@/app/hooks/useModalStore";
import PlaceInfo from "./placeInfo";

const MapIcon = ({
  placeLocation,
  place,
}: {
  placeLocation: PlaceLocation;
  place: Place;
}) => {
  const { openModal, setModalContent } = useModalStore();

  return (
    <div
      className="place-to-click z-10"
      style={{
        top: `${placeLocation.y * 0.1}rem`,
        left: `${placeLocation.x * 0.1}rem`,
        transform: `rotate(${placeLocation.rotate}deg)`,
      }}
      onClick={() => {
        setModalContent(<PlaceInfo place={place} />);
        openModal();
      }}
    >
      <span className="text-2xl font-bold">{placeLocation.location}</span>
    </div>
  );
};

export default MapIcon;
