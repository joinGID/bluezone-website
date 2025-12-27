'use client';
import React from 'react';
import { motion } from "framer-motion";

const FooterBottom = ({ theme }) => {
    const currentYear = new Date().getFullYear();

    return (
        <motion.div
            className="flex flex-col md:flex-row items-center gap-6 md:gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <p className="text-habitat/60 text-sm font-sans tracking-wide">© {currentYear} Blue Zone Habitat</p>
            <motion.div
                className="flex gap-6 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <motion.a
                    href="/privacy"
                    className={`${theme.textSecondary} underline-slide  transition-colors`}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                >
                    Privacy
                </motion.a>
                <motion.a
                    href="/terms"
                    className={`${theme.textSecondary} underline-slide transition-colors`}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                >
                    Terms
                </motion.a>
                <motion.a
                    href="/sitemap"
                    className={`${theme.textSecondary} underline-slide transition-colors`}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                >
                    Sitemap
                </motion.a>
            </motion.div>
        </motion.div>
    );
};

export default FooterBottom;

