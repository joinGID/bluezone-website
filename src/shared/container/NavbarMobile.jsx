"use client";

import { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu } from "lucide-react";
import MobileMenuCom from "../components/navbarmobile/MobileMenu";

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // scroll UP → hide navbar
    if (latest < previous && latest > 80) {
      setHidden(false);
    }
    // scroll DOWN → show navbar
    else if (latest > previous) {
      setHidden(true);
    }
  });

  return (
    <>
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: hidden ? -120 : 0,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        className="w-full fixed top-0 left-0 z-40 flex md:hidden items-center px-6 py-6 bg-white text-black"
      >
        {/* Centered Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-2xl tracking-widest font-semibold leading-none">
            Blue zone
          </h1>
          <p className="text-xs tracking-[0.3em] font-light">
            Habitat
          </p>
        </div>

        {/* Hamburger Icon */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(true)}
          className="ml-auto"
        >
          <Menu size={32} />
        </motion.button>
      </motion.nav>

      {/* FULL SCREEN MOBILE MENU */}
      <MobileMenuCom isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
