'use client';
import React from 'react';
import { motion } from "framer-motion";

const FooterBrand = ({ theme }) => {
    return (
        <motion.div
            className="flex flex-col gap-8 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.4em] font-sans font-bold text-habitat/30 block">
                    Project by 
                </span>
                <img
                    src="/landing/infravision.png"
                    alt="BlueZone Logo"
                    className='w-40 md:w-56 brightness-95'
                />
            </div>

            <div className="pt-6 border-t border-habitat/5">
                <p className="text-habitat/60 max-w-sm text-sm md:text-base font-light font-serif italic leading-loose tracking-wide">
                    "Crafting sophisticated living spaces that seamlessly blend modern luxury with the serene rhythms of nature."
                </p>
            </div>
        </motion.div>
    );
};

export default FooterBrand;
