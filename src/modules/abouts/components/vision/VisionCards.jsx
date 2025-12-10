// abouts/components/vision/VisionCards.jsx
"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const VisionCards = ({ card, index }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // CARD motion (slightly softer)
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);
  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 1, 1, 1, 0]
  );

  // IMAGE SCALING (zoom in on scroll)
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  // TEXT PARALLAX
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [-30, 0, 30]);

  return (
    <div
      ref={ref}
      className="sticky top-0 h-screen flex items-center justify-center"
      style={{
        paddingTop: `${index * 30}px`, // gap kuranju, stack 
      }}
    >
      <motion.article
        style={{ y, scale: cardScale, opacity }}
        className="relative w-full max-w-5xl overflow-hidden rounded-3xl 
                   bg-gradient-to-br from-white via-gray-50 to-gray-100
                   px-4 py-4 sm:px-6 sm:py-5 backdrop-blur will-change-transform
                   shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
      >
        <div className=" pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03),transparent_60%)]" />

        <div className="relative grid gap-4 sm:gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-center">
          {/* TEXT SIDE */}
          <motion.div
            style={{ y: textY }}
            className="space-y-3 will-change-transform"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-gray-700">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-black" />
              {card.tag}
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-black">
              {card.title}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {card.description}
            </p>
          </motion.div>

          {/* IMAGE SIDE */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 border border-gray-300">
            <motion.img
              src={card.image}
              alt={card.title}
              style={{ scale: imageScale }}
              className="h-full w-full object-cover will-change-transform origin-center"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/80 via-white/20 to-transparent" />
            <div className="absolute bottom-3 right-3 inline-flex items-center rounded-full border border-gray-400 bg-white/90 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-black backdrop-blur">
              {card.step}
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export default VisionCards;
