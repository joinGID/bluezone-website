/**
 * Room Card Component
 * Displays information about a single room
 */

export default function RoomCard({ room }) {
  return (
    <div className="rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
      <p className="text-gray-600 mb-4">{room.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-blue-600">${room.price}</span>
        <span className={`px-3 py-1 rounded-full text-sm ${
          room.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {room.available ? 'Available' : 'Booked'}
        </span>
      </div>
    </div>
  );
}
