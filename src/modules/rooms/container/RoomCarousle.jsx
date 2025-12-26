"use client";
import React from "react";

import HorizontalScrollGallery from "../../../shared/components/carousel/HorizontalCarousel";


function RoomCarousle({ images }) {
  return (
    <div className="bg-amber-50">
      <HorizontalScrollGallery images={images} />
    </div>
  );
}

export default RoomCarousle;
