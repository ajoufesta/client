"use client";

import { DONGBAK_SECTION_LIST } from "@/app/lib/constants";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQueryWithDefault } from "@/app/hooks/useQueryWithDefault";
import EntireMap from "@/public/entire-map.svg";
import ArrowLeft from "@/public/arrow-left.svg";
import SectionList from "@/public/section-list.svg";
import useIsOpenStore from "../hooks/useIsOpenStore";
import useIsFirstVisitedStore from "../hooks/useIsFirstVisited";

const SectionBar = ({
  selectedDay,
  selectedSection,
}: {
  selectedDay: number;
  selectedSection: string;
}) => {
  const { getQueryUrl } = useQueryWithDefault();
  const { isSectionBarOpen, setIsSectionBarOpen, setIsNavOpen, setIsDayOpen } =
    useIsOpenStore();
  const router = useRouter();
  const { isFirstVisited, setVisited } = useIsFirstVisitedStore();

  const [selectedIndex, setSelectedIndex] = useState(
    DONGBAK_SECTION_LIST.findIndex((s) => s.section === selectedSection)
  );
  const maxIndex = DONGBAK_SECTION_LIST.length - 1;

  const handleClickLeft = () => {
    if (selectedIndex === 0) {
      setSelectedIndex(maxIndex);
    } else {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleClickRight = () => {
    if (selectedIndex === maxIndex) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handleClickSection = (index: number) => {
    setSelectedIndex(index);
    setIsSectionBarOpen(!isSectionBarOpen);
  };

  useEffect(() => {
    router.push(
      getQueryUrl(selectedDay, DONGBAK_SECTION_LIST[selectedIndex].section)
    );
  }, [selectedDay, selectedIndex]);

  return (
    <>
      {!isFirstVisited && (
        <div className="z-30 absolute bottom-0 w-full">
          <div
            className={`absolute bottom-[5rem] z-10 w-full rounded-t-2xl overflow-y-hidden bg-transparentWhite-300 ${
              isSectionBarOpen ? "h-[20rem]" : "h-0"
            } transition-all duration-300 ease-in-out`}
          >
            <ul>
              {DONGBAK_SECTION_LIST.map((section, index) => (
                <li key={index}>
                  <div
                    className={`w-full py-[1.5rem] text-2xl text-blue-400 text-center font-normal hover:bg-blue-100 hover:text-blue-400 hover:font-semibold ${
                      index === selectedIndex
                        ? "bg-blue-200 font-semibold pointer-events-none"
                        : ""
                    }`}
                    onClick={() => handleClickSection(index)}
                  >
                    {section.name}
                  </div>
                  <div
                    className={`w-full h-[0.25px] bg-gray-50 ${
                      index !== maxIndex ? "block" : "hidden"
                    }`}
                  ></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full h-[5rem] flex flex-row justify-between items-center bg-transparentWhite-200 px-[2.4rem] py-4">
            <EntireMap />
            <button onClick={() => handleClickLeft()}>
              <ArrowLeft />
            </button>
            <span className="w-[13.8rem] font-normal text-3xl text-center text-blue-400">
              {DONGBAK_SECTION_LIST[selectedIndex]?.name}
            </span>
            <button onClick={() => handleClickRight()}>
              <ArrowLeft className="rotate-180" />
            </button>
            <button
              onClick={() => {
                setIsSectionBarOpen(!isSectionBarOpen);
                setIsNavOpen(false);
                setIsDayOpen(false);
              }}
            >
              <SectionList />
            </button>
          </div>
        </div>
      )}

      {isFirstVisited && (
        <div className="z-30 absolute bottom-0 w-full">
          <div
            className={`absolute bottom-[5rem] z-10 w-full rounded-t-2xl overflow-y-hidden bg-transparentWhite-300 ${
              isSectionBarOpen ? "h-[20rem]" : "h-0"
            } transition-all duration-300 ease-in-out`}
          ></div>
          <div className="w-full h-[5rem] flex flex-row justify-between items-center bg-transparentWhite-200 px-[2.4rem] py-4">
            <EntireMap />

            <span className="w-[13.8rem] font-normal text-3xl text-center text-blue-400">
              전체지도
            </span>

            <button
              onClick={() => {
                setIsSectionBarOpen(!isSectionBarOpen);
                setIsNavOpen(false);
                setIsDayOpen(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M6.24316 6.24316L15.3242 15.3242"
                  stroke="#005BE1"
                  stroke-width="2"
                />
                <path
                  d="M15.3242 6.24316L6.24314 15.3242"
                  stroke="#005BE1"
                  stroke-width="2"
                />
                <circle
                  cx="10.5"
                  cy="10.5"
                  r="9.5"
                  stroke="#005BE1"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionBar;
