"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Menu, X, Download, FileText } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrollDir, setScrollDir] = useState("up");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;

    if (latest > prev && latest > 80) setScrollDir("down");
    else if (latest < prev) setScrollDir("up");

    setIsScrolled(latest > 80);
  });

  const navItems = ["About", "Rooms", "Services", "Events", "Blog", "Contact"];

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <motion.nav
        animate={{ y: scrollDir === "down" ? -110 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`
          fixed top-0 z-50 hidden md:block w-full
          backdrop-blur-md transition-all duration-300
          ${isScrolled ? "bg-white text-black shadow-sm" : "bg-transparent text-white"}
        `}
      >
        <div className="max-w-[1400px] mx-auto px-8 py-5 flex items-center">

          {/* LEFT */}
          <ul className="flex flex-1 gap-8 text-sm lg:text-base font-medium">
            {navItems.map((item) => (
              <li key={item} className="group relative cursor-pointer">
                {item}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          {/* CENTER LOGO */}
          <div className="flex-1 text-center leading-tight">
            <h1 className="text-2xl lg:text-3xl font-semibold tracking-widest">
              Blue zone
            </h1>
            <p className="text-[10px] tracking-[0.3em] opacity-80">
              Homes & Living
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-1 justify-end items-center gap-8 text-sm lg:text-base">
            <div className="hidden lg:flex items-center gap-2 cursor-pointer">
              <MapPin size={16} />
              Malibu, CA
            </div>

            <div className="hidden lg:flex items-center gap-2 cursor-pointer">
              <Phone size={16} />
              +1 234 567 890
            </div>

          <button
  aria-label="Download brochure"
  className="
    p-3  text-white rounded-md
    hover:-translate-y-[1px] hover:shadow-md
    transition-all duration-200
    flex items-center justify-center
  "
>
  <FileText size={18} />
</button>

          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE NAV ================= */}
      <div
        className={`
          fixed top-0 z-50 w-full md:hidden backdrop-blur-md transition-all
          ${isScrolled ? "bg-white text-black shadow-sm" : "bg-transparent text-white"}
        `}
      >
        <div className="px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-widest">Blue zone</h1>

          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: mobileOpen ? "auto" : 0,
            opacity: mobileOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 space-y-5 text-lg">
            {navItems.map((item) => (
              <div key={item} className="border-b border-black/10 pb-2">
                {item}
              </div>
            ))}

            <div className="pt-4 space-y-3 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <MapPin size={16} /> Malibu, CA
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} /> +1 234 567 890
              </div>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-md uppercase tracking-wide">
              Brochure
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
