'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { VOTE_IMAGES } from '@/app/lib/constants';
import ImageZoom from '@/app/vote/_components/ImageZoom';
import { postSelectedImages } from '@/app/lib/data';
import Link from 'next/link';

const ImageCard = () => {
  const [zoomedImage, setZoomedImage] = useState(0); // 0 : defaultIamgeId
  const [selectedId, setSelectedId] = useState(0); // 0 : defaultIamgeId
  const [isVoted, setIsVoted] = useState(false);

  const handleImageSelect = (id: number) => {
    setSelectedId(id);
    setZoomedImage(0);
  };

  const handleSendResults = async () => {
    try {
      await postSelectedImages(selectedId);
      setIsVoted(true);
    } catch (error) {
      setIsVoted(false);
      console.error('전송 실패:', error);
    }
  };

  if (isVoted) {
    return (
      <div
        className="flex flex-col justify-center items-center h-screen"
        style={{ backgroundColor: 'inherit' }}
      >
        <h1 className="text-3xl font-bold text-white mb-4">
          {isVoted
            ? '투표에 참여해주셔서 감사합니다!'
            : '오류가 발생했습니다! 다시 시도해주세요.'}
        </h1>
        <div className="text-center mt-4">
          <Link href="/entire-map">
            <button
              className={`bg-brown-600 px-10 py-4 text-brown-300 font-semibold text-xl rounded-xl ${selectedId > 0 || 'opacity-50'}`}
            >
              지도로 돌아가기
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="text-[1.6rem] rounded-[3rem] bg-brown-600 mb-[1rem] py-[0.5rem] px-[1rem] flex justify-center items-center">
        <h1 className="text-3xl font-bold text-center text-brown-800">
          동아리 활동을 제일 잘 담은 사진은?
        </h1>
      </div>
      <div className="w-full h-full pt-4 pb-8 flex flex-col items-center justify-center relative rounded-[1.2rem] bg-white px-[1.2rem] overflow-hidden">
        <div className=" w-full h-full grid grid-cols-2 gap-4">
          {VOTE_IMAGES.map((vote, index) => (
            <div
              key={index}
              className="relative cursor-pointer rounded-lg overflow-hidden h-full"
              onClick={() => setZoomedImage(vote.id)}
            >
              <Image
                src={vote.src}
                alt={`Image ${index}`}
                fill
                className="rounded-lg object-cover object-center"
              />

              {selectedId === vote.id && (
                <div className="absolute inset-0 bg-black opacity-50"></div>
              )}

              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedId(vote.id);
                }}
                className={`absolute top-2 right-2 w-6 h-6 rounded-full bg-white flex items-center justify-center transition-all duration-200 ease-in-out overflow-hidden p-1`}
              >
                {selectedId === vote.id && (
                  <div className="w-full h-full bg-green-500 rounded-full content-center"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-4">
        <button
          onClick={handleSendResults}
          className={`bg-brown-600 px-10 py-4 text-brown-300 font-semibold text-xl rounded-xl ${selectedId > 0 || 'opacity-50'}`}
        >
          투표
        </button>
      </div>

      {zoomedImage > 0 && (
        <ImageZoom
          imageId={zoomedImage}
          onClose={() => setZoomedImage(0)}
          onSelect={() => handleImageSelect(zoomedImage)}
        />
      )}
    </>
  );
};

export default ImageCard;
