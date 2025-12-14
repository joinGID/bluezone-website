"use client";
import React from 'react'
import FooterBrand from "../components/footer/FooterBrand";
import FooterLinks from "../components/footer/FooterLinks";
import FooterLocations from "../components/footer/FooterLocations";
import FooterSocial from "../components/footer/FooterSocial";
import FooterBottom from "../components/footer/FooterBottom";


function Footer() {
      const theme = {
        bg: "bg-[#f9f6f3]",
        text: "text-gray-900",
        textSecondary: "text-gray-600",
        heading: "text-gray-900",
        link: "text-gray-900",
        linkHover: "hover:text-[#FF3B30]",
        socialBg: "bg-gray-100",
        socialHover: "hover:bg-[#FF3B30]",
        border: "border-gray-200",
    };
  return (
            <footer className={`${theme.bg} ${theme.text}`}>
            {/* Main Footer Content */}
            <div className="max-w-8xl md:mx-20 mx-5 md:py-16 py-10">
                {/* Top Section - Brand and Links */}
                <div className="flex flex-col lg:flex-row justify-between space-y-10">
                    {/* Left: Brand & Contact */}
                    <FooterBrand theme={theme} />

                    {/* Right: Navigation Links */}
                    <div className="flex flex-col gap-12 w-[50%] ">
                    <FooterLinks theme={theme} />
                    </div>
              </div>

              {/* Locations */}
              <div className='md:flex md:justify-between'>
                <div className='hidden md:block'></div>
                    <FooterLocations theme={theme} />
              </div>

                {/* Social Media Links and Bottom Section */}
                <div className="mt-12 flex flex-col md:flex-row justify-between gap-5 md:gap-0">
                    <FooterSocial theme={theme} />
                     <FooterBottom theme={theme} /> 
                </div>

       
               
            </div>
        </footer>
  )
}

export default Footer




