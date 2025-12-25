import React from "react";
import Accordion from "../components/roominfo/Accordion";

const faqs = [
  {
    title: "What types of villas are available?",
    content: (
      <p>
        We offer four thoughtfully designed villa typologies:
        <strong> Neura</strong> (3 BHK family residences),
        <strong> Quantra</strong> (4 BHK homes focused on togetherness),
        <strong> Aurexa</strong> (4 BHK luxury villas with private study),
        and <strong> Lynora</strong> (ultra-luxury 5 BHK villas).
      </p>
    ),
  },
  {
    title: "What amenities are provided in the township?",
    content: (
      <p>
        Blue Zone Habitat features over 50 premium amenities, including a luxury
        clubhouse, indoor sports facilities with an integrated restaurant,
        professional football turf, landscaped zones, and a dedicated business
        park.
      </p>
    ),
  },
  {
    title: "Is there educational or professional support within the community?",
    content: (
      <p>
        Yes. The township includes an on-site Entrepreneur’s Business School,
        designed to encourage learning, innovation, and professional growth
        within the community.
      </p>
    ),
  },
  {
    title: "How large is the community?",
    content: (
      <p>
        The habitat consists of 51 exclusive villas spread across 5.8 acres,
        ensuring low density, open surroundings, and a high level of privacy.
      </p>
    ),
  },
  {
    title: "Are the villas customizable?",
    content: (
      <p>
        Yes. Select villas, particularly the <strong>Lynora</strong> residences,
        offer bespoke customization options, including adaptable layouts and
        multipurpose spaces tailored to individual preferences.
      </p>
    ),
  },
  {
    title: "What makes the location sustainable?",
    content: (
      <p>
        The community is built around a sustainability-driven vision, focusing
        on responsible development, long-term livability, and a future-ready
        ecosystem designed by and for the local region.
      </p>
    ),
  },
];

function RoomQuestions() {
  return (
    <section className="bg-[#f6f1ed] py-12 md:py-20 px-6 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left */}
        <h2 className="text-3xl md:text-5xl font-serif text-[#153f41] leading-tight">
          Frequently <br /> Asked <br /> Questions
        </h2>

        {/* Right */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.title}>
              {faq.content}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoomQuestions;
