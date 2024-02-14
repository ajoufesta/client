import React from "react";

import Image from "next/image";

import ReservationIc from "../_assets/ReservationIcon.svg";
import ShowIc from "../_assets/showicon.svg";
import PubIcon from "../_assets/PubIcon.svg";

const Footer = () => {
  return (
    <div className="fixed bottom-0 h-footer w-full border border-black flex justify-center gap-10 ">
      <div className="flex flex-col items-center justify-center m-0 gap-2">
        <Image src="/boothIcon.svg" alt="펍아이콘" width={60} height={60} />
        <span className="text-[#CCDEF9] text-lg">공연</span>
      </div>
      <div className="flex flex-col items-center justify-center m-0 gap-2">
        <Image src={PubIcon} alt="부스아이콘" />
        <span className="text-[#CCDEF9] text-lg">부스</span>
      </div>
      <div className="flex flex-col items-center justify-center m-0 gap-2">
        <Image src={ReservationIc} alt="예약아이콘" />
        <span className="text-[#CCDEF9] text-lg">주점</span>
      </div>
      <div className="flex flex-col items-center justify-center m-0 gap-2">
        <Image src={ShowIc} alt="MY예약아이콘" />
        <span className="text-[#CCDEF9] text-lg">MY 예약</span>
      </div>
    </div>
  );
};

export default Footer;
