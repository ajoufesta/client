"use client";

import React, { useState } from "react";
import BoothIc from "@/public/boothIcon.svg";
import PubIc from "@/public/pubIcon.svg";
import ReservationIc from "@/public/reservationIcon.svg";
import ShowIc from "@/public/showIcon.svg";

import IconHr from "@/public/iconHr.svg";
import Link from "next/link";
import { useEffect } from "react";

const Footer = () => {
  const [selectedButton, setSelectedButton] = useState("");

  const handleClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  useEffect(() => {
    // console.log(selectedButton, "button");
  }, [selectedButton]);

  return (
    <div className="absolute bottom-0 w-full ">
      <hr className="relative border-t-2 border-blue-700" />
      <div className="h-footer w-full flex justify-center items-center gap-10 px-[2.6rem]">
        <Link
          href={`/stage`}
          className={`flex flex-col flex-1 items-center justify-center m-0 gap-2 ${
            selectedButton === "공연" ? "" : "opacity-50"
          }`}
          onClick={() => handleClick("공연")}
        >
          {selectedButton === "공연" && <IconHr className="absolute top-0" />}
          <BoothIc />
          <span className="text-[#CCDEF9] text-lg">공연</span>
        </Link>
        <Link
          href={`/booths?day=1&section=seongho1`}
          className={`flex flex-col flex-1 items-center justify-center m-0 gap-2 ${
            selectedButton === "부스" ? "" : "opacity-50"
          }`}
          onClick={() => handleClick("부스")}
        >
          {selectedButton === "부스" && <IconHr className="absolute top-0" />}
          <PubIc />
          <span className="text-[#CCDEF9] text-lg">부스</span>
        </Link>
        <Link
          href={`/pubs?day=1&section=seongho1`}
          className={`flex flex-col flex-1 items-center justify-center m-0 gap-2 ${
            selectedButton === "주점" ? "" : "opacity-50"
          }`}
          onClick={() => handleClick("주점")}
        >
          {selectedButton === "주점" && <IconHr className="absolute top-0" />}
          <ReservationIc />
          <span className="text-[#CCDEF9] text-lg">주점</span>
        </Link>
        <Link
          href={`/dongbak?day=1&section=A`}
          className={`flex flex-col flex-1 items-center justify-center m-0 gap-2 ${
            selectedButton === "동박" ? "" : "opacity-50"
          }`}
          onClick={() => handleClick("동박")}
        >
          {selectedButton === "동박" && <IconHr className="absolute top-0" />}
          <ShowIc />
          <span className="text-[#CCDEF9] text-lg">동박</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
