
"use client";
import React from 'react';
import { motion } from "framer-motion";

const FooterLinks = ({theme}) => {
     const linkGroups = [
        {
            title: "Company",
            links: [
                { label: "Home", href: "/work" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
            ],
        },
        {
            title: "Resources",
            links: [
                { label: "Clients", href: "/clients" },
                { label: "Industries", href: "/industries" },
                { label: "Blog", href: "/blog" },
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };
  return (
    <motion.div
            className="flex gap-16 md:gap-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            {linkGroups.map((group, idx) => (
                <motion.div key={idx} className="space-y-4 text-left" variants={itemVariants}>
                    <ul className="space-y-2">
                        {group.links.map((link, linkIdx) => (
                            <motion.li key={linkIdx} >
                                <a
                                    href={link.href}
                                    className={`underline-slide transition-colors text-2xl font-light font-sans `}
                                >
                                    {link.label}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </motion.div>
  );
};

export default FooterLinks;

