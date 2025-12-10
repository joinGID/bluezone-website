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
      <p className="md:text-base text-sm font-serif font-light tracking-wide text-gray-700 mb-4 ">
        Welcome to Mariven
      </p>

      {/* Main title */}
      <h1 className="text-3xl md:text-5xl font-serif font-light text-[#153f41] leading-tight mb-8 ">
        Where Luxury Meets <br /> the Ocean Breeze
      </h1>

      {/* Greeting */}
      <p className="md:text-sm text-xs font-light font-serif text-gray-700 mb-6">
        Dear Valued Guest,
      </p>

      {/* Body paragraphs */}
      <p className="max-w-2xl  md:text-sm text-xs font-medium mx-auto text-gray-700 leading-relaxed mb-6 ">
        Welcome to Mariven, your beachfront sanctuary where the rhythms <br className='hidden md:block'/>
        of the ocean and the warmth of our hospitality create a stay like no <br className='hidden md:block'/>other.
      </p>

      <p className="max-w-2xl md:text-sm text-xs font-sans font-light mx-auto text-gray-700 leading-relaxed mb-6">
        Our passion for service and attention to detail are the heart  of <br className='hidden md:block'/>everything 
        we do. Please feel free to reach out to any member of <br className='hidden md:block'/> our team — or to me 
        personally — if there’s anything we can do to <br className='hidden md:block'/>make your stay even more exceptional.
      </p>

      <p className="max-w-2xl  md:text-sm text-xs font-sans font-light mx-auto text-gray-700 leading-relaxed mb-12">
        Thank you for choosing Mariven. We can’t wait to share our little <br /> 
        piece of paradise with you.
      </p>

      {/* Closing */}
      <p className="text-gray-700 mb-6 text-sm font-medium">Warmest regards,</p>

      {/* Signature */}
      <Image
        src="/signature.avif" 
        alt="Signature" 
        className="mx-auto "
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


 
  