"use client";

import { useState, useMemo } from "react";
import { GalleryByType } from "../constants/GalleryImages";
import OutlineButton from "@/src/shared/components/OutlineButton ";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "interior", label: "Interior" },
  { key: "exterior", label: "Exterior" },
  { key: "architecture", label: "Architecture" },
];

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const imagesToShow = useMemo(() => {
    if (activeFilter === "all") {
      return Object.values(GalleryByType).flat();
    }
    return GalleryByType[activeFilter] ?? [];
  }, [activeFilter]);

  return (
   
<section className="h-[170vh] bg-[#F6F6F8] flex justify-center sm:px-8 lg:px-16 py-10">
      <div className="w-full max-w-8xl">

        {/* Filter Buttons */}
        <div className="mb-6 flex flex-wrap gap-3">
          {FILTERS.map((f) => {
            const active = f.key === activeFilter;
            return (
             <OutlineButton
  key={f.key}
  onClick={() => setActiveFilter(f.key)}
  className={
    active
      ? "!bg-black !text-white !border-black !hover:bg-black !hover:text-white"
      : ""
  }
  label={f.label}
/>

            );
          })}
        </div>

        {/* 3-column Grid (same layout as your first version) */}
        <div className="grid gap-6 md:grid-cols-3 auto-rows-[240px]">

          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {imagesToShow[0] && (
              <div className="relative overflow-hidden aspect-[4/3] rounded-xl bg-gray-200">
                {/* absolute image to ensure full-cover and fallback bg visible only if needed */}
                <img
                  src={imagesToShow[0].url}
                  alt={imagesToShow[0].name ?? "img-0"}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  draggable="false"
                />
              </div>
            )}

            {imagesToShow[1] && (
              <div className="relative overflow-hidden aspect-[4/5] rounded-xl bg-gray-200">
                <img
                  src={imagesToShow[1].url}
                  alt={imagesToShow[1].name ?? "img-1"}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  draggable="false"
                />
              </div>
            )}

            {imagesToShow[2] && (
              <div className="relative overflow-hidden aspect-[16/9] rounded-xl bg-gray-200">
                <img
                  src={imagesToShow[2].url}
                  alt={imagesToShow[2].name ?? "img-2"}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  draggable="false"
                />
              </div>
            )}
          </div>

          {/* CENTER COLUMN */}
          <div className="space-y-6">
            {imagesToShow[3] && (
              <div className="relative overflow-hidden aspect-[9/16] rounded-xl bg-gray-200">
                <img
                  src={imagesToShow[3].url}
                  alt={imagesToShow[3].name ?? "img-3"}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  draggable="false"
                />
              </div>
            )}

            {imagesToShow[4] && (
              <div className="relative overflow-hidden aspect-[4/3] rounded-xl bg-gray-200">
                <img
                  src={imagesToShow[4].url}
                  alt={imagesToShow[4].name ?? "img-4"}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  draggable="false"
                />
              </div>
            )}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {imagesToShow[5] && (
              <div className="relative overflow-hidden aspect-[16/9] rounded-xl bg-gray-200">
                <img
                  src={imagesToShow[5].url}
                  alt={imagesToShow[5].name ?? "img-5"}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  draggable="false"
                />
              </div>
            )}

            {imagesToShow[6] && (
              <div className="relative overflow-hidden aspect-[4/3] rounded-xl bg-gray-200">
                <img
                  src={imagesToShow[6].url}
                  alt={imagesToShow[6].name ?? "img-6"}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  draggable="false"
                />
              </div>
            )}

            {imagesToShow[7] && (
              <div className="relative overflow-hidden aspect-[8/10] rounded-xl bg-gray-200">
                <img
                  src={imagesToShow[7].url}
                  alt={imagesToShow[7].name ?? "img-7"}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  draggable="false"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}