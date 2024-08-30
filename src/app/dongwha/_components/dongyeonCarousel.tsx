'use client';
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { SelectedSnapDisplay, useSelectedSnapDisplay } from './SelectedSnap';

type PropType = {
  isAjouFesta: boolean;
};

const DONGBAK_SLIDE_COUNT = 7;
const FESTA_SLIDE_COUNT = 6;

const DongyeonCarousel = ({ isAjouFesta }: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({});
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(0);
    }
  }, [emblaApi, isAjouFesta]);

  return (
    <section className="embla_dongyeon flex items-center mx-auto">
      <div className="embla__viewport dongyeon" ref={emblaRef}>
        <div className="embla__container dongyeon flex items-center mx-auto">
          {new Array(isAjouFesta ? FESTA_SLIDE_COUNT : DONGBAK_SLIDE_COUNT)
            .fill(null)
            .map((_, index) => (
              <div
                className="relative embla__slide dongyeon flex flex-col items-center"
                key={index}
              >
                <Image
                  src={`/assets/carousel/${isAjouFesta ? 'donghwa' : 'dongbak'}${index + 1}.${isAjouFesta ? 'png' : 'jpeg'}`}
                  alt="이미지"
                  width={315}
                  height={315}
                />
              </div>
            ))}
        </div>
      </div>
      <SelectedSnapDisplay selectedSnap={selectedSnap} snapCount={snapCount} />
    </section>
  );
};

export default DongyeonCarousel;
