"use client";
import React from 'react';
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function FooterSocial({ theme }) {
    const socialLinks = [
        { name: "Instagram", icon: "mdi:instagram", href: "https://www.instagram.com/mission___malappuram2050/#" },
        { name: "Facebook", icon: "mdi:facebook", href: "https://www.facebook.com/me/" },
        { name: "YouTube", icon: "mdi:youtube", href: "https://youtube.com" },
        { name: "LinkedIn", icon: "mdi:linkedin", href: "https://linkedin.com" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <motion.div
            className="flex flex-wrap gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            {socialLinks.map((social, idx) => (
                <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 flex items-center justify-center rounded-full
                    ${theme.socialBg} ${theme.socialHover} text-habitat
                    transition-all duration-300 border border-habitat/5 shadow-sm`}
                    aria-label={social.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: 12 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Icon icon={social.icon} className="w-5 h-5" />
                </motion.a>
            ))}
        </motion.div>
    );
}
