import React from "react";

import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

import "./base.css";
import "./sandbox.css";
import "./embla.css";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const Carousel: React.FC = () => (
  <main className="sandbox">
    <section className="sandbox__carousel">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  </main>
);
