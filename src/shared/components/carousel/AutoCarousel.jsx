"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AutoCarousel = ({ images, heading, content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex, images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden group">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
            <div className="relative w-full h-full">
                <img
                    src={images[currentIndex].image}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                />
                 {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30" />
                
                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                    <h2 
                        className="text-sm md:text-lg uppercase tracking-[0.2em] font-light mb-4"
                    >
                        {heading}
                    </h2>
                    <h1 
                        className="text-5xl md:text-8xl font-serif font-medium"
                    >
                        {content}
                    </h1>
                </div>
            </div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative h-1.5 rounded-full overflow-hidden transition-all duration-300 ${
              index === currentIndex ? "w-12 bg-white/30" : "w-1.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex && (
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, ease: "linear" }}
                className="absolute top-0 left-0 h-full bg-white"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;
