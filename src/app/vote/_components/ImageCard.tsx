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
      <h2 className="text-xl font-semibold mb-2 text-center">
        {CATEGORY_DISPLAYNAMES[category]}
      </h2>
      <div className="grid grid-cols-2 gap-4 p-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer rounded-lg overflow-hidden"
            onClick={() => onZoomImage(image)}
          >
            <Image
              src={image}
              alt={`Image ${index}`}
              width={150}
              height={150}
              className="rounded-lg"
            />

            {/* 오버레이: 선택된 이미지일 때 어둡게 */}
            {selectedImage === image && (
              <div className="absolute inset-0 bg-black opacity-50"></div>
            )}

            {/* 체크박스 */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                onSelectImage(image);
              }}
              className={`absolute top-2 right-2 w-6 h-6 rounded-full border-2 ${
                selectedImage === image
                  ? 'bg-black border-black'
                  : 'bg-white border-gray-300'
              } flex items-center justify-center transition-all duration-200 ease-in-out`}
            >
              {selectedImage === image && (
                <div className="w-3 h-3 bg-white rounded-full"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
