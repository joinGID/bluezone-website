import React from "react";

function RoomHero({heroImage}) {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white bg-amber-50">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            `url('${heroImage}')`,
        }}
      />
      {/* Overlay (dark gradient) */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 max-w-6xl px-6">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium mb-4">Coastal Garden Suite</h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
          Reconnect with nature in this tranquil suite with a <br className="hidden sm:block"/>
          garden patio and soothing ocean sounds.
        </p>
      </div>
    </section>
  );
}

export default RoomHero;



