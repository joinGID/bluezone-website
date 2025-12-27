
"use client";
import React from 'react';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

const FooterLinks = ({ theme }) => {
    const router = useRouter();

    const linkGroups = [
        {
            title: "Company",
            links: [
                { label: "About" },
                { label: "Services" },
                { label: "Rooms" },
                { label: "Gallery" },
                { label: "Contact" },
            ],
        },

    ];

    const handleNavigation = (item) => {
        if (item === "About") {
            router.push(`/`)
        }
        else if (item === "Services") {
            const element = document.getElementById('service-heading');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                router.push('/');
                setTimeout(() => {
                    const el = document.getElementById('service-heading');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 500);
            }
        }
        else {
            router.push(`/${item.toLowerCase()}`)
        }
    };

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
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            {linkGroups.map((group, idx) => (
                <motion.div
                    key={idx}
                    className="flex flex-wrap lg:justify-start gap-x-12 gap-y-6"
                    variants={itemVariants}
                >
                    {group.links.map((link, linkIdx) => (
                        <button
                            key={linkIdx}
                            onClick={() => group.title === "Company" ? handleNavigation(link.label) : router.push(link.href)}
                            className="underline-slide transition-all duration-500 text-[10px] md:text-xs font-bold font-sans uppercase tracking-[0.4em] text-habitat/60 hover:text-habitat cursor-pointer whitespace-nowrap"
                        >
                            {link.label}
                        </button>
                    ))}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default FooterLinks;

