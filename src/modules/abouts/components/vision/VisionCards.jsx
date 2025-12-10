"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const VisionCards = ({ card, index }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Only position animation
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);

  
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className="sticky top-0 h-screen flex items-center justify-center "
    >
      <motion.article
        style={{ y }}
        className="w-screen h-screen relative bg-white overflow-hidden will-change-transform"
      >
        {/* 50% / 50% split, no overlay now */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 h-full w-full gap-6 md:gap-0">
      {/* TEXT SIDE */}
<div
  className={`
    flex flex-col justify-center h-full space-y-3
    ${isReversed ? "md:order-2" : "md:order-1"}
  `}
>

<h2 className="text-3xl md:text-5xl font-semibold text-[#153f41] leading-tight mb-4 font-serif">
  {card.title}
</h2>


  <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
    {card.description}
  </p>
</div>


          {/* IMAGE SIDE */}
          <div
            className={`
              relative h-full w-full overflow-hidden
              ${isReversed ? "md:order-1" : "md:order-2"}
            `}
          >
            <motion.img
              src={card.image}
              alt={card.title}
              className="h-full w-full object-cover bg-black"
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export default VisionCards;
