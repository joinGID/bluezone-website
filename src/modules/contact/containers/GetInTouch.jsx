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
    <div className="min-h-screen bg-[#f5f1ed] flex items-center justify-center px-5 py-12">
      <motion.div 
        className="max-w-3xl w-full text-center px-6 py-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div 
          className="text-sm tracking-[0.2em] uppercase text-gray-600 mb-8 font-sans"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-serif font-normal text-[#1a2332] mb-12 leading-tight tracking-tight"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h1>
        
        <motion.p 
          className="text-base md:text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto mb-16 font-serif"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Your perfect beachside escape is just a message away - our dedicated team is standing by to craft your personalized coastal experience.
        </motion.p>
      </motion.div>
    </div>
  );
}