import React from 'react';
import Image from 'next/image';
import { Category } from '@/app/lib/types';
import { CATEGORY_DISPLAYNAMES } from '@/app/lib/constants';

type ImageCardProps = {
  category: Category;
  images: string[];
  selectedImage: string | null;
  onSelectImage: (image: string) => void;
  onZoomImage: (image: string) => void;
};

const ImageCard: React.FC<ImageCardProps> = ({
  category,
  images,
  selectedImage,
  onSelectImage,
  onZoomImage,
}) => {
  return (
    <div className="embla__slide flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-2 text-center">{CATEGORY_DISPLAYNAMES[category]}</h2>
      <div className="grid grid-cols-2 gap-4 p-4">
        {images.map((image, index) => (
          <div key={index} className="relative cursor-pointer" onClick={() => onZoomImage(image)}>
            <Image src={image} alt={`Image ${index}`} width={150} height={150} className="rounded-lg" />
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectImage(image);
              }}
              className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 mt-2 p-2 w-[85%] text-gray-800 font-semibold text-lg ${
                selectedImage === image ? 'bg-white border-2 border-gray-300 shadow-lg' : 'bg-white border-2 border-gray-200 shadow-md'
              } rounded-xl hover:bg-gray-100 transition-all duration-200 ease-in-out`}
            >
              {selectedImage === image ? '선택됨' : '선택'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
