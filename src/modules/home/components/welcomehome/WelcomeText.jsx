import Image from 'next/image'
import React from 'react'

function WelcomeText() {
  return (
    <section className="md:py-20 py-10 px-6 text-center">

      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/logo.avif"
          alt="Logo"
          className="mx-auto"
          width={25}
          height={25}
        />
      </div>

      {/* Small heading */}
      <h1 className="md:text-base text-sm font-serif font-light tracking-wide text-gray-700 mb-4 ">
        Welcome to Blue zone
      </h1>

      {/* Main title */}
      <h1 className="text-3xl md:text-5xl font-serif font-light text-[#153f41] leading-tight mb-8 ">
        Where Luxury Meets <br /> the Ocean Breeze
      </h1>

      {/* Greeting */}
      <p className="md:text-sm text-xs font-light font-serif text-gray-700 mb-6">
        Dear Valued Guest,
      </p>

      {/* Body paragraphs */}
      <p className="max-w-xl md:text-sm text-xs font-medium mx-auto text-gray-700 leading-relaxed mb-6">
        Welcome to Blue Zone, your beachfront sanctuary where the ocean’s rhythm and our warm hospitality create a stay like no other.
      </p>

      <p className="max-w-xl md:text-sm text-xs font-sans font-light mx-auto text-gray-700 leading-relaxed mb-8">
        We are dedicated to making every moment exceptional. Please feel free to reach out to our team for anything you need specifically.
      </p>

      {/* Closing */}
      <p className="text-gray-700 mb-6 text-sm font-medium">Warmest regards,</p>

      {/* Signature */}
      <Image
        src="/signature.avif"
        alt="Signature"
        className="mx-auto"
        width={150}
        height={100}
      />

      {/* Name */}
      <div>
        <p className="text-xl font-serif font-light text-[#153f41]">John Doe</p>
        <p className="md:text-sm text-xs text-[#bfa58e]">General Manager</p>
      </div>
    </section>
  )
}

export default WelcomeText



