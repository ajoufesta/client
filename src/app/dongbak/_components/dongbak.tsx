"use client";
import { useEffect } from "react";
import useIsFirstVisitedStore from "@/app/hooks/useIsFirstVisited";
import EntireMap from "../../../../public/entireMap.svg";
import { useState } from "react";

const FirstVisitPage = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };
  return (
    <>
      <div className="relative w-[33.4rem] h-[49.9rem] overflow-hidden">
        <EntireMap className="absolute top-0 left-0 w-full h-full" />
        {isVisible && (
          <div className="absolute inset-0 bg-white bg-opacity-70 flex justify-center items-center text-white">
            <div>
              <div className="flex flex-col justify-center items-center text-center text-[#005BE1] text-[2rem]">
                구역을 터치해서
                <br /> 이동해보세요
                <div
                  className="w-[5.7rem] h-[2.3rem] rounded-[5rem] bg-blue-400 text-white text-[1.4rem] mt-[3rem] cursor-pointer"
                  onClick={handleClick}
                >
                  확인
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FirstVisitPage;
