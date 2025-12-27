import React from 'react';

import AutoCarousel from '@/src/shared/components/carousel/AutoCarousel';
import { aboutImages } from '../constants/homeConstants';


const AboutCarousel = () => {
  const heading = "sanctuary";
  const content = (
    <div className="flex flex-col items-center gap-6 max-w-5xl">
      <h1 className="text-4xl md:text-7xl font-serif font-medium leading-tight">
        WHERE ELEGANCE <br /> MEETS SERENITY
      </h1>
      <p className="text-lg md:text-xl font-light tracking-wide max-w-2xl opacity-90">
        A curated collection of sustainable villas designed to offer a
        peaceful escape without compromising on modern luxury.
      </p>
      <div className="mt-6 py-3 px-8 border border-white/30 rounded-full backdrop-blur-sm bg-white/5">
        <p className="text-xs md:text-sm tracking-[0.2em] uppercase font-medium">
          “ Architectural Excellence in Harmony with Nature ”
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