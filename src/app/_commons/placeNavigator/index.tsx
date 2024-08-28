'use client';

import { Club, Place } from '@/app/lib/types';
import { useRef, useEffect, useState } from 'react';
import NavigatorHandle from '@/public/navigator-handle.svg';

import useSelectedLocationStore from '@/app/hooks/useSelectedLocationStore';
import { DONGBAK_LOCATIONS } from '@/app/lib/constants';
import { getLocationByPlace } from '@/app/lib/utils';
import useModalStore from '@/app/hooks/useModalStore';
import ClubInfo from '../clubInfo';
import useIsOpenStore from '@/app/hooks/useIsOpenStore';
import ClubCard from './clubCard';
import HandleArrowLeft from '@/public/handle-arrow-left.svg';
import { fetchDongbakBooths } from '@/app/lib/data';
import NavigatorHandleClosed from '@/public/navigator-handle-long.svg';

const PlaceNavigator = () => {
  const { setPlace, setLocation } = useSelectedLocationStore();
  const { isNavOpen, setIsNavOpen, setIsDayOpen, setIsSectionBarOpen } =
    useIsOpenStore();
  const { openModal, setModalContent } = useModalStore();
  const [places, setPlaces] = useState([]);

  const divRef = useRef<HTMLDivElement>(null);
  const initialPosition = 0;

  // const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
  //   initialPosition = e.touches[0].clientX;
  // };

  // const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
  //   if (!divRef.current) return;
  //   const newPosition = e.touches[0].clientX;
  //   const diffX = initialPosition - newPosition;

  //   if (initialPosition > window.innerWidth / 2 && diffX > 0) {
  //     divRef.current.style.transform = `translateX(calc(${-diffX}px - 77%))`;
  //   } else if (initialPosition < window.innerWidth / 2 && diffX < 0) {
  //     divRef.current.style.transform = `translateX(calc(${-diffX}px - 169%)`;
  //   }
  // };

  // const handleTouchEnd = () => {
  //   if (!divRef.current) return;

  //   if (divRef.current.getBoundingClientRect().left < window.innerWidth / 2) {
  //     setIsNavOpen(true);
  //     divRef.current.style.transform = "translateX(-169%)";
  //   } else {
  //     setIsNavOpen(false);
  //     divRef.current.style.transform = "translateX(-77%)";
  //   }
  // };

  const handleClickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isNavOpen) {
      setIsDayOpen(false);
      setIsSectionBarOpen(false);
      setIsNavOpen(true);
      if (divRef.current) {
        divRef.current.style.transition = 'transform 0.2s ease-out';
        divRef.current.style.transform = 'translateX(-166%)';
      }
    } else {
      setIsNavOpen(false);
      if (divRef.current) {
        divRef.current.style.transition = 'transform 0.2s ease-out';
        divRef.current.style.transform = 'translateX(-97%)';
      }
    }
  };
  useEffect(() => {
    async function fetchData() {
      const temPlaces = await fetchDongbakBooths(1, 'A');
      setPlaces(temPlaces);
    }

    fetchData();
  }, []);
  useEffect(() => {
    if (!isNavOpen) {
      if (divRef.current) {
        divRef.current.style.transition = 'transform 0.2s ease-out';
        divRef.current.style.transform = 'translateX(-97%)';
      }
    }
  }, [isNavOpen]);

  return (
    <div className={`z-20 absolute w-[19.7rem] h-full -right-full`}>
      <div
        className="relative flex justify-end w-full h-full transform translate-x-[-77%]"
        ref={divRef}
      >
        <div className="relative">
          {isNavOpen ? (
            <>
              <NavigatorHandle
                className="mt-[1.6rem]"
                onClick={handleClickHandle}
              />
              <HandleArrowLeft
                className={`absolute top-[3rem] left-3 ${'rotate-180'}`}
                onClick={handleClickHandle}
              />
            </>
          ) : (
            <>
              <NavigatorHandleClosed
                className="mt-[1.6rem] w-[60px]"
                onClick={handleClickHandle}
              />
              <div
                className={`absolute top-[2.5rem] left-4 cursor-pointer text-white font-bold text-lg`}
                onClick={handleClickHandle}
              >
                전체 부스
              </div>
            </>
          )}
        </div>
        <div
          className={`flex flex-col p-4 gap-4 items-center w-full bg-brown-500 overflow-y-auto ${
            isNavOpen ? 'z-20' : 'touch-none pointer-events-none'
          }`}
        >
          {places.map((place, index) => (
            <div
              key={index}
              onClick={() => {
                setPlace(place);
                setLocation(
                  // ❗️ 현재 동아리 박람회 페이지에서만 사용가능함 ❗️
                  getLocationByPlace(place, DONGBAK_LOCATIONS[1]['A'])
                );
                setModalContent(<ClubInfo boothId={1} />);
                openModal();
                setIsNavOpen(false);
                if (divRef.current) {
                  divRef.current.style.transition = 'transform 0.2s ease-out';
                  divRef.current.style.transform = 'translateX(-77%)';
                }
              }}
            >
              <ClubCard boothId={1} />
            </div>
          ))}
          <div className="h-32 mb-10">&nbsp;</div>
        </div>
      </div>
    </div>
  );
};

export default PlaceNavigator;
