'use client';
import React from 'react';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const DongyeonButton = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isAjouFesta, setIsAjouFesta] = useState(
    searchParams.get('category') === 'ajouFesta'
  );

  const handleClick = (isClickAjouFesta: boolean) => {
    setIsAjouFesta(isClickAjouFesta);
    router.push(
      `dongwha?category=${isClickAjouFesta ? 'ajouFesta' : 'events'}`
    );
  };

  return (
    <div className="flex w-full gap-3.5 mb-3.5">
      <div
        className={`w-full h-[6.5rem] rounded-2xl bg-brown-600 flex justify-center align-middle text-center ${isAjouFesta && 'opacity-60'}`}
        onClick={() => handleClick(false)}
      >
        <p className="font-bold text-2xl text-brown-300 content-center">
          동아리박람회
          <br />
          이벤트 안내
        </p>
      </div>
      <div
        className={`w-full h-[6.5rem] rounded-2xl bg-brown-600 flex justify-center align-middle text-center ${isAjouFesta || 'opacity-60'}`}
        onClick={() => handleClick(true)}
      >
        <p className="font-bold text-2xl text-brown-300 content-center">
          동화 웹 바로가기
          <br />
          아이콘 추가방법
        </p>
      </div>
    </div>
  );
};

export default DongyeonButton;
