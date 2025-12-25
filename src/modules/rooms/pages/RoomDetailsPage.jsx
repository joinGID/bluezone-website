"use client";
import React from 'react'
import { useParams } from 'next/navigation'
import RoomHero from '../container/RoomHero'
import RoomAbout from '../container/RoomAbout'
import RoomCarousle from '../container/RoomCarousle'
import RoomFacilities from '../container/RoomFacilities'
import RoomInfo from '../container/RoomInfo'
import RoomQuestions from '../container/RoomQuestions'
import { rooms } from '../constants/roomConstants'

function RoomDetails() {
  const {room} = useParams();
  console.log(room);

  const roomData = rooms.find((item) => item.slug === room);

  return (
    <div>
      <RoomHero heroImage={roomData.image} />
      <RoomAbout roomData={roomData} />
      <RoomCarousle images={roomData?.images} />
      <RoomFacilities roomData={roomData?.amenities} />
      <RoomInfo  />
      <RoomQuestions />
    </div>
  )
}

export default RoomDetails