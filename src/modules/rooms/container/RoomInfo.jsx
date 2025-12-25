import React from "react";
import Accordion from "../components/roominfo/Accordion";

const guidelines = [
  {
    title: "Security & Access",
    content: (
      <>
        <p>
          The community is secured by a grand entrance gate and monitored access,
          ensuring a calm, private, and safe living environment for all residents.
        </p>
        <p>
          Entry to the exclusive smart villas is continuously monitored to
          maintain privacy and peace of mind.
        </p>
      </>
    ),
  },
  {
    title: "The Blue Zone Philosophy",
    content: (
      <>
        <p>
          Life at Blue Zone is inspired by a philosophy that promotes wellness,
          balance, and long-term well-being.
        </p>
        <p>
          Residents are encouraged to embrace a connected community lifestyle
          that blends modern living with mindful simplicity.
        </p>
      </>
    ),
  },
  {
    title: "Smart Home Features",
    content: (
      <>
        <p>
          Select villas are equipped with AI-enabled, future-ready smart home
          systems designed for comfort and efficiency.
        </p>
        <p>
          Thoughtfully planned layouts maximize natural ventilation, privacy,
          and seamless indoor-outdoor living.
        </p>
      </>
    ),
  },
  {
    title: "Sustainability & Environment",
    content: (
      <>
        <p>
          Sustainability is at the heart of the community, with design choices
          focused on long-term environmental responsibility.
        </p>
        <p>
          Landscaped frontages and green setbacks are preserved to enhance
          airflow, openness, and natural harmony throughout the township.
        </p>
      </>
    ),
  },
];

function RoomInfo({ roomData }) {
  return (
    <section className="bg-[#f6f1ed] py-12 md:py-20 px-6 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left */}
        <h2 className="text-3xl md:text-5xl font-serif text-[#153f41] leading-tight">
          Community & <br /> Villa Guidelines
        </h2>

        {/* Right */}
        <div className="space-y-3">
          {guidelines.map((item, index) => (
            <Accordion key={index} title={item.title}>
              {item.content}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoomInfo;
