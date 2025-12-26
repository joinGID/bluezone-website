"use client";
import { useState, useMemo, useRef, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { GalleryByType } from "../constants/GalleryImages";
import { X } from "lucide-react";

const FILTERS = [
  { key: "interior", label: "Interior" },
  { key: "exterior", label: "Exterior" },
  { key: "additions", label: "Additions" },
];

const GalleryMediaItem = ({ mediaItem, onClick }) => {
  const [shouldLoad, setShouldLoad] = useState(false); // Triggered when near viewport
  const [contentReady, setContentReady] = useState(false); // Triggered when asset downloads
  const [isInView, setIsInView] = useState(false); // Triggered when strictly in viewport (for autoplay)
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const isVideo = mediaItem?.type === "video";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && !shouldLoad) {
          setShouldLoad(true);
        }
      },
      { rootMargin: "200px" }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [shouldLoad]);

  useEffect(() => {
    if (isVideo && videoRef.current) {
      if (isInView && contentReady) {
        videoRef.current.play().catch(() => { });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView, isVideo, contentReady]);

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className="break-inside-avoid relative overflow-hidden bg-gray-200 group  cursor-pointer mb-6 min-h-[350px]"
    >
      {/* Skeleton / Initial Background */}
      <div className={`absolute inset-0 bg-gray-300 animate-pulse transition-opacity duration-700  ${contentReady ? 'opacity-0' : 'opacity-100'}`} />

      {shouldLoad && (
        isVideo ? (
          <video
            ref={videoRef}
            src={mediaItem.src}
            loop
            muted
            playsInline
            onCanPlay={() => setContentReady(true)}
            className={`w-full h-auto object-cover transition-all duration-1000 ease-out group-hover:scale-105 
              ${contentReady ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-xl scale-110'}`}
          />
        ) : (
          <picture>
            {/* 1️⃣ AVIF (best compression, modern browsers) */}
            <source
              srcSet={mediaItem.avif}
              type="image/avif"
            />

            {/* 2️⃣ WebP (wide support) */}
            <source
              srcSet={mediaItem.webp}
              type="image/webp"
            />

            {/* 3️⃣ PNG / JPG fallback (guaranteed support) */}
            <img
              src={mediaItem.png}
              alt="Gallery Item"
              onLoad={() => setContentReady(true)}
              className={`w-full h-auto object-cover transition-all duration-1000 ease-out group-hover:scale-105
      ${contentReady
                  ? "opacity-100 blur-0 scale-100"
                  : "opacity-0 blur-xl scale-110"
                }`}
              loading="lazy"
            />
          </picture>

        )
      )}

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
    </div>
  );
};

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("interior");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isHidden, setIsHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Hide on scroll down, show on scroll up
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const imagesToShow = useMemo(() => {
    return GalleryByType[activeFilter] ?? [];
  }, [activeFilter]);

  const isVideo = (item) => item?.type === "video";

  return (
    <>
      <section className="min-h-screen h-auto bg-[#F6F6F8] flex flex-col items-center sm:px-8 lg:px-16 py-10 mt-20 relative">

        {/* Floating Sticky Filter Bar */}
        <motion.div
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: -100, opacity: 0 },
          }}
          animate={isHidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed top-22 md:top-28  z-40 w-full flex justify-center px-4"
        >
          <div className="bg-white/80 backdrop-blur-md border border-black/5 shadow-xl shadow-black/5 rounded-lg px-2 py-2 flex items-center gap-1">
            {FILTERS.map((f) => {
              const active = f.key === activeFilter;
              return (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`
                    px-6 py-2 rounded-sm text-xs uppercase tracking-widest font-medium transition-all duration-300
                    ${active
                      ? "bg-habitat text-white shadow-lg shadow-habitat/20"
                      : "text-sage hover:bg-black/5"
                    }
                  `}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="w-full max-w-8xl">
          {/* Dynamic Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 pt-14">
            {imagesToShow.map((item, index) => (
              <GalleryMediaItem
                key={index}
                mediaItem={item}
                onClick={() => setSelectedMedia(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Full Screen Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-[60] bg-black/75 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>

          <div
            className="relative max-w-6xl max-h-[90vh] w-full flex justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {isVideo(selectedMedia) ? (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="max-w-full max-h-[90vh] rounded-sm shadow-2xl"
              />
            ) : (
              <picture className="flex justify-center items-center w-full h-full">
                <source srcSet={selectedMedia.avif} type="image/avif" />
                <source srcSet={selectedMedia.webp} type="image/webp" />
                <img
                  src={selectedMedia.png}
                  alt="Full Screen View"
                  className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
                />
              </picture>
            )}
          </div>
        </div>
      )}
    </>
  );
}