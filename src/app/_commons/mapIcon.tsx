"use client";

import { Place, PlaceLocation } from "@/app/lib/types";
import useModalStore from "@/app/hooks/useModalStore";
import PlaceInfo from "./placeInfo";
import useSelectedLocationStore from "../hooks/useSelectedLocationStore";
import UseNavigationStore from "../hooks/useNavigationStore";

const MapIcon = ({
  placeLocation,
  place,
}: {
  placeLocation: PlaceLocation;
  place: Place;
}) => {
  const { openModal, setModalContent } = useModalStore();
  const { setLocation, setPlace } = useSelectedLocationStore();
  const { setNavClose } = UseNavigationStore();

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
        setNavClose();
      }}
    >
      <span className="text-2xl font-bold">{placeLocation.location}</span>
    </div>
  );
};

export default MapIcon;
