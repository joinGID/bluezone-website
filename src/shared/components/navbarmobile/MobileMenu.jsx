"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function MobileMenu({ isOpen, onClose }) {
  const navItems = ["About", "Rooms", "Services", "Events", "Blog", "Contact"];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-[#f7f3ef] z-50 flex flex-col items-center pt-16"
        >
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute top-8 right-8 text-gray-700"
          >
            <X size={28} />
          </motion.button>

          {/* Logo */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl text-[#1f3740] tracking-widest font-semibold text-center"
          >
            MARIVEN
            <p className="text-xs tracking-[0.35em] font-light mt-1">
              HOTELS & RESORTS
            </p>
          </motion.h1>

          {/* Menu Items */}
          <ul className="mt-16 space-y-6 text-center">
            {navItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                whileHover={{
                  x: 10,
                  scale: 1.1,
                  letterSpacing: "0.2em",
                  transition: { type: "spring", stiffness: 200, damping: 12 },
                }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl text-[#1f3740] font-light cursor-pointer hover:opacity-70"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
