'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

import { DotButton } from './EmblaCarouselArrowsDotsButtons';
import Schedule from '../Schedule';
import { FESTIVAL_DATE } from '@/app/lib/constants';
import { getCurrentDay, isToday } from '@/app/lib/utils';
import { getFormattedDate } from '@/app/lib/utils';
import { Stage } from '@/app/lib/types';
import Image from 'next/image';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  stages: Stage[][];
};

const EmblaCarousel = ({ slides, options, stages }: PropType) => {
  const [day, setDay] = useState(1);
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  const handleNext = () => {
    scrollTo(
      selectedIndex + 1 > scrollSnaps.length
        ? scrollSnaps.length
        : selectedIndex + 1
    );
  };

  const handlePrev = () => {
    scrollTo(selectedIndex - 1 < 0 ? 0 : selectedIndex - 1);
  };

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', () => {
      const currentSlideIndex = emblaApi.selectedScrollSnap();
      setDay(currentSlideIndex + 1);
    });
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className={'flex flex-col h-full justify-center'}>
      <div className="flex flex-col justify-center items-center text-center">
        <span className="font-bold text-brown-300 text-[1.6rem] rounded-[3rem] bg-brown-600 mb-[1rem] py-[0.5rem] px-[1rem] flex justify-center items-center">
          {isToday(day) ? 'TODAY' : getFormattedDate(FESTIVAL_DATE[day - 1])}
        </span>
        <div className={'relative flex h-full'}>
          <Image
            src={'/assets/carousel/title-arrow.svg'}
            alt={'arrow'}
            width={12}
            height={20}
            onClick={handlePrev}
            className={`rotate-180 ${selectedIndex === 0 && 'invisible'}`}
          />
          <div className={'mx-[3rem]'}>
            <span className="text-brown-600 text-[2.8rem] font-bold ">
              {`DAY ${day}`}
            </span>
          </div>
          <Image
            src={'/assets/carousel/title-arrow.svg'}
            alt={'arrow'}
            width={12}
            height={20}
            onClick={handleNext}
            className={`${selectedIndex === scrollSnaps.length - 1 && 'invisible'}`}
          />
        </div>
      </div>
      <div className="embla flex flex-col">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide flex flex-col" key={index}>
                <Schedule
                  stages={stages[index]}
                  day={day}
                  isToday={isToday(index + 1)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => {
              scrollTo(index);
            }}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          >
            {index === selectedIndex ? (
              <Image
                src={'/assets/carousel/indicator-fill-dot.svg'}
                alt={'dot'}
                width={8}
                height={8}
              />
            ) : (
              <Image
                src={'/assets/carousel/indicator-dot.svg'}
                alt={'dot'}
                width={8}
                height={8}
              />
            )}
          </DotButton>
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
