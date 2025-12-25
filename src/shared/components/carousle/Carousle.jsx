"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, A11y, Mousewheel } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Carousle({ images = [] }) {
  return (
    <div className="relative">
      <Swiper
        className="relative group"
        modules={[Navigation, Pagination, A11y, Mousewheel]}
        spaceBetween={30}
        slidesPerView={2.4}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: true,
        }}
        speed={800}
        threshold={5}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 12 },
          480: { slidesPerView: 1.25, spaceBetween: 14 },
          640: { slidesPerView: 1.6, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 18 },
          1024: { slidesPerView: 2.5, spaceBetween: 20 },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[50vh] md:h-[55vh] overflow-hidden rounded-xl bg-gray-200">
              <picture>
                {/* BEST FORMAT */}
                {img.avif && (
                  <source srcSet={img.avif} type="image/avif" />
                )}

                {/* FALLBACK */}
                {img.webp && (
                  <source srcSet={img.webp} type="image/webp" />
                )}

                {/* GUARANTEED */}
                <img
                  src={img.png}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </picture>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation */}
        <div className="button-prev-slide absolute top-1/2 -translate-y-1/2 -left-[23rem] group-hover:left-3 z-10 duration-500 text-white w-10 h-10 rounded-full bg-black/30 grid place-items-center cursor-pointer">
          <IoIosArrowBack />
        </div>

        <div className="button-next-slide absolute top-1/2 -translate-y-1/2 -right-[23rem] group-hover:right-3 z-10 duration-500 text-white w-10 h-10 rounded-full bg-black/30 grid place-items-center cursor-pointer">
          <IoIosArrowForward />
        </div>
      </Swiper>
    </div>
  );
}

export default Carousle;
