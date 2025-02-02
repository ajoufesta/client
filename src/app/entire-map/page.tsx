import Image from 'next/image';
import { Metadata } from 'next';
import MapWithPin from '@/app/entire-map/_components/map';
import PlaceModal from '@/app/_commons/placeModal';
import React from 'react';

export const metadata: Metadata = {
  title: '전체지도',
  description: '전체지도 | 동화',
};

const EntireMapPage = () => {
  // day가 쿼리스트링으로 넘어오지 않으면 오늘 날짜로 설정
  // // const selectedDay = Number(searchParams?.day) || getCurrentDay(new Date());

  // if (selectedDay === -1) {
  //   return <div>Invalid Date</div>;
  // }

  return (
    <div
      className={
        'flex flex-col w-full h-full items-center align-middle justify-center gap-10'
      }
    >
      <div className={'flex justify-center'}>
        <Image
          src={'/logo-dongbak.png'}
          alt={'LogoDongbak'}
          width={123}
          height={77}
        />
      </div>
      <div className="flex mt-2 w-[33.5rem] h-[49.9rem] flex-col items-center justify-center rounded-3xl overflow-hidden relative shadow-md">
        <MapWithPin />
        <PlaceModal />
      </div>
    </div>
  );
};

export default EntireMapPage;
