import RoomDetailsPage from "../../../modules/rooms/pages/RoomDetailsPage";
import { rooms } from "../../../modules/rooms/constants/roomConstants";

export async function generateMetadata({ params }) {
    const { room } = await params;
    const roomData = rooms.find((r) => r.slug === room);

    if (!roomData) {
        return {
            title: "Room Not Found",
        };
    }

    return {
        title: roomData.name,
        description: roomData.description || `Discover more about ${roomData.name} at BlueZone.`,
        openGraph: {
            title: roomData.name,
            description: roomData.description,
            images: [roomData.image],
        },
    };
}

export default function RoomDetails() {
    return (
        <div>
            <RoomDetailsPage />

        </div>
    );
}