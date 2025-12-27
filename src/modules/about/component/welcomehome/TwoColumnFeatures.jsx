// components/TwoColumnFeatures.jsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TwoColumnFeatures({ ContentImages }) {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#FBF8F6]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        <motion.div style={{ x }} className="flex">

          {/* ================= INTRO / HEADER PANEL ================= */}
          <div className="w-screen h-screen flex flex-col justify-center items-center flex-shrink-0 px-6 lg:px-12 bg-[#FBF8F6]">
            <div className="text-center max-w-4xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-aero text-[10px] md:text-xs tracking-[0.2em] uppercase font-sans font-medium mb-3 md:mb-4"
              >
                Welcome Home
              </motion.h2>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.1,
                }}
                className="text-habitat md:text-5xl text-3xl font-serif leading-tight px-4 md:px-0"
              >
                The Final Word in <br className="hidden md:block" /> Eco-Luxury Living
              </motion.h1>
            </div>
          </div>

          {/* ================= FEATURE SLIDES ================= */}
          {ContentImages.images.map((img) => (
            <div
              key={img.id}
              className="w-screen h-screen flex items-center justify-center flex-shrink-0 px-6 lg:px-20 bg-[#FBF8F6]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-7xl mx-auto">

                {/* -------- TEXT -------- */}
                <div className="space-y-4 md:space-y-5 text-center lg:text-left order-2 lg:order-1 px-2 md:px-0">
                  <h2 className="leading-tight text-habitat md:text-4xl text-2xl font-serif">
                    {img.title}
                  </h2>

                  {/* Desktop / Tablet Description */}
                  <p
                    className="
                      max-w-xl 
                      font-serif 
                      text-sm sm:text-base 
                      font-light 
                      leading-relaxed 
                      text-slate-600 
                      mx-auto lg:mx-0

                      text-left              /* mobile */
                      sm:text-justify         /* tablet+ */
                      hyphens-none            /* mobile */
                      sm:hyphens-auto         /* tablet+ */
                      hidden sm:block        /* Show on tablet+ */
                      whitespace-pre-line
                    "
                  >
                    {img.description}
                  </p>

                  {/* Mobile (SE and below) Description: removing last sentence & trailing dot */}
                  <p
                    className="
                      max-w-xl 
                      font-serif 
                      text-sm 
                      font-light 
                      leading-relaxed 
                      text-slate-600 
                      mx-auto 
                      text-left 
                      hyphens-none 
                      block sm:hidden       /* Show on mobile SE-sized devices */
                    "
                  >
                    {img.description.split('\n\n').slice(0, -1).join('. ')}
                  </p>
                </div>

                {/* -------- IMAGE -------- */}
                <div className="flex justify-center lg:justify-end w-full h-[45vh] lg:h-[80vh] order-1 lg:order-2">
                  <div className="overflow-hidden bg-gray-200 shadow-xl w-full h-full rounded-2xl">
                    <picture>
                      {/* AVIF */}
                      <source srcSet={img.avif} type="image/avif" />

                      {/* WebP */}
                      <source srcSet={img.webp} type="image/webp" />

                      {/* PNG / JPG fallback */}
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
