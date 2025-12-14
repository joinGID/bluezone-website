"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, A11y, Mousewheel } from "swiper/modules";
import Image from "next/image";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

function Carousle({images}) {
  return (
        <div className="">
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
          0: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          480: {
            slidesPerView: 1.25,
            spaceBetween: 14,
          },
          640: {
            slidesPerView: 1.6,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 18,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
        }}
      >
        {images.map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
              <Image
                src={imgSrc}
                alt={`Room preview ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </SwiperSlide>
        ))}
        <div className="top-[50%] button-prev-slide  absolute z-10 group-hover:left-3 -left-[23rem] duration-500 text-white w-[40px] h-[40px] rounded-full bg-black/30 grid place-items-center">
          <HiOutlineArrowNarrowLeft />
        </div>
        <div className="top-[50%] button-next-slide absolute z-10 group-hover:right-3 -right-[23rem] duration-500 text-white w-[40px] h-[40px] rounded-full bg-black/30 grid place-items-center">
          <HiOutlineArrowNarrowRight />
        </div>
      </Swiper>
    </div>
  )
}

export default Carousle