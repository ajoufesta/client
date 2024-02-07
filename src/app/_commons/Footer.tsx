import React from "react";

import Image from "next/image";

import BoothIc from "../_assets/BoothIcon.svg";
import ReservationIc from "../_assets/ReservationIcon.svg";
import ShowIc from "../_assets/showicon.svg";
import PubIcon from "../_assets/PubIcon.svg";

const Footer = () => {
  return (
    <div className="fixed bottom-0 h-footer w-full border border-black flex justify-center gap-10">
      <div className="flex flex-col items-center justify-center m-0 gap-2">
        <Image src={PubIcon} alt="펍아이콘" />
        <span>공연</span>
      </div>
      <div className="flex flex-col items-center justify-center m-0 gap-2">
        <Image src={BoothIc} alt="부스아이콘" />
        <span>부스</span>
      </div>
      <div className="flex flex-col items-center justify-center m-0 gap-2">
        <Image src={ReservationIc} alt="예약아이콘" />
        <span>주점</span>
      </div>
      <div className="flex flex-col items-center justify-center m-0 gap-2">
        <Image src={ShowIc} alt="MY예약아이콘" />
        <span>MY 예약</span>
      </div>
    </div>
  );
};

export default Footer;
