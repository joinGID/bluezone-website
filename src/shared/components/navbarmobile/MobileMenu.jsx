"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone, Download } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MobileMenuCom({ isOpen, onClose }) {
  const navItems = ["About", "Services", "Rooms", "Gallery", "Contact"];
  const router = useRouter();

  const handleNavigation = (item) => {
    onClose();
    if (item === "About") {
      router.push("/");
    } else if (item === "Services") {
      const element = document.getElementById("service-heading");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/");
        setTimeout(() => {
          const el = document.getElementById("service-heading");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    } else {
      router.push(`/${item.toLowerCase()}`);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 bg-bone z-50 flex flex-col items-center pt-16"
        >
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute top-8 right-8 text-gray-700"
          >
            <X size={28} />
          </motion.button>

          {/* Logo */}
          <img
            className="w-24"
            src="/logos/blueZoneLogo1.png"
            alt="Blue Zone Logo"
          />

          {/* Menu Items */}
          <ul className="mt-14 space-y-6 text-center">
            {navItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation(item)}
                className="text-2xl text-habitat font-light cursor-pointer"
              >
                {item}
              </motion.li>
            ))}
          </ul>

          {/* DIVIDER */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="origin-center w-24 h-px bg-habitat/20 my-10"
          />

          {/* EXTRA INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col gap-5 items-center text-habitat"
          >
            {/* Location */}
            <div className="flex items-center gap-3 text-sm">
              <MapPin size={18} />
              <span>Manjeri</span>
            </div>

            {/* Phone */}
            <a
              href="tel:+1234567890"
              className="flex items-center gap-3 text-sm"
            >
              <Phone size={18} />
              <span>+1234567890</span>
            </a>

            {/* Brochure */}
            <a
              href="/brochure.pdf"
              download
              className="
                mt-4 flex items-center gap-2
                px-6 py-3 rounded-full
                border border-habitat/30
                text-xs uppercase tracking-[0.2em]
                hover:bg-habitat hover:text-white
                transition-all
              "
            >
              <Download size={14} />
              Brochure
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
