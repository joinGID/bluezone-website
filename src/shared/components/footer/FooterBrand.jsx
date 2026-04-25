"use client";
import React from "react";
import { motion } from "framer-motion";

const FooterBrand = ({ theme }) => {
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-start gap-12 lg:gap-20 text-left"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Left: Brand + Tagline */}
      <div className="space-y-6">
        <div className="space-y-3">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-habitat/30 block">
            Project by
          </span>
          <img
            src="/landing/infravision.png"
            alt="BlueZone Logo"
            className="w-60 md:w-80"
          />
        </div>

        <div className="pt-6 border-t border-habitat/10">
          <p className="text-habitat/60 max-w-md text-sm md:text-base italic leading-relaxed">
            "Crafting sophisticated living spaces that seamlessly blend modern
            luxury with the serene rhythms of nature."
          </p>
        </div>
      </div>

      {/* Right: Sales Contact Card */}
      <div className="bg-white/60 backdrop-blur-sm border border-habitat/8 rounded-2xl p-6 md:p-8 w-full lg:w-72 shadow-sm">
        <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-habitat/40 block mb-4">
          Connect with us
        </span>

        <div className="space-y-1 mb-6">
          <h4 className={`${theme.heading} text-lg font-semibold`}>
            Ahmed Amal
          </h4>
          <p className={`${theme.textSecondary} text-sm`}>
            Sales Manager
          </p>
        </div>

        <a
          href="tel:+917356523534"
          className="group flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-habitat text-white text-sm font-medium hover:opacity-90 transition-all duration-300"
        >
          <svg className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>+91 73565 23534</span>
        </a>
      </div>
    </motion.div>
  );
};

export default FooterBrand;