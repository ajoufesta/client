import React from "react";
import EmblaCarousel from "../stage/_components/stageCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import DongyeonCarousel from "./_components/dongyeonCarousel";

import "./_components/embla.css";

const page = () => {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 8;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div>
      {" "}
      <div className="flex flex-col justify-center items-center h-[33.5rem]">
        <main className="bg-white w-[33.5rem] h-[33.5rem] rounded-[1.5rem]">
          <section className="sandbox__carousel">
            <DongyeonCarousel slides={SLIDES} options={OPTIONS} />
          </section>
        </main>
      </div>
    </div>
  );
};

export default page;
