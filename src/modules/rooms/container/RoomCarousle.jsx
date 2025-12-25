"use client";
import React from "react";

import Carousle from "@/src/shared/components/carousle/Carousle";


function RoomCarousle({ images }) {
  return (
    <div>
      <Carousle images={images} />
    </div>
  );
}

export default RoomCarousle;
