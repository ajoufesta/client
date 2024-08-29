import { fetchGamePlayers } from '../lib/data';
import { dummyPlayers } from '../lib/placeholder-data';
import RefreshButton from './_components/refreshButton';
import PlayBackground from '@/public/assets/play/bg-play.svg';

import { Metadata } from 'next';
import CurrentDateDisplay from '@/app/_commons/currentDateDisplay';
import Rank from '@/app/play/_components/rank';

export const metadata: Metadata = {
  title: '권총사격',
  description: '권총사격 | 동화',
};

const PlayPage = async () => {
  const { players, currentTime } = await fetchGamePlayers();
  return (
    <div className="flex flex-col w-full h-full justify-between py-[3rem]">
      <div className={'flex flex-col gap-2.5'}>
        <CurrentDateDisplay />
        <h1 className="text-[2.4rem] text-brown-800 font-bold text-center">
          실시간 권총 사격 순위
        </h1>
        <div className="flex items-center gap-2.5 justify-center">
          <RefreshButton tag={'game'} />
          <span className="font-normal text-2xl text-brown-800">{`${currentTime} 기준`}</span>
        </div>
      </div>

      <div className="flex flex-col w-full justify-center h-full gap-[1.2rem] transform -translate-x-[2rem]">
        <Rank players={players.length === 0 ? dummyPlayers : players} />
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-[2rem] text-brown-600 font-bold text-center">
          권총사격 대회?
        </h2>
        <div className="w-full h-full px-[2.5rem] py-[1.7rem] flex flex-col justify-center items-center rounded-2xl text-xl text-brown-600 relative overflow-hidden gap-[0.8rem]">
          <div>
            <p className=" font-normal text-center text-[1.4rem]">
              권총사격대회에 참가하여 상품을 차지하세요!
            </p>
            <p className=" font-normal text-center text-[1.4rem]">
              순위 내에 들면 상품을 드립니다.
            </p>
          </div>
          <div className="flex flex-col items-start gap-[0.8rem]">
            <div className="flex justify-between items-center">
              <span className="font-bold text-brown-300 text-[1.2rem] rounded-[3rem] bg-brown-600 py-[0.3rem] px-[0.6rem] flex justify-center items-center w-fit">
                일시
              </span>
              <p className="text-brown-600 font-normal ml-2 text-[1.2rem]">
                9.2(월) - 9.3(화) 양일간 각각 17시까지
              </p>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-brown-300 text-[1.2rem] rounded-[3rem] bg-brown-600 py-[0.3rem] px-[0.6rem] flex justify-center items-center w-fit">
                장소
              </span>
              <p className="text-brown-600 font-normal ml-2 text-[1.2rem]">
                동아리연합회 본부 부스
              </p>
            </div>
          </div>
          <div className={'bg-brown-600 w-full h-full opacity-10 absolute'} />
          <div className="absolute bottom-0 w-[16rem] h-[0.4rem] bg-brown-600 rounded-full" />
        </div>
      </div>
      <PlayBackground
        className={'absolute w-full top-0 left-0 -z-20 top-[5rem]'}
      />
    </div>
  );
};

export default PlayPage;
