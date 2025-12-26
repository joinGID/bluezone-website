"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function HorizontalScrollGallery({ images = [],bottomText="Blue Zone Moments" }) {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    // Smooth scroll progress for a more "premium" feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Calculate the horizontal movement (x)
    // We move based on how many images we have. 
    // Each card is roughly 80vw on mobile and 45vw on desktop
    const x = useTransform(
        smoothProgress,
        [0, 1],
        ["0%", `-${(images.length - 1) * 85}%`] // Fallback/Mobile calculation
    );

    // Desktop specific transform (if needed, but we can stick to one dynamic one)
    const xDesktop = useTransform(
        smoothProgress,
        [0, 1],
        ["0%", `-${(images.length - 1) * 50}%`]
    );

    // Background title parallax
    const titleX = useTransform(smoothProgress, [0, 1], ["0%", "-30%"]);

    return (
        <section
            ref={sectionRef}
            className={`relative bg-white`}
            style={{ height: `${images.length * 100}vh` }} // Dynamic height based on images
        >
            {/* Sticky viewport */}
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

                {/* Background Decorative Text */}
                <motion.div
                    style={{ x: titleX }}
                    className="absolute top-1/2 left-0 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] whitespace-nowrap"
                >
                    <h1 className="text-[20vw] md:text-[30vw] font-serif uppercase leading-none tracking-tighter">
                        Gallery Gallery Gallery
                    </h1>
                </motion.div>

                {/* Gallery Content */}
                <div className="relative z-10">
                    <motion.div
                        style={{ x: typeof window !== 'undefined' && window.innerWidth > 768 ? xDesktop : x }}
                        className="flex gap-10 md:gap-20 px-10 md:px-[10vw]"
                    >
                        {images.map((img, index) => {
                            // Individual item scale animation based on progress
                            // This creates a nice "focus" effect as each item passes through
                            return (
                                <GalleryCard
                                    key={index}
                                    img={img}
                                    index={index}
                                    total={images.length}
                                />
                            );
                        })}
                    </motion.div>
                </div>

                {/* Bottom Progress UI */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-md px-10 flex flex-col gap-4 items-center">
                    <div className="w-full h-[2px] bg-black/5 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-black"
                            style={{ scaleX: smoothProgress, transformOrigin: "left" }}
                        />
                    </div>
                    <div className="flex justify-between w-full text-[10px] uppercase tracking-[0.2em] font-medium text-black/40">
                        <span>{bottomText}</span>
                        <div className="flex gap-2">
                            <span className="text-black">01</span>
                            <span>/</span>
                            <span>{String(images.length).padStart(2, '0')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function GalleryCard({ img, index, total }) {
    const cardRef = useRef(null);

    // Use independent scroll tracking for each card for parallax within the card
    const { scrollYProgress: cardVisible } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(cardVisible, [0, 0.5, 1], [0.95, 1, 0.95]);
    const opacity = useTransform(cardVisible, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

    return (
        <motion.div
            ref={cardRef}
            style={{ scale, opacity }}
            className="relative min-w-[300px] w-[80vw] md:w-[45vw] h-[50vh] md:h-[60vh] flex-shrink-0 group"
        >
            <div className="w-full h-full overflow-hidden rounded-2xl bg-gray-100 shadow-2xl shadow-black/5 ring-1 ring-black/5">
                <picture>
                    {img?.avif && <source srcSet={img.avif} type="image/avif" />}
                    {img?.webp && <source srcSet={img.webp} type="image/webp" />}
                    <motion.img
                        src={img.png}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                    />
                </picture>

                {/* Soft overlay */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />

                {/* Slide Number Indicator */}
                <div className="absolute top-6 right-6 flex items-center gap-3">
                    <div className="h-[1px] w-8 bg-white/30" />
                    <span className="text-white font-serif text-lg opacity-80 italic">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
