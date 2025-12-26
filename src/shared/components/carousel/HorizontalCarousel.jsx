"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function HorizontalScrollGallery({ images = [], bottomText = "Blue Zone Moments" }) {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [progress, setProgress] = useState(0);

    // Check for mobile view
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Desktop Scroll Tracking
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    // Mobile Scroll Tracking (Native Horizontal)
    const handleMobileScroll = (e) => {
        if (!isMobile) return;
        const target = e.target;
        const scrollProgress = target.scrollLeft / (target.scrollWidth - target.clientWidth);
        setProgress(scrollProgress);
    };

    // Smooth scroll progress for desktop
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Final progress value used for UI (Desktop spring vs Mobile native)
    const finalProgress = isMobile ? progress : smoothProgress;

    // Desktop transforms
    const xDesktop = useTransform(smoothProgress, [0, 1], ["0%", `-${(images.length - 1) * 50}%`]);
    const titleX = useTransform(smoothProgress, [0, 1], ["0%", "-30%"]);

    return (
        <section
            ref={sectionRef}
            className={`relative bg-bone ${isMobile ? 'h-auto py-12' : ''}`}
            style={{ height: isMobile ? 'auto' : `${images.length * 100}vh` }}
        >
            {/* Sticky viewport for Desktop */}
            <div className={`${isMobile ? 'relative' : 'sticky top-0 h-screen overflow-hidden flex flex-col justify-center'}`}>

                {/* Background Decorative Text (Desktop Only for better performance) */}
                {!isMobile && (
                    <motion.div
                        style={{ x: titleX }}
                        className="absolute top-1/2 left-0 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] whitespace-nowrap"
                    >
                        <h1 className="text-[20vw] md:text-[30vw] font-serif uppercase leading-none tracking-tighter">
                            Gallery Gallery Gallery
                        </h1>
                    </motion.div>
                )}

                {/* Gallery Content */}
                <div className="relative z-10 w-full">
                    {isMobile ? (
                        /* Mobile Native Scroll */
                        <div
                            ref={containerRef}
                            onScroll={handleMobileScroll}
                            className="flex gap-6 px-6 overflow-x-auto snap-x snap-mandatory no-scrollbar"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {images.map((img, index) => (
                                <div key={index} className="min-w-[85vw] snap-center">
                                    <GalleryCardMobile img={img} index={index} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* Desktop Animated Scroll */
                        <motion.div
                            style={{ x: xDesktop }}
                            className="flex gap-10 md:gap-20 px-10 md:px-[10vw]"
                        >
                            {images.map((img, index) => (
                                <GalleryCard
                                    key={index}
                                    img={img}
                                    index={index}
                                    total={images.length}
                                />
                            ))}
                        </motion.div>
                    )}
                </div>

                {/* Bottom Progress UI */}
                <div className={`
                    ${isMobile ? 'mt-10 mx-auto' : 'absolute bottom-12 left-1/2 -translate-x-1/2'} 
                    w-full max-w-md px-10 flex flex-col gap-4 items-center
                `}>
                    <div className="w-full h-[2px] bg-habitat/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-habitat"
                            style={{
                                scaleX: finalProgress,
                                transformOrigin: "left"
                            }}
                        />
                    </div>
                    <div className="flex justify-between w-full text-[10px] uppercase tracking-[0.2em] font-medium text-habitat/40">
                        <span>{bottomText}</span>
                        <div className="flex gap-2">
                            <span className="text-habitat">
                                {isMobile ? String(Math.round(progress * (images.length - 1)) + 1).padStart(2, '0') : "01"}
                            </span>
                            <span>/</span>
                            <span>{String(images.length).padStart(2, '0')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Mobile specific card (simplified for performance)
function GalleryCardMobile({ img, index }) {
    return (
        <div className="relative w-full h-[50vh] rounded-2xl overflow-hidden bg-gray-100 shadow-xl shadow-black/5">
            <picture>
                {img?.avif && <source srcSet={img.avif} type="image/avif" />}
                {img?.webp && <source srcSet={img.webp} type="image/webp" />}
                <img
                    src={img.png}
                    alt={`Gallery mobile image ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </picture>
            <div className="absolute top-4 right-4 text-white font-serif text-sm italic opacity-80">
                {String(index + 1).padStart(2, '0')}
            </div>
        </div>
    );
}

// Desktop card (with animations)
function GalleryCard({ img, index }) {
    const cardRef = useRef(null);
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
            className="relative min-w-[300px] w-[45vw] h-[60vh] flex-shrink-0 group"
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
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
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
