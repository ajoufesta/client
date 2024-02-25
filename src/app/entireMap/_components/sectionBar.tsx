"use client";
import React from "react";
import { useRouter } from "next/navigation";
import EntireMapX from "../../../../public/entireMapX.svg";

const SectionBar = () => {
  const router = useRouter();
  return (
    <div>
      <div className="z-30 left-0 absolute bottom-0 w-full">
        <div
          className={`absolute bottom-[5rem] z-10 w-full rounded-t-2xl overflow-y-hidden bg-transparentWhite-300  transition-all duration-300 ease-in-out`}
        ></div>
        <div className="w-full h-[5rem] flex flex-row justify-between items-center bg-transparentWhite-200 px-[2.4rem] py-4">
          <span className="w-[13.8rem] font-normal text-3xl text-center text-blue-400">
            전체지도
          </span>

          <button
            onClick={() => {
              router.push("../dongbak?day=1");
            }}
          >
            <EntireMapX />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionBar;
