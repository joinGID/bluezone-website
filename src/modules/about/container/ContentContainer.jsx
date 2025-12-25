
"use client";

import TwoColumnFeatures from "../component/welcomehome/TwoColumnFeatures";
import { ContentImages } from "../constants/contentImages";



export default function ContentContainer() {
  return (
    <section className="w-full h-auto bg-[#FBF8F6]">
      <TwoColumnFeatures ContentImages={ContentImages} />
    </section>
  );
}