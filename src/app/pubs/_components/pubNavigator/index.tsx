"use client";

import { Pub } from "@/app/lib/types";
import PubCard from "./pubCard";
import Image from "next/image";
import { useRef } from "react";
import NavigatorHandle from "@/public/navigator-handle.svg";
import NavigatorHandleArrow from "@/public/navigator-handle-arrow-left.svg";

type PubData = Pub[];

const PubNavigator = ({ pubs }: { pubs: PubData }) => {
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
      divRef.current.style.transform = `translateX(calc(${-diffX}px + 90%))`;
    } else if (initialPosition < window.innerWidth / 2 && diffX < 0) {
      divRef.current.style.transform = `translateX(calc(${-diffX}px)`;
    }
  };

  const handleTouchEnd = () => {
    if (!divRef.current) return;

    if (divRef.current.getBoundingClientRect().left < window.innerWidth / 2) {
      divRef.current.style.transform = "translateX(0)";
    } else {
      divRef.current.style.transform = "translateX(90%)";
    }
  };

  return (
    <div className="z-10 absolute w-[19.7rem] h-full right-0">
      <div
        className="relative flex justify-end w-full h-full transform translate-x-[90%]"
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
              className={`transform ${
                divRef.current?.style.transform === "translateX(90%)"
                  ? "rotate-0"
                  : "rotate-180"
              }`}
            />
          </div>
        </div>
        <div className="flex flex-col p-4 gap-4 items-center w-full bg-transparentBlue-300 overflow-y-auto">
          {pubs.map((pub, index) => (
            <PubCard key={index} pub={pub} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PubNavigator;
