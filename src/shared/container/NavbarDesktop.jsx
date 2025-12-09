"use client";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

export default function NavbarDesktop() {
  const navItems = ["About", "Rooms", "Services", "Events", "Blog", "Contact"];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full text-white py-6 bg-transparent backdrop-blur-sm"
    >
      <div className="w-full flex items-center px-6">
        {/* LEFT – Nav Items */}
        <div className="flex-1 flex justify-start">
          <ul className="flex space-x-8 text-base font-medium">
            {navItems.map((item, i) => {
              const letters = item.split("");
              return (
                <motion.li
                  key={i}
                  className="cursor-pointer overflow-hidden"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  {/* parent span controls stagger */}
                  <motion.span
                    className="inline-flex"
                    variants={{
                      rest: { transition: { staggerChildren: 0 } },
                      hover: {
                        transition: { staggerChildren: 0.03, delayChildren: 0 },
                      },
                    }}
                  >
                    {letters.map((char, idx) => (
                      <motion.span
                        key={idx}
                        className="inline-block"
                        variants={{
                          rest: { y: 0, opacity: 1 },
                          hover: {
                            y: [0, 0],
                            opacity: [0, 1],
                            transition: { duration: 0.82, ease: "easeOut" },
                          },
                        }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.span>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* CENTER – Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex-1 text-center"
        >
          <h1 className="text-2xl font-bold tracking-widest">MARIVEN</h1>
          <p className="text-[10px] font-light tracking-[0.25em] mt-1">
            HOTELS & RESORTS
          </p>
        </motion.div>

        <div className="flex-1 flex justify-end space-x-15 text-base font-medium">
          {/* Location */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <MapPin className="w-4 h-4" />
            <span>Malibu, CA</span>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Phone className="w-4 h-4" />
            <span>+1 234 567 890</span>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
