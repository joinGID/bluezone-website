import React from 'react'
import Accordion from '../components/roominfo/Accordion'

function RoomQuestions() {
  return (
    <section className="bg-[#f6f1ed] py-10 md:pt-20 px-6 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/** Left-side */}
        <h2 className="md:text-5xl text-3xl font-serif text-[#153f41] text-left">
          Frequently <br/> Asked <br/> Questions
        </h2>
        {/** Right-side */}
        <div>
          <Accordion title="What time is check-in and check-out?">
            <p>Check-in begins at 3:00 PM, and check-out is at 11:00 AM. Early check-in or late check-out requests can be accommodated based on availability.</p>
          </Accordion>
          <Accordion title="Is parking available at the hotel?">
            <p>
              Yes, we offer complimentary on-site parking for all guests. Valet service is also available upon request.
            </p>
          </Accordion>
          <Accordion title="Do you allow pets?">
            <p>Yes, we’re a pet-friendly hotel! Small dogs (under 40 lbs) are welcome in select room types. A one-time cleaning fee applies.</p>
          </Accordion>
          <Accordion title="Is breakfast included with the stay?">
            <p>Complimentary breakfast is included for guests staying in select suites. À la carte breakfast is also available at our on-site restaurant.</p>
          </Accordion>
          <Accordion title="Do the rooms have ocean views?">
            <p>Many of our rooms and suites offer stunning ocean or beach views. Be sure to check room descriptions when booking.</p>
          </Accordion>
          <Accordion title="Can I cancel or change my reservation?">
            <p>Yes, we offer flexible cancellation policies depending on your booking type. Please review the terms at checkout or contact our reservations team for details.</p>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default RoomQuestions