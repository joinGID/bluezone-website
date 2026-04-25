import AboutCarousel from "@/src/modules/about/container/AboutCarousel";
import RoomCard from "../../modules/rooms/components/RoomCard";

export const metadata = {
  title: "Villas & Living Spaces — Neura, Quantra, Aurexa & Lynora",
  description:
    "Choose your dream home from our exclusive collection of Neura, Quantra, Aurexa, and Lynora eco-luxury villas at BlueZone Habitat, Manjeri, Kerala.",
  openGraph: {
    title: "Villas & Living Spaces | BlueZone Habitat",
    description:
      "Discover premium villa designs — Neura, Quantra, Aurexa, and Lynora — at BlueZone Habitat, Manjeri.",
  },
};
export default function RoomDetails() {
    return (
        <div>
            <AboutCarousel />
            <RoomCard />
        </div>
    );
}