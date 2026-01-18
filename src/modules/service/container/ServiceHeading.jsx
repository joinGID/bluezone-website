"use client";

import React from "react";
import OutlineButton from "../../../shared/components/OutlineButton";
import { serviceHeadingContent } from "../constants/serviceHeadingConstants";
import { useRouter } from "next/navigation";

const ServiceHeading = () => {
  const { eyebrow, title, description, buttonLabel } = serviceHeadingContent;
  const router = useRouter();

  return (
    <section id="service-heading" className="bg-[#faf6f1] px-4 md:px-12 py-16 md:py-24">
      <div className="mx-auto max-w-7xl w-full flex flex-col md:flex-row md:items-end justify-between gap-10 md:gap-16">
        {/* LEFT: text content */}
        <div className="flex-1 space-y-6 max-w-4xl">
          {/* Small top label */}
          <p className="text-xs tracking-[0.25em] font-sans uppercase text-[#2b7a88] text-left">
            {eyebrow}
          </p>

          {/* Big heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-left font-serif font-semibold leading-tight text-[#16333a]">
            {title}
          </h2>

          {/* Description */}
          <p className="max-w-xl font-serif text-left text-sm sm:text-base font-light leading-relaxed text-slate-600">
            {description}
          </p>
        </div>

        {/* RIGHT: outline button - aligned to bottom-right on desktop, left on mobile */}
        {/* <div  className="flex-shrink-0 pb-2">
          <OutlineButton onClick={()=>router.push('/contact')} label={buttonLabel} className="hover:bg-black hover:text-white transition-colors duration-300" />
        </div> */}
      </div>
    </section>
  );
};

export default ServiceHeading;
