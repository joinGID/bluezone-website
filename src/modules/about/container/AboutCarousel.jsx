import React from 'react';
import { aboutImages } from '../constants/homeConstants';
import AutoCarousel from '@/src/shared/components/carousel/AutoCarousel ';

const AboutCarousel = () => {
    const heading = "About";
    const  content= "Your Home by the Ocean";
  return (
    <section>
   <AutoCarousel images={aboutImages} heading={heading} content={content}/>
    </section>
  );
};

export default AboutCarousel;
