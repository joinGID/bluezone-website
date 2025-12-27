"use client";
import React from 'react'
import FooterBrand from "../components/footer/FooterBrand.jsx";
import FooterLinks from "../components/footer/FooterLinks.jsx";
import FooterLocations from "../components/footer/FooterLocations.jsx";
import FooterSocial from "../components/footer/FooterSocial.jsx";
import FooterBottom from "../components/footer/FooterBottom.jsx";


function Footer() {
  const theme = {
    bg: "bg-[#f7f3ef]", // Using Bone background from brand identity
    text: "text-habitat",
    textSecondary: "text-habitat/60",
    heading: "text-habitat",
    link: "text-habitat",
    linkHover: "hover:text-habitat/70",
    socialBg: "bg-habitat/5",
    socialHover: "hover:bg-habitat/10",
    border: "border-habitat/10",
  };

  return (
    <footer className={`${theme.bg} ${theme.text} border-t ${theme.border} overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 lg:py-24">

        {/* TIER 1: BRANDING & TEAM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
          {/* Main Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <FooterBrand theme={theme} />
          </div>

          {/* Team & Value Column */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h3 className="text-habitat/40 text-[10px] md:text-xs tracking-[0.4em] uppercase font-sans font-bold mb-8 italic">
                Connect with our team
              </h3>
              <FooterLocations theme={theme} />
            </div>
          </div>
        </div>

        {/* TIER 2: NAVIGATION & PROJECT BY STRIP */}
        <div className="py-10 border-t border-habitat/5 flex flex-col lg:flex-row justify-between items-center gap-10">
          <FooterLinks theme={theme} />  

          <div className="flex flex-col items-center lg:items-end gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-semibold text-habitat/40">
             Established 2024
            </span>
            <img
              src="/logos/blueZoneLogo1.png"
              alt="Infravision"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
        </div>

        {/* TIER 3: BOTTOM BAR (LEGAL & SOCIAL) */}
        <div className="pt-8 border-t border-habitat/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <FooterBottom theme={theme} />
          <FooterSocial theme={theme} />
        </div>

      </div>
    </footer>
  );
}

export default Footer


