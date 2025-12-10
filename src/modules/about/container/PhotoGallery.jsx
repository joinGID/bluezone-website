import React from "react";
import { galleryImage } from "../constants/homeConstants";
import Carousle from "@/src/shared/components/carousle/Carousle ";
import OutlineButton from "@/src/shared/components/OutlineButton ";

function PhotoGallery() {
  return (
    <div className="bg-[#f9f6f3] md:py-20 py-10">
      <div className="md:px-25 px-10 py-10 md:flex md:justify-between">
        <div className="text-left">
          <h2 className="text-[#0f677d] text-sm font-serif font-light">
            Photo Gallery
          </h2>
          <h2 className="text-[#153f41] md:text-5xl text-3xl font-serif font-light pt-6">
            Mariven Moments <br className='hidden md:block'/> Captured
          </h2>
        </div>
        <div className="md:mt-10 mt-5 flex md:block">
          <OutlineButton
            label="Explore All Services"
            className="hover:bg-[#153f41]!"
          />
        </div> 
      </div>
      <Carousle images={galleryImage} />
    </div>
  );
}

export default PhotoGallery;
