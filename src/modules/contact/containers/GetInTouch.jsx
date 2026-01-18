"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

export default function GetInTouch() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      // Submit to Google Forms
      await fetch(form.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Google Forms requires no-cors
      });

      // Show success toast
      toast.success('Thank you! Your message has been sent successfully.', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#2d3e2e',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
        },
      });

      // Reset form
      form.reset();
    } catch (error) {
      // Show error toast
      toast.error('Oops! Something went wrong. Please try again.', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#ef4444',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <div className="min-h-screen bg-[#f7f3ef] flex items-center justify-center px-12 py-12">
      <Toaster />
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

        {/* Contact Form */}
        <motion.form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf1Ai_b9SpHnfS-N_NsNtklxXE3DEfekSZVh2ZMxfSobQGscg/formResponse"
          method="POST"
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          {/* Hidden Fields */}
          <input type="hidden" name="fvv" value="1" />
          <input type="hidden" name="fbzx" value="1868133423835757518" />

          {/* Form Fields */}
          <div className="space-y-6 text-left">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-habitat/70 mb-2 font-sans">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="entry.254128283"
                className="w-full px-4 py-3 bg-white/60 border border-habitat/20 rounded-md text-habitat placeholder:text-habitat/40 focus:outline-none focus:ring-2 focus:ring-habitat/30 focus:border-transparent transition-all duration-300 font-sans"
                placeholder="Your answer"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-habitat/70 mb-2 font-sans">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                name="entry.439276299"
                className="w-full px-4 py-3 bg-white/60 border border-habitat/20 rounded-md text-habitat placeholder:text-habitat/40 focus:outline-none focus:ring-2 focus:ring-habitat/30 focus:border-transparent transition-all duration-300 font-sans"
                placeholder="Your answer"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-habitat/70 mb-2 font-sans">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="entry.943391505"
                className="w-full px-4 py-3 bg-white/60 border border-habitat/20 rounded-md text-habitat placeholder:text-habitat/40 focus:outline-none focus:ring-2 focus:ring-habitat/30 focus:border-transparent transition-all duration-300 font-sans"
                placeholder="Your answer"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-habitat/70 mb-2 font-sans">
                Message
              </label>
              <textarea
                id="message"
                name="entry.292584467"
                rows="5"
                className="w-full px-4 py-3 bg-white/60 border border-habitat/20 rounded-md text-habitat placeholder:text-habitat/40 focus:outline-none focus:ring-2 focus:ring-habitat/30 focus:border-transparent transition-all duration-300 font-sans resize-y"
                placeholder="Your answer"
                required
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex gap-4 justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-habitat text-white rounded-md font-sans font-medium tracking-wide hover:bg-habitat/90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-habitat/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
           
          </div>

        </motion.form>
      </motion.div>
    </div>
  );
}