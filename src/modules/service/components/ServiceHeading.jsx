"use client";

import React from "react";
import OutlineButton from "../../../shared/components/OutlineButton";
import { serviceHeadingContent } from "../constants/serviceHeadingConstants";

const ServiceHeading = () => {
  const { eyebrow, title, description, buttonLabel } = serviceHeadingContent;

  return (
    <section className="bg-[#faf6f1] px-2 sm:px-6 lg:px-12 py-16">
      <div className="mx-auto px-6 w-full flex flex-col gap-8 sm:flex-row sm:items-start">
        {/* LEFT: text content */}
        <div className="flex-1 space-y-6">
          {/* Small top label */}
          <p className="text-xs tracking-[0.25em] uppercase text-[#2b7a88] text-left">
            {eyebrow}
          </p>

          {/* Big heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-left font-serif font-semibold leading-tight text-[#16333a]">
            {title}
          </h2>

          {/* Description */}
          <p className="max-w-xl text-left text-sm sm:text-base leading-relaxed text-slate-600">
            {description}
          </p>
        </div>

        {/* RIGHT: outline button */}
        <div className="pt-38">
          <OutlineButton label={buttonLabel} className="hover:bg-black hover:text-white transition-colors duration-300"/>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeading;
