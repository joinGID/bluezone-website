"use client";
import { motion } from "framer-motion";

export default function FooterLocations({ theme }) {
    const locations = [
  {
    position: "Sales & Enquiry",
    name: "John Doe",
    number: "+1 234 567 890",
  },
  {
    position: "Sales & Enquiry",
    name: "Jane Smith",
    number: "+1 345 678 901",
  },
  {
    position: "Sales & Enquiry",
    name: "Michael Brown",
    number: "+1 456 789 012",
  },
  {
    position: "Sales & Enquiry",
    name: "Emily Johnson",
    number: "+1 567 890 123",
  },
  {
    position: "Sales & Enquiry",
    name: "David Wilson",
    number: "+1 678 901 234",
  },
  {
    position: "Sales & Enquiry",
    name: "Sophia Miller",
    number: "+1 789 012 345",
  }
]


    const containerVariants = {
        hidden: { opaposition: 0 },
        visible: {
            opaposition: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opaposition: 0, y: 20 },
        visible: { opaposition: 1, y: 0 },
    };

    return (
        <motion.div
            className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left"
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
                    <h4 className={`${theme.heading} font-semibold text-base`}>{location.position}</h4>
                    <p className={`${theme.textSecondary} underline-slide text-sm font-light font-sans`}>{location.name}</p><br/>
                    <p className={`${theme.textSecondary} underline-slide text-sm font-light font-sans`}>{location.number}</p>
                </motion.div>
            ))}
        </motion.div>
    );
}