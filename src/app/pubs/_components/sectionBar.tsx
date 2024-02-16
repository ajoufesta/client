"use client";

import { SECTION_LIST } from "@/app/lib/constants";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQueryWithDefault } from "@/app/hooks/useQueryWithDefault";
import { useToggle } from "@/app/hooks/useToggle";

const SectionBar = ({
  selectedDay,
  selectedSection,
}: {
  selectedDay: number;
  selectedSection: string;
}) => {
  const { getQueryUrl } = useQueryWithDefault();
  const [isToggle, handleToggle] = useToggle();
  const router = useRouter();

  const [selectedIndex, setSelectedIndex] = useState(
    SECTION_LIST.findIndex((s) => s.section === selectedSection),
  );
  const maxIndex = SECTION_LIST.length - 1;

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
    handleToggle();
  };

  useEffect(() => {
    router.push(getQueryUrl(selectedDay, SECTION_LIST[selectedIndex].section));
  }, [selectedIndex]);

  return (
    <div className="z-10 absolute bottom-0 w-full">
      <div
        className={`bg-white absolute bottom-14 z-10 w-full h-80 rounded-t-xl overflow-y-auto bg-transparentWhite-200 ${
          isToggle ? "block" : "hidden"
        }`}
      >
        <ul>
          {SECTION_LIST.map((section, index) => (
            <li key={index}>
              <div
                className={
                  "px-10 py-4 text-lg text-blue-400 text-center font-normal hover:bg-blue-100 hover:text-blue-400 hover:font-semibold"
                }
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
      <div className="w-full h-14 flex flex-row justify-between items-center bg-transparentWhite-200 px-6 py-4">
        <img src="/entire-map.svg" alt="전체 지도" className="w-8" />
        <button onClick={() => handleClickLeft()}>
          <img src="/arrow-left.svg" alt="이전 섹션" />
        </button>
        <span className="w-36 font-normal text-xl text-center text-blue-400">
          {SECTION_LIST[selectedIndex].name}
        </span>
        <button onClick={() => handleClickRight()}>
          <img src="/arrow-left.svg" alt="다음 섹션" className="rotate-180" />
        </button>
        <button onClick={handleToggle}>
          <img src="/section-list.svg" alt="섹션 펼치기" />
        </button>
      </div>
    </div>
  );
};

export default SectionBar;
