'use client';

import React from 'react';
import Image from 'next/image';
import CloseButton from './CloseButton';

type ImageZoomProps = {
  image: string;
  onClose: () => void;
  onSelect: () => void;
};

const ImageZoom: React.FC<ImageZoomProps> = ({ image, onClose, onSelect }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center z-50">
      <div className="relative">
        <Image src={image} alt="Zoomed Image" width={600} height={600} className="rounded-lg" />
        <CloseButton onClick={onClose} />
        <div className="text-center mt-4">
          <button
            onClick={onSelect}
            className="bg-white border-2 border-gray-300 shadow-lg px-6 py-2 text-gray-800 font-semibold text-lg rounded-xl hover:bg-gray-100 transition-all duration-200 ease-in-out"
          >
            이 사진으로 선택
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageZoom;
