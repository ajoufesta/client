"use client";

import useIsFirstStore from "@/app/hooks/useIsFirstStore";
import { useRouter } from "next/navigation";
import EntireMap from "@/public/entire-map.svg";
import Exit from "@/public/exit.svg";

const UnderBar = () => {
  const router = useRouter();
  const { cameFromSection } = useIsFirstStore();

  return (
    <>
      <div className="absolute w-full h-full">
        <div className="absolute bottom-0 w-full h-[5rem] flex flex-row justify-between items-center bg-transparentWhite-200 px-[2.4rem] py-4 z-10">
          <EntireMap />
          <span className="w-[13.8rem] font-normal text-3xl text-center text-blue-400">
            전체지도
          </span>
          <div>
            <button
              onClick={router.back}
              className={`flex flex-col items-center justify-center ${
                cameFromSection === true ? "visible" : "invisible"
              }`}
            >
              <Exit />
              <span className="text-blue-400">돌아가기</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnderBar;
