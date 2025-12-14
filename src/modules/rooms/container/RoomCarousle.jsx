"use client";
import React from "react";
import { sliderImages } from "../constants/roomConstants";
import Carousle from "@/src/shared/components/carousel/Carousle ";


function RoomCarousle() {
  return (
<div>
<Carousle images={sliderImages}/>
</div>
  );
}

export default RoomCarousle;
