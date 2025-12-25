import Image from "next/image";

export default function LocationConnectivity() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#153f41] mb-6">
            The Right Connection
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl mb-10">
            Manjeri is more than a location — it is a strategic advantage.
            Situated at the heart of Malappuram, Manjeri is emerging as North
            Kerala’s next growth corridor. Thoughtfully connected yet surrounded
            by nature, it represents a future-ready destination that blends
            urban opportunity with cultural depth and green living.
          </p>

          {/* CONNECTIVITY ICONS */}
          <div className="grid grid-cols-3 gap-6 max-w-md">
            {[
              "Airport Access",
              "Rail Connectivity",
              "Medical Hub",
              "Urban Centre",
              "Sports & Culture",
              "Green Zones",
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center">
                  {/* Replace with SVG/Icon */}
                  <span className="text-gray-500 text-sm">Icon</span>
                </div>
                <p className="text-xs text-gray-500 tracking-wide">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT MAP */}
        <div className="flex justify-center">
          <Image
            src="/world-map.png" // replace with your asset
            alt="Global Connectivity"
            width={520}
            height={320}
            className="opacity-90"
          />
        </div>
      </div>

      {/* LOCAL MAP */}
      <div className="mt-20 flex justify-center">
        <Image
          src="/manjeri-map.png" // replace with your map image
          alt="Manjeri Connectivity Map"
          width={420}
          height={260}
          className="rounded-md shadow-sm"
        />
      </div>
    </section>
  );
}
