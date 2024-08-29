import React from 'react';
import Image from 'next/image';
import { VOTE_IMAGES } from '@/app/lib/constants';

type ImageZoomProps = {
  imageId: number;
  onClose: () => void;
  onSelect: () => void;
};

const ImageZoom: React.FC<ImageZoomProps> = ({
  imageId,
  onClose,
  onSelect,
}) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-50 px-[2rem]"
      onClick={onClose}
    >
      <div className="relative">
        <Image
          src={VOTE_IMAGES.find((vote) => vote.id === imageId)!.src}
          alt="Zoomed Image"
          width={600}
          height={600}
          className="rounded-lg"
        />
        <div className="mt-4">
          <button
            onClick={onSelect}
            className="bg-brown-600 px-10 py-4 text-brown-300 font-semibold text-2xl rounded-xl w-full"
          >
            선택
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageZoom;
