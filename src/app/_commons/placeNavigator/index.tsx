"use client";

import { Place } from "@/app/lib/types";
import { useRef, useEffect } from "react";
import NavigatorHandle from "@/public/navigator-handle.svg";
import NavigatorHandleArrow from "@/public/navigator-handle-arrow-left.svg";
import PlaceCard from "./placeCard";
import useSelectedLocationStore from "@/app/hooks/useSelectedLocationStore";
import { DONGBAK_LOCATIONS } from "@/app/lib/constants";
import { getLocationByPlace } from "@/app/lib/utils";
import useModalStore from "@/app/hooks/useModalStore";
import PlaceInfo from "../placeInfo";
import useIsOpenStore from "@/app/hooks/useIsOpenStore";

interface PlaceNavigatorProps {
  places: Place[];
  selectedDay: number;
  selectedSection: string;
}

const PlaceNavigator = ({
  places,
  selectedDay,
  selectedSection,
}: PlaceNavigatorProps) => {
  const { setPlace, setLocation } = useSelectedLocationStore();
  const { isNavOpen, setIsNavOpen, setIsDayOpen, setIsSectionBarOpen } =
    useIsOpenStore();
  const { openModal, setModalContent } = useModalStore();

  const divRef = useRef<HTMLDivElement>(null);
  let initialPosition = 0;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    initialPosition = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const newPosition = e.touches[0].clientX;
    const diffX = initialPosition - newPosition;

    if (initialPosition > window.innerWidth / 2 && diffX > 0) {
      divRef.current.style.transform = `translateX(calc(${-diffX}px - 79%))`;
    } else if (initialPosition < window.innerWidth / 2 && diffX < 0) {
      divRef.current.style.transform = `translateX(calc(${-diffX}px - 169%)`;
    }
  };

  const handleTouchEnd = () => {
    if (!divRef.current) return;

    if (divRef.current.getBoundingClientRect().left < window.innerWidth / 2) {
      setIsNavOpen(true);
      divRef.current.style.transform = "translateX(-169%)";
    } else {
      setIsNavOpen(false);
      divRef.current.style.transform = "translateX(-79%)";
    }
  };

  const handleClickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isNavOpen) {
      setIsDayOpen(false);
      setIsSectionBarOpen(false);
      setIsNavOpen(true);
      if (divRef.current) {
        divRef.current.style.transition = "transform 0.2s ease-out";
        divRef.current.style.transform = "translateX(-169%)";
      }
    } else {
      setIsNavOpen(false);
      if (divRef.current) {
        divRef.current.style.transition = "transform 0.2s ease-out";
        divRef.current.style.transform = "translateX(-79%)";
      }
    }
  };

  useEffect(() => {
    if (!isNavOpen) {
      if (divRef.current) {
        divRef.current.style.transition = "transform 0.2s ease-out";
        divRef.current.style.transform = "translateX(-79%)";
      }
    }
  }, [isNavOpen]);

  return (
    <div className={`z-20 absolute w-[19.7rem] h-full -right-full`}>
      <div
        className="relative flex justify-end w-full h-full transform translate-x-[-79%]"
        ref={divRef}
      >
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={handleClickHandle}
        >
          <NavigatorHandle className="mt-[1.6rem]" />
          <div className="absolute top-[2.9rem] left-[0.8rem]">
            <NavigatorHandleArrow
              className={`transform ${isNavOpen ? "rotate-0" : "rotate-180"}`}
            />
          </div>
        </div>
        <div
          className={`flex flex-col p-4 gap-4 items-center w-full bg-transparentBlue-300 overflow-y-auto ${
            isNavOpen ? "z-20" : "touch-none pointer-events-none"
          }`}
        >
          {places.map((place, index) => (
            <div
              key={index}
              onClick={() => {
                setPlace(place);
                setLocation(
                  // ❗️ 현재 동아리 박람회 페이지에서만 사용가능함 ❗️
                  getLocationByPlace(
                    place,
                    DONGBAK_LOCATIONS[selectedDay][selectedSection],
                  ),
                );
                setModalContent(<PlaceInfo place={place} />);
                openModal();
                setIsNavOpen(false);
                if (divRef.current) {
                  divRef.current.style.transition = "transform 0.2s ease-out";
                  divRef.current.style.transform = "translateX(-79%)";
                }
              }}
            >
              <PlaceCard place={place} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaceNavigator;
