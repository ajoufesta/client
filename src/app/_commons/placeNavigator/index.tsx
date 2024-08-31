'use client';

import { useRef, useEffect, useState } from 'react';
import NavigatorHandle from '@/public/navigator-handle.svg';

import useSelectedLocationStore from '@/app/hooks/useSelectedLocationStore';
import { getLocationByPlace } from '@/app/lib/utils';
import useModalStore from '@/app/hooks/useModalStore';
import ClubInfo from '../clubInfo';
import useIsOpenStore from '@/app/hooks/useIsOpenStore';
import ClubCard from './clubCard';
import HandleArrowLeft from '@/public/handle-arrow-left.svg';
import { fetchDongbakBooths } from '@/app/lib/data';
import NavigatorHandleClosed from '@/public/navigator-handle-long.svg';
import { Club } from '@/app/lib/types';

const PlaceNavigator = () => {
  const { setPlace, setLocation } = useSelectedLocationStore();
  const { isNavOpen, setIsNavOpen, setIsDayOpen, setIsSectionBarOpen } =
    useIsOpenStore();
  const { openModal, setModalContent } = useModalStore();
  const [places, setPlaces] = useState([]);

  const divRef = useRef<HTMLDivElement | null>(null);

  const handleClickHandle = () => {
    if (!isNavOpen) {
      setIsDayOpen(false);
      setIsSectionBarOpen(false);
      setIsNavOpen(true);
      if (divRef.current && 'style' in divRef.current) {
        divRef.current.style.transition = 'transform 0.2s ease-out';
        divRef.current.style.transform = 'translateX(-166%)';
      }
    } else {
      setIsNavOpen(false);
      if (divRef.current && 'style' in divRef.current) {
        divRef.current.style.transition = 'transform 0.2s ease-out';
        divRef.current.style.transform = 'translateX(-97%)';
      }
    }
  };

  useEffect(() => {
    async function fetchData() {
      const temPlaces = await fetchDongbakBooths();
      setPlaces(temPlaces);
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (!isNavOpen) {
      if (divRef.current && 'style' in divRef.current) {
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
        <div>
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
          className={`flex flex-col p-[1.3rem] gap-4 items-center w-full bg-brown-700 relative overflow-x-hidden overflow-y-auto ${
            isNavOpen ? 'z-20' : 'touch-none pointer-events-none'
          }`}
        >
          {places.map((place: Club, index) => (
            <div
              key={index}
              className={'w-full'}
              onClick={() => {
                console.log(place);
                setPlace(place);
                // setLocation({ location: '1', x: pin.x, y: pin.y });
                // setModalContent(<ClubInfo boothId={pin.boothId || 0} />);
                // openModal();
                setLocation(
                  // ❗️ 현재 동아리 박람회 페이지에서만 사용가능함 ❗️
                  getLocationByPlace(place.clubId)
                );
                setModalContent(<ClubInfo boothId={place.clubId} />);
                openModal();
                setIsNavOpen(false);
                if (divRef.current && 'style' in divRef.current) {
                  divRef.current.style.transition = 'transform 0.2s ease-out';
                  divRef.current.style.transform = 'translateX(-77%)';
                }
              }}
            >
              <ClubCard
                clubId={place.clubId}
                clubName={place.clubName}
                clubDetail={place.clubDetail}
                clubActivities={place.clubActivities}
                link={place.link}
                linkIconId={place.linkIconId}
                clubRepresentative={place.clubRepresentative}
                phoneNumber={place.phoneNumber}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaceNavigator;
