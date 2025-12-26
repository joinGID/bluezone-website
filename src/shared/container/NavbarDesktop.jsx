"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Menu, X, Download, FileText } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const router = useRouter();
  const { scrollY } = useScroll();
  const [scrollDir, setScrollDir] = useState("up");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/rooms";
  const isTransparent = isHome && !isScrolled;


  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;

    if (latest > prev && latest > 80) setScrollDir("down");
    else if (latest < prev) setScrollDir("up");

    setIsScrolled(latest > 80);
  });

  const navItems = ["About", "Services", "Rooms", "Gallery", "Contact"];

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <motion.nav
        animate={{ y: scrollDir === "down" ? -110 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`
          fixed top-0 z-50 hidden md:block w-full
          backdrop-blur-xs transition-all duration-300
          ${isTransparent ? "bg-transparent text-white" : "bg-white text-black shadow-sm"}
        `}
      >
        <div className="max-w-[1400px] mx-auto px-8 py-5 flex items-center">

          {/* LEFT */}
          <ul className="flex flex-1 gap-8 text-sm lg:text-base font-medium">
            {navItems.map((item) => (
              <li onClick={() => {
                if (item === "About") {
                  router.push(`/`)
                }
                else if (item === "Services") {
                  const element = document.getElementById('service-heading');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    router.push('/');
                    // Optional: You might want to use a URL parameter or context to scroll after navigation if needed.
                    // For now, simple redirection if not found (e.g. on another page)
                    setTimeout(() => {
                      const el = document.getElementById('service-heading');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 500);
                  }
                }
                else {
                  router.push(`/${item.toLowerCase()}`)
                }

              }} key={item} className="group relative cursor-pointer">
                {item}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          {/* CENTER LOGO */}
          <div className="flex-1 text-center leading-tight flex items-center  justify-center">
            {/* <h1 className="text-2xl lg:text-3xl font-semibold tracking-widest">
              Blue zone
            </h1>
            <p className="text-[10px] tracking-[0.3em] opacity-80">
              Homes & Living
            </p> */}
            <img className="w-20 " src="/logos/blueZoneLogo1.png" alt="Blue zone" />
          </div>

          {/* RIGHT */}
          <div className="flex flex-1 justify-end items-center gap-8 text-sm lg:text-base">
            <div className="hidden lg:flex items-center gap-2 cursor-pointer">
              <MapPin size={16} />
              Manjeri
            </div>

            <div className="hidden lg:flex items-center gap-2 cursor-pointer">
              <Phone size={16} />
              +1234567890
            </div>

            <button
              aria-label="Download brochure"
              className={`
                group flex items-center gap-2 px-5 py-2.5 
                border rounded-full transition-all duration-300
                ${isScrolled
                  ? "border-black/30 hover:bg-black hover:text-white"
                  : "border-white/30 hover:bg-white hover:text-black"}
              `}
            >
              <span className="text-xs uppercase tracking-[0.15em] font-medium">Brochure</span>
              <Download size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
            </button>

          </div>
        </div>
      </motion.nav>


    </>
  );
}
