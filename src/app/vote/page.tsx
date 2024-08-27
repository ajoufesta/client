import React from 'react';
import CategoryCarousel from './_components/CategoryCarousel';
import { EmblaOptionsType } from 'embla-carousel';

import './_components/embla.css';
import { categories } from '../lib/types';
import { CATEGORY_IMAGES } from '../lib/constants';
import { Metadata } from 'next';

const OPTIONS: EmblaOptionsType = {};

const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys()); 

export const metadata: Metadata = {
  title: 'Image Voting',
  description: 'Select the best image for each category',
};

const VotingPage = () => {
  return (
    <div>
      <CategoryCarousel
        slides={SLIDES.map((index) => categories[index])} 
        options={OPTIONS}
        categories={CATEGORY_IMAGES} 
      />
    </div>
  );
};

export default VotingPage;
