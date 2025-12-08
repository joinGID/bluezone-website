/**
 * Room Card Component
 * Displays information about a single room
 */

import { Bed, CircleUserRound, VectorSquare } from "lucide-react";

export default function RoomCard() {
  const room = [
    {
      name: "Coastal Garden Suite",
      roomSize: "480 sq.ft",
      bedName: "1 Queen Bed",
      GuestSize: 2,
      amount: 299,
      time: "night",
      image:
        "https://framerusercontent.com/images/Lh4098uZROaaWRk8O5QqMW39k.png",
    },
    {
      name: "Coastal Garden Suite",
      roomSize: "480 sq.ft",
      bedName: "1 Queen Bed",
      GuestSize: 2,
      amount: 299,
      time: "night",
      image:
        "https://framerusercontent.com/images/Lh4098uZROaaWRk8O5QqMW39k.png",
    },
    {
      name: "Coastal Garden Suite",
      roomSize: "480 sq.ft",
      bedName: "1 Queen Bed",
      GuestSize: 2,
      amount: 299,
      time: "night",
      image:
        "https://framerusercontent.com/images/Lh4098uZROaaWRk8O5QqMW39k.png",
    },
    {
      name: "Coastal Garden Suite",
      roomSize: "480 sq.ft",
      bedName: "2 Queen Bed",
      GuestSize: 2,
      amount: 299,
      time: "night",
      image:
        "https://framerusercontent.com/images/Lh4098uZROaaWRk8O5QqMW39k.png",
    },
  ];
  return (
    <div className="p-25 grid grid-cols-1 md:grid-cols-2 gap-10 bg-linear-to-r ">
      {room?.map((item, index) => (
        <div
          style={{ backgroundImage: `url(${item.image})` }}
          className="group relative bg-cover bg-center h-[550px] overflow-hidden "
          key={index}
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
        </div>
      ))}
    </div>
  );
}
