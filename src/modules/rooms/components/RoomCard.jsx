/**
 * Room Card Component
 * Displays information about a single room
 */

import { Bed, CircleUserRound, VectorSquare } from "lucide-react";
import { rooms } from "../constants/roomConstants";
import Link from "next/link";

export default function RoomCard() {
  return (
    <div className="p-25 grid grid-cols-1 md:grid-cols-2 gap-10 bg-linear-to-r ">
      {rooms?.map((item, index) => (
        <Link
          key={index}
          href={"/rooms" + item.name}
          style={{ backgroundImage: `url(${item.image})` }}
          className="group relative bg-cover bg-center h-[550px] overflow-hidden "
        >
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/90 to-transparent" />

          <div className="absolute bottom-0 p-5">
            <div>
              <h2>{item.name}</h2>
              <div className="flex justify-between gap-2 text-base mt-2">
                <h2 className="flex items-center gap-2">
                  <VectorSquare />
                  {item.roomSize}
                </h2>
                <h2 className="flex items-center gap-2">
                  <Bed /> {item.bedName}
                </h2>
                <h2 className="flex items-center gap-2">
                  <CircleUserRound /> {item.GuestSize}
                </h2>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex">
                <h2 className="text-base">Starting at</h2>
              </div>
              <div className="flex">
                <h2>
                  ${item.amount} / {item.time}
                </h2>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
