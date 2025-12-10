import React from 'react'
import RoomHero from '../container/RoomHero'
import RoomAbout from '../container/RoomAbout'
import RoomCarousle from '../container/RoomCarousle'
import RoomFacilities from '../container/RoomFacilities'
import RoomInfo from '../container/RoomInfo'
import RoomQuestions from '../container/RoomQuestions'

function RoomDetails() {
  return (
    <div>
        <RoomHero />
        <RoomAbout />
        <RoomCarousle />
        <RoomFacilities />
        <RoomInfo />
        <RoomQuestions />
    </div>
  )
}

export default RoomDetails