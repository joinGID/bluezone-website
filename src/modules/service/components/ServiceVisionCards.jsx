"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const ServiceVisionCards = ({ card, index }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Vertical movement only
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);

  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className="sticky top-0 h-screen flex items-center justify-center bg-[#faf6f1]"
    >
      <motion.article
        style={{ y }}
        className="w-full h-screen relative bg-[#faf6f1] overflow-hidden flex items-center justify-center will-change-transform"
      >
        {/* CENTERED CONTAINER */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 h-full bg-[#faf6f1]">
          {/* GRID LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full gap-8 md:gap-16 items-center">

            {/* TEXT COLUMN */}
            <div
              className={`
                flex flex-col justify-center items-start text-left
                space-y-6
                ${isReversed ? "md:order-2 md:pl-10" : "md:order-1 md:pr-10"}
              `}
            >
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-medium text-[#153f41] tracking-tight leading-tight">
                {card.title}
              </h2>

              <p className="text-sm sm:text-base md:text-lg font-sans text-neutral-600 font-light leading-relaxed tracking-wide max-w-lg">
                {card.description}
              </p>
            </div>

            {/* IMAGE COLUMN */}
            <div
              className={`
                relative h-[40vh] md:h-full w-full overflow-hidden rounded-xl md:rounded-none
                ${isReversed ? "md:order-1" : "md:order-2"}
              `}
            >
              <motion.img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </div>
      </motion.article>
    </div>
  );
};

export default ServiceVisionCards;
