// abouts/container/ContactLeft.jsx
"use client";

import { motion } from "framer-motion";
import { contactDetails } from "../constants/ContectDetails";
import ContactInfo from "../components/ContactInfo";

const ContactLeft = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#f7f3ef] px-4 py-16 sm:py-20"
    >
      <div className="hidden 2xl:block p-12 mx-auto">
        {/*remove centering & make content start from left */}
        <ContactInfo details={contactDetails} />

      </div>
    </motion.section>
  );
};

export default ContactLeft;
