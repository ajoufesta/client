import React from 'react';
import Image from 'next/image';

type ImageZoomProps = {
  image: string;
  onClose: () => void;
  onSelect: () => void;
};

const ImageZoom: React.FC<ImageZoomProps> = ({ image, onClose, onSelect }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center z-50">
      <div className="relative">
        <Image
          src={image}
          alt="Zoomed Image"
          width={600}
          height={600}
          className="rounded-lg"
        />
        <div className="flex justify-between mt-4">
          <button
            onClick={onSelect}
            className="bg-green-100 shadow-lg px-6 py-2 text-green-700 font-semibold text-lg rounded-xl hover:bg-green-200 transition-all duration-200 ease-in-out"
          >
            선택
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 shadow-lg px-6 py-2 text-white font-semibold text-lg rounded-xl hover:bg-gray-400 transition-all duration-200 ease-in-out"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageZoom;
