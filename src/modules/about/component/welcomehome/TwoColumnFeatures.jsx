// components/TwoColumnFeatures.jsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export default function TwoColumnFeatures({ ContentImages }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#FBF8F6]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Header Section as the first slide or overlay? 
            User's design has a header. Let's make the header scrolling too or static?
            Let's put the header in the first frame or separate. 
            For now, I'll put the Main Header as a separate overlay or part of the flow *before* the horizontal scroll if possible without breaking the sticky.
            Actually, commonly the header is part of the flow before the horizontal section. 
            But to keep it simple with the ref, I'll include the header in the first 'panel' or before the sticky container if it's meant to scroll away.
            However, the request implies the *features* scroll horizontally. 
            I'll put the Header inside the first item or separate.
            
            Let's try a standard HorizontalScrollCarousel pattern.
            I will place the header absolute or just part of the first section effectively.
            Actually, let's keep the Header static at the start and then the items scroll.
        */}

        <motion.div style={{ x }} className="flex">
          {/* Intro / Header Panel */}
          <div className="w-screen h-screen flex flex-col justify-center items-center flex-shrink-0 px-6 lg:px-12 bg-[#FBF8F6]">
            <div className="text-center max-w-4xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="text-[#0f677d] text-xs tracking-[0.2em] uppercase font-sans font-medium mb-4"
              >
                Welcome Home
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.1 }}
                className="text-[#153f41] md:text-5xl text-3xl font-serif font-light leading-tight"
              >
                The Final Word in <br className="hidden md:block" /> Eco-Luxury Living
              </motion.h1>

            </div>
          </div>

          {/* Feature Slides */}
          {ContentImages.images.map((img) => (
            <div key={img.id} className="w-screen h-screen flex items-center justify-center flex-shrink-0 px-6 lg:px-20 bg-[#FBF8F6]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
                {/* TEXT */}
                <div className="space-y-5 text-left order-2 lg:order-1">
                  <h2 className="leading-tight text-[#173737] md:text-4xl text-2xl font-serif font-light">
                    {img.title}
                  </h2>
                  <p className="text-lg text-[#415d60] leading-relaxed max-w-xl font-light">
                    {img.description}
                  </p>
                </div>

                {/* IMAGE */}
                <div className="flex justify-end w-full h-[60vh] lg:h-[80vh] order-1 lg:order-2">
                  <div className="overflow-hidden bg-gray-200 shadow-xl w-full h-full rounded-2xl">
                    <picture>
                      {/* AVIF – best compression */}
                      <source srcSet={img.avif} type="image/avif" />

                      {/* WebP – fallback */}
                      <source srcSet={img.webp} type="image/webp" />

                      {/* PNG/JPG – universal fallback */}
                      <img
                        src={img.png}
                        alt={img.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}