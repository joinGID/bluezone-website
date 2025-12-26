"use client";
import React from "react";

import HorizontalScrollGallery from "../../../shared/components/carousel/HorizontalCarousel";


function RoomCarousle({ images, bottomText }) {
  return (
    <div className="bg-amber-50">
      <HorizontalScrollGallery images={images} bottomText={bottomText} />
    </div>
  );
}

export default RoomCarousle;
