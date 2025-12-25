"use client";
import { Bed, Bath, VectorSquare } from "lucide-react";
import { rooms } from "../constants/roomConstants";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RoomCard() {
  const router = useRouter();
  return (
    <div className="p-4 md:p-12 lg:p-24 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 bg-white">
      {rooms?.map((item, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${item.image})` }}
          className="group relative bg-cover bg-center h-[400px] md:h-[550px] overflow-hidden "
        >
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/90 to-transparent" />

          <div className="absolute w-full bottom-0 p-5 transform translate-y-0 md:translate-y-[84px] transition-transform duration-500 ease-out md:group-hover:translate-y-0">
            <div>
              <h2 className="text-white text-2xl md:text-3xl font-serif mb-2">{item.name}</h2>
              <div className="flex justify-start gap-6 text-white/90 text-sm mt-2 flex-wrap">
                <h2 className="flex items-center gap-2">
                  <VectorSquare size={18} />
                  {item.roomSize}
                </h2>
                {item.amenities?.map((amenity, idx) => (
                  <h2 key={idx} className="flex items-center gap-2">
                    <img src={amenity.icon} alt={amenity.name} className="w-5 h-5 invert opacity-90" />
                    {amenity.name}
                  </h2>
                ))}
              </div>
            </div>

            <div className="mt-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 flex justify-between items-end">
              <div>
                <div className="flex text-white/80 text-sm uppercase tracking-wider mb-1">
                  <h2>Starting at</h2>
                </div>
                <div className="flex text-white text-xl font-serif">
                  <h2>
                    ${item.amount} <span className="text-sm font-sans font-normal opacity-80">/ {item.priceUnit}</span>
                  </h2>
                </div>
              </div>

              <button onClick={() => router.push(`/rooms/${item.slug}`)} className="px-5 py-3 hover:bg-black hover:text-white  border border-white/30 bg-white/10 backdrop-blur-sm text-white text-xs uppercase tracking-widest font-medium group-hover:bg-white group-hover:text-black transition-all duration-300">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
