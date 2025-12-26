import AboutCarousel from "@/src/modules/about/container/AboutCarousel";
import RoomCard from "../../modules/rooms/components/RoomCard";

export const metadata = {
    title: "Villas & Living Spaces",
    description: "Choose your dream home from our collection of Neura, Quantra, Aurexa, and Lynora villas at BlueZone Manjeri.",
};
export default function RoomDetails() {
    return (
        <div>
            <AboutCarousel />
            <RoomCard />
        </div>
    );
}