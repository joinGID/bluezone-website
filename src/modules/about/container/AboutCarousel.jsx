import React from 'react';

import AutoCarousel from '@/src/shared/components/carousle/AutoCarousel ';
import { aboutImages } from '../constants/homeConstants';


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