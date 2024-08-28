'use client';

import React from 'react';

const UnderBar = () => {
  return (
    <>
      <div className="absolute bottom-0 w-full h-[5rem] flex flex-row justify-center items-center bg-transparentWhite-200 border-t-2 px-[2.4rem] py-4 z-10 border-brown-500 backdrop-blur-sm">
        <span className="w-[13.8rem] font-semibold text-3xl text-center text-brown-500">
          전체지도
        </span>
      </div>
    </>
  );
};

export default UnderBar;
