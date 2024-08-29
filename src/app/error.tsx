'use client';

import { Metadata } from 'next';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '오류',
  description: '오류 페이지 | 동화',
};

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error('----', error.message);
  }, [error]);

  return (
    <>
      <div className={'flex justify-center'}>
        <Image
          src={'/logo-dongbak.png'}
          alt={'LogoDongbak'}
          width={123}
          height={77}
        />
      </div>
      <div className="text-[1.6rem] rounded-[3rem] bg-brown-600 mb-[1rem] py-[0.5rem] px-[1rem] flex justify-center items-center">
        <h1 className="text-3xl font-bold text-center text-brown-800">
          잠시 후 다시 시도해주세요.
        </h1>
      </div>
      <Link href="/entire-map">
        <button className="font-semibold bg-brown-800 text-600 rounded-md mt-4 px-4 py-2 text-2xl">
          전체지도로 보내드릴게요 !
        </button>
      </Link>
    </>
  );
}
