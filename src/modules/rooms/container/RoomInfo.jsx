import React from "react";
import Accordion from "../components/roominfo/Accordion";

function RoomInfo() {
  return (
    <section className="bg-[#f6f1ed] py-10 md:pt-20 px-6 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/** Left-side */}
        <h2 className="md:text-5xl text-3xl font-serif text-[#153f41] text-left">
          Policies & <br /> Check-in Info
        </h2>
        {/** Right-side */}
        <div>
          <Accordion title="Check-In & Check-Out">
            <p>Check-In: From 3:00 PM</p>
            <p>Check-Out: By 11:00 AM</p>
            <p>
              Early check-in and late check-out may be available upon request
              (fees may apply).
            </p>
          </Accordion>
          <Accordion title="Cancellation Policy">
            <p>
              Flexible Rate: Free cancellation up to 72 hours before arrival.
            </p>
            <p>
              Non-Refundable Rate: No refunds or changes allowed after booking.
            </p>
            <p> No-shows will be charged the full stay.</p>
            <p> We recommend travel insurance for peace of mind.</p>
          </Accordion>
          <Accordion title="Check-In & Check-Out">
            <p>Small pets (under 20 lbs) are welcome in select rooms.</p>
            <p>A one-time $75 cleaning fee applies per pet.</p>
            <p>Limit: 2 pets per room.</p>
            <p>
              Pets must be leashed in public areas and cannot be left
              unattended.
            </p>
          </Accordion>
          <Accordion title="Check-In & Check-Out">
            <p>All rooms and suites are 100% smoke-free.</p>
            <p>
              A $250 cleaning fee will apply if smoking is detected in the room.
            </p>
            <p>
              Designated outdoor smoking areas are available near the garden
              terrace.
            </p>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default RoomInfo;
