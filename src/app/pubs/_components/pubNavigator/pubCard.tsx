import { Pub } from "@/app/lib/types";

const PubCard = ({ pub }: { pub: Pub }) => {
  return (
    <div className="w-[10rem] h-[7.5rem] relative bg-white rounded-lg">
      <div className="w-full h-full flex flex-col items-start p-3">
        <span className="test-sm font-bold text-blue-400">{pub.pubName}</span>
        <span className="text-xs text-blue-400 highlight">{pub.teamName}</span>
        <p className="mt-2 w-28 flex-shrink-0 text-[0.5rem] text-gray-400">
          {pub.description}
        </p>

        <span className="mt-2 w-28 flex-shrink-0 text-[0.5rem] text-blue-400">
          <span className="font-semibold mr-1">운영시간</span> {pub.pubHours[0]}{" "}
          ~ {pub.pubHours[1]}
        </span>
        {/* <img src={pub.menuImageSrc} alt="menu" /> */}

        <div className="absolute top-3 right-3 flex flex-col gap-1">
          <div className="w-[1.4rem] h-[1.4rem] rounded-full bg-blue-400 flex justify-center items-center">
            <span className="text-xs text-center font-bold text-white">
              {pub.pubLocation}
            </span>
          </div>
          <a href={pub.link} target="_blank" rel="noreferrer">
            <div className="w-[1.4rem] h-[1.4rem] rounded-full bg-gray-50 flex justify-center items-center"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PubCard;
