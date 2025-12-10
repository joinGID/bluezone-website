import React from "react";
import {
  GiFlowerPot,
  GiMeditation,
  GiRolledCloth,
  GiShower,
  GiTv,
} from "react-icons/gi";
import { LuBedDouble, LuUtensilsCrossed } from "react-icons/lu";
import { PiCoffee } from "react-icons/pi";

function RoomFacilities() {
  return (
    <section className="bg-[#f6f1ed] py-10 md:pt-20 px-6 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/** Left-side */}
        <h2 className="md:text-5xl text-3xl font-serif text-[#153f41] text-left">
          Amenities
        </h2>
        {/** Right-side */}
        <div className="text-[#153f41] grid grid-cols-2 ">
          <div className="text-left space-y-10">
            <div className="flex items-center gap-3">
              <span className="text-3xl">
                <GiFlowerPot />
              </span>
              <span className="text-base font-medium">Garden Patio</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">
                <GiShower />
              </span>
              <span className="text-base font-medium">Rain Shower</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">
                <GiMeditation />
              </span>
              <span className="text-base font-medium">Meditation Area</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">
                <GiRolledCloth />
              </span>
              <span className="text-base font-medium">Yoga Mat</span>
            </div>
          </div>
          <div className="text-left space-y-10">
            <div className="flex items-center gap-3">
              <span className="text-3xl">
                <LuBedDouble />
              </span>
              <span className="text-base font-medium">Queen Bed</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">
                <LuUtensilsCrossed />
              </span>
              <span className="text-base font-medium">Breakfast</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">
                <GiTv />
              </span>
              <span className="text-base font-medium">Smart TV</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">
                <PiCoffee />
              </span>
              <span className="text-base font-medium">Tea Set</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-20 border-b border-gray-300">
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-gray-300 bg-white"></div>
      </div>
    </section>
  );
}

export default RoomFacilities;
