// components/TwoColumnFeatures.jsx
"use client";


import { motion } from "framer-motion";
import { ContentImages } from "../../constants/contentImages";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, x: -18 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 18 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function TwoColumnFeatures() {
  return (
    <section className="w-full bg-[#FBF8F6] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-20"
        >
          {ContentImages.images.map((img) => (
            <motion.div
              key={img.id}
              variants={rowVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              {/* TEXT (left on large screens) */}
              <motion.div variants={textVariants} className="space-y-5 text-left">
                <h2 className=" leading-tight text-[#173737] font-serif">
                  {img.title}
                </h2>
                <p className="text-lg text-[#415d60] leading-relaxed max-w-xl">
                  {img.description}
                </p>
              </motion.div>

              {/* IMAGE (right-aligned on large screens) */}
              <motion.div
                variants={imageVariants}
                className="flex justify-end w-full"
                whileHover={{ scale: 1.03 }}
              >
                <div className="overflow-hidden bg-gray-200 shadow-md w-full max-w-lg">
                  <div className="relative aspect-[3/2]">
                    <img
                      src={img.url}
                      alt={img.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}