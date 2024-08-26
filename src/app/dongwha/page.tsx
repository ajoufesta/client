import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import DongyeonCarousel from './_components/dongyeonCarousel';
import DongyeonButton from './_components/DongyeonButton';

import './_components/embla.css';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '동아리연합회',
  description: '동아리연합회 | 동화',
};

interface DonghwaPageProps {
  searchParams?: {
    category?: 'events' | 'ajouFesta';
  };
}

const page = ({ searchParams }: DonghwaPageProps) => {
  const category = searchParams?.category || 'events';
  const OPTIONS: EmblaOptionsType = {};

  return (
    <>
      <div className={'flex justify-center mb-10'}>
        <Image
          src={'/logo-dongbak.png'}
          alt={'LogoDongbak'}
          width={123}
          height={77}
        />
      </div>
      <DongyeonButton />
      <div className="flex flex-col justify-center items-center w-full h-[33.5rem]">
        <main className="relative bg-white rounded-[20px] flex justify-center w-full h-full shadow-carousel-container">
          <DongyeonCarousel
            options={OPTIONS}
            isAjouFesta={category === 'ajouFesta'}
          />
          <hr className="absolute bottom-0 h-[0.4rem] w-[15.9rem] bg-brown-700 rounded-[1rem]" />
        </main>
      </div>
    </>
  );
};

export default page;
