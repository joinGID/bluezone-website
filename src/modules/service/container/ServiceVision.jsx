"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import VisionCards from "../components/ServiceVisionCards";
import { visionCards } from "../constants/serviceVisionConstants";

const ServiceVision = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="vision"
      ref={containerRef}
      className="relative h-[400vh] bg-[#faf6f1] w-full text-black"
    >
      <main className="h-full ">
        {visionCards.map((card, i) => {
          // ithu aa video style logic
          const targetScale = 1 - (visionCards.length - (i + 1)) * 0.05;
          const start = i * 0.12; // scroll range start for this card
          const range = [start, 1];

          return (
            <VisionCards
              key={card.title}
              card={card}
              index={i}
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </section>
  );
};

export default ServiceVision;
