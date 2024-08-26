'use client';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const DongyeonButton = () => {
  const [isClicked, setIsClicked] = useState('dongari');

  const clickedStyle = 'bg-brown-500 border-[0.2rem]  text-white';
  const unClickedStyle =
    'bg-white text-brown-500 border-[0.2rem] border-solid border-brown-500';

  const handleClick = (buttonName: string) => {
    setIsClicked(buttonName);
  };

  const router = useRouter();
  return (
    <div className="w-[33.5rem] text-[1.6rem] flex justify-between items-end mb-[1.6rem]">
      <div
        className={`w-[16rem] h-[6.5rem] rounded-[1rem] pl-[1.4rem] py-[1rem] ${
          isClicked === 'dongari' ? clickedStyle : unClickedStyle
        }`}
        onClick={() => {
          handleClick('dongari');
          router.push('dongwha?category=events');
        }}
      >
        <p>동아리박람회</p>
        <p className="font-bold">이벤트 안내 </p>
      </div>
      <div
        className={`w-[16rem] h-[6.5rem] rounded-[1rem] pl-[1.4rem] py-[1rem] ${
          isClicked === 'ajouFesta' ? clickedStyle : unClickedStyle
        } `}
        onClick={() => {
          handleClick('ajouFesta');
          router.push('dongwha?category=ajouFesta');
        }}
      >
        <p>
          동화 <span className="font-bold">웹 바로가기</span>
        </p>
        <p className="font-bold">아이콘 추가 방법 </p>
      </div>
    </div>
  );
};

export default DongyeonButton;
