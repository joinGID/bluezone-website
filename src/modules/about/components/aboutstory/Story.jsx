
"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Story() {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -200]); 

    return (
       <div ref={containerRef} className="container mx-auto px-6 md:px-20 mt-10 md:mt-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-start">
             {/* Left Column - Community */}
             <div className="relative md:mt-10 flex flex-col gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop" 
                  alt="Hands holding sand" 
                  className="w-full h-[450px] object-cover"
                />
                <div className="px-2 text-left">
                    <h3 className="text-[#153f41] text-2xl font-medium font-serif mb-4 uppercase tracking-wide">
                        COMMUNITY
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-sans font-light text-sm md:text-base">
                        Blue Zone Habitat is designed as a place where people don't just live-they belong. 
                        Thoughtfully crafted common spaces, nature-filled walkways, and wellness-centered 
                        amenities encourage residents to connect, share, and grow together.
                    </p>
                </div>
            </div>

            {/* Center Column - Culture */}
            <motion.div 
                style={{ y: isMobile ? 0 : y }}
                className="relative flex flex-col gap-6"
            >
                <img 
                  src="https://framerusercontent.com/images/wgPubW0afeXc9GsBa6lllsXGuHQ.jpeg" 
                  alt="Tropical beach" 
                  className="w-full h-[450px] object-cover"
                />
                 <div className="px-2 text-left">
                    <h3 className="text-[#153f41] text-2xl font-medium font-serif mb-4 uppercase tracking-wide">
                        CULTURE
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-sans font-light text-sm md:text-base">
                        From morning yoga decks to evening community gatherings, every space nurtures a 
                        culture of togetherness and meaningful relationships. Supported by smart security 
                        systems and a gated environment.
                    </p>
                </div>
            </motion.div>

            {/* Right Column - Connection */}
            <div className="relative md:mt-10 flex flex-col gap-6">
                 <img 
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Resort architecture" 
                  className="w-full h-[450px] object-cover"
                />
                <div className="px-2 text-left">
                    <h3 className="text-[#153f41] text-2xl font-medium font-serif mb-4 uppercase tracking-wide">
                        CONNECTION
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-sans font-light text-sm md:text-base ">
                        Families enjoy peace of mind while experiencing the warmth of a close-knit neighborhood. 
                        Here, community isn't accidental-it's intentionally woven into the fabric of everyday life.
                    </p>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Story;