import React from "react";
import { galleryImage } from "../../home/constants/homeConstants";
import Carousle from "@/src/shared/components/carousle/Carousle ";
import OutlineButton from "@/src/shared/components/OutlineButton ";

function PhotoGalleryHeader() {
  return (
    <div className="bg-[#f9f6f3] md:py-20 py-10">
      <div className="mx-auto max-w-7xl px-4 md:px-12 py-10 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="text-left w-full md:w-3/5">
          <h2 className="text-[#0f677d] text-xs tracking-[0.2em] uppercase font-sans font-medium mb-3">
            Photo Gallery
          </h2>
          <h2 className="text-[#153f41] md:text-5xl text-3xl font-serif font-light leading-tight">
            Blue zone Moments <br className="hidden md:block" /> Captured
          </h2>
          <p className="mt-6 text-slate-600 font-serif text-sm sm:text-base font-light leading-relaxed max-w-xl">
            Experience the harmony of architecture and comfort through visuals of
            bright, welcoming spaces designed to elevate everyday living.
          </p>
        </div>
        <div className="flex-shrink-0 pb-2">
          <OutlineButton
            label="Explore All Images"
            className="hover:bg-[#153f41]!"
          />
        </div>
      </div>
      <Carousle images={galleryImage} />
    </div>
  );
}

export default PhotoGalleryHeader;
