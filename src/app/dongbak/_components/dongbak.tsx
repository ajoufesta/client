"use client";
import { useEffect } from "react";
import useIsFirstVisitedStore from "@/app/hooks/useIsFirstVisited";
import EntireMap from "../../../../public/entireMap.svg";

const FirstVisitPage = () => {
  const { isFirstVisited, setVisited } = useIsFirstVisitedStore();

  useEffect(() => {
    console.log(isFirstVisited, "visi");
  }, []);

  // isFirstVisit 값이 true일 경우에만 다른 페이지로 이동하는 UI를 렌더링
  if (isFirstVisited) {
    return (
      <>
        <div className="relative w-[33.4rem] h-[49.9rem] overflow-hidden">
          <EntireMap className="absolute top-0 left-0 w-full h-full" />
          <div className="absolute inset-0 bg-white bg-opacity-70 flex justify-center items-center text-white">
            <div>
              <p className="flex flex-col justify-center items-center text-center text-[#005BE1] text-[2rem]">
                구역을 터치해서
                <br /> 이동해보세요
                <div
                  className="w-[5.7rem] h-[2.3rem] rounded-[5rem] bg-blue-400 text-white text-[1.4rem] mt-[3rem]"
                  onClick={() => setVisited()}
                >
                  확인
                </div>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <></>;
};

export default FirstVisitPage;
