"use client";

import { Place } from "@/app/lib/types";
import { useEffect, useRef, useState } from "react";
import NavigatorHandle from "@/public/navigator-handle.svg";
import NavigatorHandleArrow from "@/public/navigator-handle-arrow-left.svg";
import PlaceCard from "./placeCard";

const PlaceNavigator = ({ places }: { places: Place[] }) => {
  const [isOpen, setIsOpen] = useState(false);
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
      setIsOpen(true);
      divRef.current.style.transform = "translateX(-169%)";
    } else {
      setIsOpen(false);
      divRef.current.style.transform = "translateX(-79%)";
    }
  };

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
        >
          <NavigatorHandle className="mt-[1.6rem]" />
          <div className="absolute top-[2.9rem] left-[0.8rem]">
            <NavigatorHandleArrow
              className={`transform ${isOpen ? "rotate-0" : "rotate-180"}`}
            />
          </div>
        </div>
        <div
          className={`flex flex-col p-4 gap-4 items-center w-full bg-transparentBlue-300 overflow-y-auto ${
            isOpen ? "z-20" : "touch-none pointer-events-none"
          }`}
        >
          {places.map((place, index) => (
            <PlaceCard key={index} place={place} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaceNavigator;
