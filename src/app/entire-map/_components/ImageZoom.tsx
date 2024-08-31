import React from 'react';
import Image from 'next/image';

interface Props {
  zoomedImage: string;
  onClose: () => void;
}

const ImageZoom = ({ zoomedImage, onClose }: Props) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-50 px-[2rem]"
      onClick={onClose}
    >
      <div className="relative">
        <Image
          src={zoomedImage}
          alt="Zoomed Image"
          width={600}
          height={600}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageZoom;
