import React from "react";
import { getCurrentDay } from "../lib/utils";

import EmblaCarousel from "./_components/stageCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

import "./_components/stageCarousel/embla.css";
import { fetchStageData } from "../lib/data";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

interface StagePageProps {
  searchParams?: {
    day?: number;
  };
}
const Page = ({ searchParams }: StagePageProps) => {
  const selectedDay = Number(searchParams?.day) || getCurrentDay(new Date());

  const fetchData = async () => {
    const pubs = await fetchStageData(selectedDay);
    return pubs;
  };

  // fetchData 함수를 실행하고 그 결과를 대기함
  const fetchAndRenderData = async () => {
    const stages = await fetchData();
    console.log(stages, "stages");

    return (
      <div className="flex flex-col justify-center items-center">
        <main className="sandbox">
          <section className="sandbox__carousel">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} stages={stages} />
          </section>
        </main>
      </div>
    );
  };

  return fetchAndRenderData();
};

export default Page;
