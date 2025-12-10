import React from "react";
import { Bed, CircleUserRound, VectorSquare } from "lucide-react";

function RoomAbout() {
  return (
    <section className="bg-[#f6f1ed] md:py-20 py-10 px-6 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/** Left-side */}
        <h2 className="md:text-5xl text-3xl font-serif text-[#153f41] text-left">About</h2>
        {/** Right-side */}
        <div className="text-[#153f41] space-y-10">
          <div className="flex items-center md:space-x-10 space-x-2 md:text-lg text-xs font-medium ">
            <div className="flex items-center md:space-x-5 space-x-2">
              <span className="">
                <VectorSquare size={20} />
              </span>
              <span>480 sq. ft.</span>
            </div>
            <div className="flex items-center md:space-x-5 space-x-2">
              <span className="">
                <Bed size={20} />
              </span>
              <span className="">1 Queen Bed</span>
            </div>
            <div className="flex items-center md:space-x-5 space-x-2">
              <span className="">
                <CircleUserRound size={20} />
              </span>
              <span>2 Guests</span>
            </div>
          </div>

          <div className="border-b-2 border-gray-300 "></div>

          <p className="md:text-lg text-base font-medium max-w-2xl text-left">
            A peaceful 480 sq. ft. retreat featuring a private garden patio,
            queen bed, indoor–outdoor shower, and a serene meditation corner.
          </p>

          <div className="border-b-2 border-gray-300 "></div>
              <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[#bfa48a] text-left">Starting at</p>
              <p className="text-4xl font-medium">
                $299 <span className="text-xl">/ night</span>
              </p>
            </div>

            <button className="px-6 py-3 border border-[#153f41] text-[#153f41] hover:bg-[#153f41] hover:text-white transition text-lg font-medium">
              Book a Stay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoomAbout;
