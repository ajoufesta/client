"use client";
import { useState, useEffect } from "react";
import PlaceModal from "../../_commons/placeModal";
import useIsFirstVisitedStore from "@/app/hooks/useIsFirstVisited";
import EntireMap from "../../../../public/entireMap.svg";

const FirstVisitPage = () => {
  const { isFirstVisited } = useIsFirstVisitedStore();

  useEffect(() => {
    console.log(isFirstVisited, "visi");
  }, []);

  // isFirstVisit 값이 true일 경우에만 다른 페이지로 이동하는 UI를 렌더링
  if (isFirstVisited) {
    return (
      <div className="z-100 bg-white">
        <button>확인</button>
        이 페이지는 처음 방문하셨습니다. 다른 페이지로 이동하거나 이 페이지를
        새로고침해주세요.lkjlkjl
        <EntireMap />
      </div>
    );
  }

  // isFirstVisit 값이 false일 경우에는 기존의 데이터를 렌더링
  return <></>;
};

export default FirstVisitPage;
