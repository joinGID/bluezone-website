"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import MobileMenu from "../components/navbarmobile/MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <motion.nav
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="w-full absolute top-0 left-0 z-40 flex items-center px-6 py-6 text-white"
>
  {/* Centered Logo */}
  <div className="absolute left-1/2 -translate-x-1/2 text-center">
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-2xl tracking-widest font-semibold"
    >
      MARIVEN
      <p className="text-xs tracking-[0.3em] font-light">
        HOTELS & RESORTS
      </p>
    </motion.h1>
  </div>

  {/* Hamburger Icon (right) */}
  <motion.button
    whileTap={{ scale: 0.9 }}
    onClick={() => setOpen(true)}
    className="ml-auto"
  >
    <Menu size={32} className="text-white" />
  </motion.button>
</motion.nav>

      {/* FULL SCREEN MOBILE MENU */}
      <MobileMenu isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
