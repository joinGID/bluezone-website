
"use client";

import MobileVerticalFeatures from "@/src/shared/components/carousel/MobileVerticalFeatures";
import TwoColumnFeatures from "../component/welcomehome/TwoColumnFeatures";
import { ContentImages } from "../constants/contentImages";



export default function ContentContainer() {
  return (
    <section className="w-full h-auto bg-[#FBF8F6]">
      <TwoColumnFeatures ContentImages={ContentImages} />
      <>
      {/* Desktop
      <div className="hidden lg:block">
        <TwoColumnFeatures ContentImages={ContentImages} />
      </div>


      <div className="block lg:hidden">
        <MobileVerticalFeatures ContentImages={ContentImages} />
      </div> */}
    </>
    </section>
  );
}