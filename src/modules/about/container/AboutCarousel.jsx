import React from 'react';

import AutoCarousel from '@/src/shared/components/carousel/AutoCarousel';
import { aboutImages } from '../constants/homeConstants';


const AboutCarousel = () => {
  const heading = "evolura";
  const content = (
    <div className="flex flex-col items-center gap-6 max-w-5xl">
      <h1 className="text-4xl md:text-7xl font-serif font-medium leading-tight">
        THE HEART OF <br /> COMMUNITY LIFE
      </h1>
      <p className="text-lg md:text-xl font-light tracking-wide max-w-2xl opacity-90">
        Where connections, wellness, and leisure blend seamlessly into modern
        living.
      </p>
      <div className="mt-6 py-3 px-8 border border-white/30 rounded-full backdrop-blur-sm bg-white/5">
        <p className="text-xs md:text-sm tracking-[0.2em] uppercase font-medium">
          “ Second Largest Clubhouse in Kerala ”
        </p>
      </div>
    </div>
  );
  return (
    <section>
      <AutoCarousel images={aboutImages} heading={heading} content={content} />
    </section>
  );
};

export default AboutCarousel;