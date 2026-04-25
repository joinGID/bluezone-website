"use client";
import { motion } from "framer-motion";

export default function FooterLocations({ theme }) {
  const locations = [
    {
      position: "Sales Manager",
      name: "Ahmed Amal",
      number: "+91 73565 23534",
    }
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
      className="mt-6 text-left"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {locations.map((location, idx) => (
        <motion.div key={idx} className="space-y-1" variants={itemVariants}>
          <h4 className={`${theme.heading} font-semibold text-base`}>
            {location.position}
          </h4>
          <p
            className={`${theme.textSecondary} underline-slide text-sm font-light font-sans`}
          >
            {location.name}
          </p>
          <p
            className={`${theme.textSecondary} underline-slide text-sm font-light font-sans`}
          >
            {location.number}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
