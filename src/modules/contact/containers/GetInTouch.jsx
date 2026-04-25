"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

export default function GetInTouch() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState(null);

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
          borderRadius: '12px',
          fontSize: '14px',
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
          borderRadius: '12px',
          fontSize: '14px',
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
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const contactItems = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      label: "Project Location",
      value: "Manjeri, Malappuram, Kerala",
      href: "https://www.google.com/maps/search/?api=1&query=Manjeri+Malappuram+Kerala",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      label: "Sales Manager",
      value: "+91 73565 23534",
      subtext: "Ahmed Amal",
      href: "tel:+917356523534",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      label: "Email",
      value: "contact@bluezonehabitat.com",
      href: "mailto:contact@bluezonehabitat.com",
    },
  ];

  const inputClasses = "w-full px-0 py-3 bg-transparent border-b border-habitat/15 text-habitat placeholder:text-habitat/30 focus:outline-none focus:border-habitat/50 transition-all duration-500 font-sans text-sm";

  return (
    <div className="min-h-screen bg-[#f7f3ef] flex items-center justify-center px-6 md:px-12 py-16 md:py-24">
      <Toaster />

      <motion.div
        className="max-w-6xl w-full"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.div className="text-center mb-16 md:mb-20" variants={fadeInUp} transition={{ duration: 0.7 }}>
          <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-habitat/40 font-sans font-semibold block mb-6">
            Let's Connect
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-habitat leading-tight tracking-tight">
            Get In Touch
          </h1>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: Contact Info */}
          <motion.div
            className="space-y-8"
            variants={fadeInUp}
            transition={{ duration: 0.7 }}
          >
            <p className="text-base md:text-lg leading-relaxed text-habitat/60 font-light font-sans max-w-md">
              Your sanctuary in Malappuram is just a conversation away. We're here to help you find the perfect home.
            </p>

            <div className="space-y-6 pt-4">
              {contactItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-start gap-4 p-4 -mx-4 rounded-xl hover:bg-white/50 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-full bg-habitat/5 flex items-center justify-center text-habitat/50 group-hover:bg-habitat group-hover:text-white transition-all duration-300 shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-habitat/40 font-semibold block mb-1">
                      {item.label}
                    </span>
                    {item.subtext && (
                      <span className="text-sm text-habitat/50 block mb-0.5">{item.subtext}</span>
                    )}
                    <span className="text-habitat text-sm md:text-base font-medium group-hover:text-habitat/70 transition-colors">
                      {item.value}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Decorative Quote */}
            <motion.div
              className="pt-8 border-t border-habitat/8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <p className="text-habitat/40 text-sm italic font-serif leading-relaxed max-w-sm">
                "Where modern luxury meets the serene rhythms of nature — your dream home awaits."
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="bg-white/40 backdrop-blur-sm border border-habitat/8 rounded-2xl p-8 md:p-10">
              <h2 className="text-xl font-serif font-medium text-habitat mb-2">
                Send us a message
              </h2>
              <p className="text-sm text-habitat/40 mb-8">
                Fill in the details below and we'll get back to you shortly.
              </p>

              <form
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf1Ai_b9SpHnfS-N_NsNtklxXE3DEfekSZVh2ZMxfSobQGscg/formResponse"
                method="POST"
                onSubmit={handleSubmit}
              >
                {/* Hidden Fields */}
                <input type="hidden" name="fvv" value="1" />
                <input type="hidden" name="fbzx" value="1868133423835757518" />

                <div className="space-y-6">
                  {/* Name & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <label
                        htmlFor="contact-name"
                        className={`absolute left-0 transition-all duration-300 font-sans ${
                          focused === 'name'
                            ? 'text-[10px] -top-2 tracking-wider uppercase text-habitat/60 font-semibold'
                            : 'text-sm top-3 text-habitat/40'
                        }`}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="entry.254128283"
                        className={inputClasses}
                        onFocus={() => setFocused('name')}
                        onBlur={(e) => !e.target.value && setFocused(null)}
                        required
                      />
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="contact-phone"
                        className={`absolute left-0 transition-all duration-300 font-sans ${
                          focused === 'phone'
                            ? 'text-[10px] -top-2 tracking-wider uppercase text-habitat/60 font-semibold'
                            : 'text-sm top-3 text-habitat/40'
                        }`}
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="entry.439276299"
                        className={inputClasses}
                        onFocus={() => setFocused('phone')}
                        onBlur={(e) => !e.target.value && setFocused(null)}
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label
                      htmlFor="contact-email"
                      className={`absolute left-0 transition-all duration-300 font-sans ${
                        focused === 'email'
                          ? 'text-[10px] -top-2 tracking-wider uppercase text-habitat/60 font-semibold'
                          : 'text-sm top-3 text-habitat/40'
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="entry.943391505"
                      className={inputClasses}
                      onFocus={() => setFocused('email')}
                      onBlur={(e) => !e.target.value && setFocused(null)}
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label
                      htmlFor="contact-message"
                      className={`absolute left-0 transition-all duration-300 font-sans ${
                        focused === 'message'
                          ? 'text-[10px] -top-2 tracking-wider uppercase text-habitat/60 font-semibold'
                          : 'text-sm top-3 text-habitat/40'
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="entry.292584467"
                      rows="4"
                      className={`${inputClasses} resize-none`}
                      onFocus={() => setFocused('message')}
                      onBlur={(e) => !e.target.value && setFocused(null)}
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-10">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full sm:w-auto px-10 py-3.5 bg-habitat text-white rounded-xl font-sans text-sm font-medium tracking-wide overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-habitat/15 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}