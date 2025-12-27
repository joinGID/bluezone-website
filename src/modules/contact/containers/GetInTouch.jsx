"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {



  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f3ef] flex items-center justify-center px-5 py-12">
      <motion.div
        className="max-w-3xl w-full text-center px-6 py-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-habitat/40 mb-8 font-sans font-bold italic"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-serif font-medium text-habitat mb-12 leading-tight tracking-tight"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Get In <br className="hidden md:block" /> Touch
        </motion.h1>

        <motion.p
          className="text-base md:text-lg leading-relaxed text-habitat/70 max-w-2xl mx-auto mb-16 font-light font-sans tracking-wide"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Your sanctuary in Malappuram is just a conversation away. Our team is dedicated to helping you find the perfect balance of modern luxury and serene nature.
        </motion.p>
      </motion.div>
    </div>
  );
}