"use client";

import React, { useState } from "react";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left cursor-pointer"
      >
        <span className="text-xl font-medium text-[#153f41]">{title}</span>

        {/* Smooth rotating icon */}
        <span
          className={`text-[#153f41] text-2xl font-medium transform transition-transform duration-600 ${
            open ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>

      {/* Smooth sliding content */}
      <div
        className={`overflow-hidden transition-[max-height] duration-1000 ease-in-out  ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="mt-4 border-l-2 border-gray-200 pl-6 text-[#153f41] space-y-4 text-base text-left font-medium">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
