'use client';
import React from 'react';
import { motion } from "framer-motion";

const FooterBrand = ({ theme }) => {
    return (
        <motion.div
            className="md:space-y-6 space-y-4 w-[50%] text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <motion.h2
                className={`text-4xl md:text-6xl font-bold font-sans ${theme.heading}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Let's Talk
            </motion.h2>
            <motion.div
                className="flex flex-col items-start space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <motion.a
                    href="mailto:hey@BlueZone.global"
                    className={`underline-slide transition-colors md:text-3xl text-2xl font-light font-sans`}

                >
                    hey@BlueZone.global
                </motion.a>
                <motion.a
                    href="tel:+14157966262"
                    className={`underline-slide  transition-colors md:text-3xl text-lg font-light font-sans `}

                >
                    +1 415 796 6262
                </motion.a>
            </motion.div>
        </motion.div>
    );
};

export default FooterBrand;

