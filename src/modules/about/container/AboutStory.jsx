import React from 'react';
import Story from '../components/aboutstory/Story';

const AboutStory = () => {
  return (
    <section className="py-12 md:py-20 bg-[#f9f6f3]">
      <div className="container mx-auto px-4 text-[#153f41]">
        <h2 className="text-4xl md:text-6xl font-medium font-serif mb-6">Our Story</h2>
        <p className="text-base font-medium text-gray-600">
          From a love of the sea to a promise of serenity.
        </p>
      </div>
      <Story/>
    </section>
  );
};

export default AboutStory;
