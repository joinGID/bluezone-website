"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function FooterSocial({ theme }) {
    const socialLinks = [
        { name: "Dribbble", icon: "mdi:dribbble", href: "https://dribbble.com" },
        { name: "Behance", icon: "mdi:behance", href: "https://behance.net" },
        { name: "Instagram", icon: "mdi:instagram", href: "https://instagram.com" },
        { name: "LinkedIn", icon: "mdi:linkedin", href: "https://linkedin.com" },
        { name: "Twitter", icon: "mdi:twitter", href: "https://twitter.com" },
        { name: "Facebook", icon: "mdi:facebook", href: "https://facebook.com" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <motion.div
            className="flex gap-4 w-[50%] "
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
                    className={` w-10 h-10 flex items-center justify-center bg-[#f9f6f3]
                    ${theme.socialBg} ${theme.socialHover} ${theme.link} 
                    transition-all duration-300`}
                    aria-label={social.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Icon icon={social.icon} className="w-5 h-5 " />
                </motion.a>
            ))}
        </motion.div>
    );
}
