'use client';
import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import { EmblaOptionsType } from 'embla-carousel';
import ImageZoom from './ImageZoom';
import ImageCard from './ImageCard';
import SummaryModal from './SummaryModal';
import { DotButton, useDotButton } from './EmblaCarouselDotButtons';
import { Category } from '@/app/lib/types';
import { postSelectedImages } from '@/app/lib/data';

type CategoryCarouselProps = {
  slides: Category[];
  options?: EmblaOptionsType;
  categories: Record<Category, string[]>;
};

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({
  slides,
  options,
  categories,
}) => {
  const [selectedImages, setSelectedImages] = useState<
    Record<Category, string | null>
  >(
    slides.reduce(
      (acc, category) => {
        acc[category] = null;
        return acc;
      },
      {} as Record<Category, string | null>
    )
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [showSummary, setShowSummary] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [warningMessage, setWarningMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false); // 전송 성공 여부 상태 추가

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const handleImageSelect = (image: string, category: Category) => {
    setSelectedImages((prev) => ({ ...prev, [category]: image }));
    setZoomedImage(null);
  };

  const handleShowSummary = () => {
    const allSelected = slides.every(
      (category) => selectedImages[category] !== null
    );

    if (allSelected) {
      setShowSummary(true);
      setWarningMessage(null);
    } else {
      setWarningMessage('모든 카테고리에 대해 이미지를 선택해 주세요.');
    }
  };

  const handleSendResults = async () => {
    try {
      await postSelectedImages(selectedImages);
      setIsSubmitted(true);
      setIsSuccess(true); // 전송 성공 상태로 설정
    } catch (error) {
      console.error('전송 실패:', error);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col justify-center items-center h-screen" style={{ backgroundColor: 'inherit' }}>
        <h1 className="text-3xl font-bold text-white mb-4">
          잘 전송되었습니다~
        </h1>
        <div className="flex space-x-4">
          <button
            onClick={() => setIsSuccess(false)} 
            className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-400"
          >
            다시 선택하기
          </button>
          <Link href="/entire-map">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-400">
              지도로 가기
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((category, categoryIndex) => (
            <ImageCard
              key={categoryIndex}
              category={category}
              images={categories[category]}
              selectedImage={selectedImages[category]}
              onSelectImage={(image) => handleImageSelect(image, category)}
              onZoomImage={setZoomedImage}
            />
          ))}
        </div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
          />
        ))}
      </div>

      {zoomedImage && (
        <ImageZoom
          image={zoomedImage}
          onClose={() => setZoomedImage(null)}
          onSelect={() => handleImageSelect(zoomedImage, slides[selectedIndex])}
        />
      )}

      <div className="text-center mt-4">
        <button
          onClick={handleShowSummary}
          className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-400"
        >
          선택 완료
        </button>
        {warningMessage && (
          <p className="text-red-500 mt-2">{warningMessage}</p>
        )}
      </div>

      {showSummary && (
        <SummaryModal
          selectedImages={selectedImages}
          onClose={() => setShowSummary(false)}
          onSend={handleSendResults}
          isSubmitted={isSubmitted}
        />
      )}
    </section>
  );
};

export default CategoryCarousel;
