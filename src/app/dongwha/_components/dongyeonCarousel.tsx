"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
// import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
// import {
//   PrevButton,
//   NextButton,
//   usePrevNextButtons,
// } from "./EmblaCarouselArrowButtons";
import DongbakHr from "@/public/dongbakHr.svg";
import Dongbak from "../../../../public/dongbak1.jpeg";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const DongyeonCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  //   const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //     useDotButton(emblaApi);

  //   const {
  //     prevBtnDisabled,
  //     nextBtnDisabled,
  //     onPrevButtonClick,
  //     onNextButtonClick,
  //   } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla_dongyeon">
      <div className="embla__viewport dongyeon" ref={emblaRef}>
        <div className="embla__container dongyeon">
          {slides.map((index) => (
            <div className="relative embla__slide dongyeon" key={index}>
              <div className="absolute right-[1.5rem] top-[1.7rem] w-[7.3rem] h-[3.4rem] rounded-[5rem] bg-brown-500 text-center flex justify-center items-center text-[2rem] text-white">
                {index + 1} / 8
              </div>

              <Image
                src={`/dongbak${index + 1}.jpeg`}
                alt="df"
                width={335}
                height={335}
                className="donyeon_image"
              />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div> */}
      {/* </div> */}
    </section>
  );
};

export default DongyeonCarousel;
