import { Pub } from "@/app/lib/types";
import Image from "next/image";

const PubInfo = ({ pub }: { pub: Pub }) => {
  return (
    <div className="w-64 h-40 flex-shrink-0 bg-white border border-blue-400 rounded-xl p-5 relative">
      <h1 className="block text-lg leading-4 font-bold text-blue-400">
        {pub.pubName}
      </h1>
      <span className="text-sm font-normal text-blue-400 highlight">
        {pub.teamName}
      </span>
      <p className="mt-1 w-44 text-[0.7rem] font-normal text-gray-300 overflow-auto">
        {pub.description}
      </p>
      <div className="absolute bottom-4 w-[calc(100%-32px)] h-5 flex justify-between items-center">
        <div className="w-12 h-5 flex justify-center items-center rounded-xl bg-blue-100">
          <span className="table-cell align-middle text-center text-xs font-semibold text-blue-400 ">
            운영중
          </span>
        </div>
        <div className="w-auto flex justify-between items-center">
          <span className="align-middle text-center text-xs font-semibold text-blue-400 mr-2">
            예약하기
          </span>
          <Image
            src="/blue-right-arrow.svg"
            width={4}
            height={6}
            alt="arrow-right"
          />
        </div>
      </div>

      <div className="absolute top-4 right-4 flex flex-col gap-1">
        <div className="w-6 h-6 rounded-full bg-blue-400 flex justify-center items-center">
          <span className="text-sm text-center font-bold text-white">
            {pub.pubLocation}
          </span>
        </div>
        <a href={pub.link} target="_blank" rel="noreferrer">
          <div className="w-6 h-6 rounded-full bg-gray-50 flex justify-center items-center"></div>
        </a>
      </div>
    </div>
  );
};

export default PubInfo;
