"use client";
import { useState, useEffect } from "react";
import PlaceModal from "../../_commons/placeModal";

const FirstVisitPage = () => {
  const [isFirstVisit, setIsFirstVisit] = useState("");

  useEffect(() => {
    // 세션 스토리지에서 isFirstVisit 값을 가져옴
    const storedIsFirstVisit = sessionStorage.getItem("isFirstVisit");

    if (storedIsFirstVisit) {
      // 이미 방문한 적이 있으면 isFirstVisit 값을 false로 설정
      setIsFirstVisit("false");
    } else {
      // 첫 방문일 경우 세션 스토리지에 isFirstVisit 값을 저장
      sessionStorage.setItem("isFirstVisit", "true");
    }
  }, []);

  // isFirstVisit 값이 true일 경우에만 다른 페이지로 이동하는 UI를 렌더링
  if (isFirstVisit) {
    return (
      <div>
        이 페이지는 처음 방문하셨습니다. 다른 페이지로 이동하거나 이 페이지를
        새로고침해주세요.
      </div>
    );
  }

  // isFirstVisit 값이 false일 경우에는 기존의 데이터를 렌더링
  return <></>;
};

export default FirstVisitPage;
