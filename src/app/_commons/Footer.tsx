"use client";

import React, { useState } from "react";
import BoothIc from "../../../public/boothIcon.svg";
import PubIc from "../../../public/pubIcon.svg";
import ReservationIc from "../../../public/reservationIcon.svg";
import ShowIc from "../../../public/showIcon.svg";
import Link from "next/link";

const Footer = () => {
  const [selectedButton, setSelectedButton] = useState("");

  const handleClick = (buttonName: string) => {
    setSelectedButton(buttonName === selectedButton ? "" : buttonName);
  };

  return (
    <div className="fixed bottom-0 h-footer w-full flex justify-center gap-10 ">
      <Link
        href={`http://localhost:3000/1`}
        className={`flex flex-col items-center justify-center m-0 gap-2 ${
          selectedButton === "공연" ? "" : "opacity-50"
        }`}
        onClick={() => handleClick("공연")}
      >
        <BoothIc />
        <span className="text-[#CCDEF9] text-lg">공연</span>
      </Link>
      <Link
        href={`http://localhost:3000/booths/1/A`}
        className={`flex flex-col items-center justify-center m-0 gap-2 ${
          selectedButton === "부스" ? "" : "opacity-50"
        }`}
        onClick={() => handleClick("부스")}
      >
        <PubIc />
        <span className="text-[#CCDEF9] text-lg">부스</span>
      </Link>
      <Link
        href={`http://localhost:3000/pubs/1`}
        className={`flex flex-col items-center justify-center m-0 gap-2 ${
          selectedButton === "주점" ? "" : "opacity-50"
        }`}
        onClick={() => handleClick("주점")}
      >
        <ReservationIc />
        <span className="text-[#CCDEF9] text-lg">주점</span>
      </Link>
      <div
        className={`flex flex-col items-center justify-center m-0 gap-2 ${
          selectedButton === "MY 예약" ? "" : "opacity-50"
        }`}
        onClick={() => handleClick("MY 예약")}
      >
        <ShowIc />
        <span className="text-[#CCDEF9] text-lg">MY 예약</span>
      </div>
    </div>
  );
};

export default Footer;
