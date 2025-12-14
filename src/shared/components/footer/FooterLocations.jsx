"use client";
import { motion } from "framer-motion";

export default function FooterLocations({ theme }) {
    const locations = [
        {
            city: "San Francisco",
            address: "300 Broadway",
            details: "San Francisco, CA 94133",
        },
        {
            city: "New York",
            address: "181 Lafayette St.",
            details: "New York, NY 10013",
        },
        {
            city: "Austin",
            address: "800 Congress Ave.",
            details: "Austin, TX 78701",
        },
        {
            city: "Denver",
            address: "1200 Lincoln St Ste 8",
            details: "Denver, CO 80203",
        },
        {
            city: "Lisbon",
            address: "Av. Alm. Reis 130 1150-016",
            details: "Lisbon, Portugal",
        },
        {
            city: "Belgrade",
            address: "Nusiceva 15, 11000",
            details: "Belgrade, Serbia",
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
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left md:w-[50%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            {locations.map((location, idx) => (
                <motion.div
                    key={idx}
                    className="space-y-1"
                    variants={itemVariants}
                >
                    <h4 className={`${theme.heading} font-semibold text-base`}>{location.city}</h4>
                    <p className={`${theme.textSecondary} underline-slide text-sm font-light font-sans`}>{location.address}</p>
                    <p className={`${theme.textSecondary} underline-slide text-sm font-light font-sans`}>{location.details}</p>
                </motion.div>
            ))}
        </motion.div>
    );
}
