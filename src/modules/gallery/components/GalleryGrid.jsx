"use client";

import { GalleryImages } from "../constants/GalleryImages.jsx";



export default function GalleryGrid() {
  return (
    <section className="h-[150vh] w-full bg-white flex  justify-center  sm:px-8 lg:px-16 py-10">
      <div className="w-full max-w-8xl">

        <div className="grid gap-6 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[260px]">

          {/* LEFT */}
          <div className="space-y-6">
            <div className="relative overflow-hidden  aspect-[4/3]">
              <img src={GalleryImages.whiteVilla} className="h-full w-full object-cover" />
            </div>

            <div className="relative overflow-hidden  aspect-[4/5]">
              <img src={GalleryImages.minimalHouse} className="h-full w-full object-cover" />
            </div>

             <div className="relative overflow-hidden  aspect-[16/9]">
              <img src={GalleryImages.cityNightscape} className="h-full w-full object-cover" />
            </div>
          </div>

          {/* CENTER */}
          <div className="space-y-6">
            <div className="relative overflow-hidden  aspect-[9/16]">
              <img src={GalleryImages.stairsTower} className="h-full w-full object-cover" />
            </div>

            <div className="relative overflow-hidden  aspect-[3.6/3]">
              <img src={GalleryImages.grayFacade} className="h-full w-full object-cover" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* Top */}
            <div className="relative overflow-hidden  aspect-[16/9]">
              <img src={GalleryImages.modernCourtyard} className="h-full w-full object-cover" />

            </div>

            <div className="relative overflow-hidden   aspect-[4/3]">
              <img src={GalleryImages.cityNightscape} className="h-full w-full object-cover" />
            </div>

            {/* Bottom */}
            <div className="relative overflow-hidden  aspect-[8/10]">
              <img src={GalleryImages.luxuryBathroom} className="h-full w-full object-cover" />
            </div>
          </div>

        </div>

        <div className="mt-6 flex justify-end">
          <div className="inline-flex items-center gap-2 rounded-full bg-black text-white text-xs px-3 py-1">
            <span className="inline-block h-2 w-2 rounded-full bg-white" />
            <span>Made in Framer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
