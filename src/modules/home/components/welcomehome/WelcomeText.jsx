import Image from "next/image";
import React from "react";

function WelcomeText() {
  return (
    <section className="md:py-20 py-10 px-6 text-center">
      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/logos/blueZoneLogo1.png"
          alt="Blue Zone Logo"
          className="mx-auto"
          width={100}
          height={100}
        />
      </div>

      {/* Small heading */}
      <h1 className="md:text-base text-sm font-serif tracking-[0.2em] text-habitat/70 mb-6 uppercase">
        Welcome to Blue Zone Habitat
      </h1>

      {/* Main title */}
      <h1 className="text-3xl md:text-5xl font-serif text-habitat leading-tight mb-10">
        Where Luxury Meets <br /> the Ocean Breeze
      </h1>

      {/* Greeting */}
      <p className="md:text-sm text-xs font-serif text-sage mb-6 tracking-wide">
        Dear Valued Guest,
      </p>

      {/* Body paragraphs */}
      <p className="max-w-xl md:text-sm text-xs mx-auto text-sage leading-loose mb-6 tracking-wide">
        Welcome to Blue Zone — a serene habitat thoughtfully designed
        around nature, science, and timeless Blue Zone principles. Here,
        sunlight, fresh air, water, architecture, and community come together to
        create a way of living that feels calmer, healthier, and more enduring.
      </p>

      <p className="max-w-xl md:text-sm text-xs font-serif mx-auto text-sage leading-loose mb-6 tracking-wide">
        Our villas are crafted with intention — spaces that encourage rest,
        connection, and balance. Every detail has been carefully considered to
        support your well-being, allowing you to unwind effortlessly while
        remaining deeply connected to the rhythm of the coast.
      </p>

      <p className="max-w-xl md:text-sm text-xs font-serif mx-auto text-sage leading-loose mb-10 tracking-wide">
        Whether you are here to pause, celebrate, or simply breathe more freely,
        we invite you to experience a stay where wellness is not an amenity, but
        the foundation of everything around you.
      </p>

      {/* Philosophy quote */}
      <p className="max-w-xl mx-auto text-sm md:text-base font-serif italic text-habitat leading-relaxed mb-12">
        “Wellness isn’t an amenity. <br />
        It’s the architecture of your life.”
      </p>

      {/* Closing */}
      <p className="text-sage mb-6 text-sm font-medium">
        Warmest regards,
      </p>

      {/* Signature */}
      {/* <Image
        src="/landing/sign.png"
        alt="Signature"
        className=" w-[280px] h-[280px] mx-auto "
        width={190}
        height={190}
      /> */}
      <img src="/landing/sign.png" alt="Signature" className="w-[120px] h-[60px] md:w-[160px] md:h-[100px] mx-auto -mt-2 rotate-20" width={190} height={190} />

      {/* Name */}
      <div>
        <p className="text-xl font-serif text-habitat mt-2">
           DR SAHID CHOLAYIL
        </p>
        <p className="md:text-sm text-xs text-aero">
          Chairman
        </p>
      </div>
    </section>
  );
}

export default WelcomeText;
