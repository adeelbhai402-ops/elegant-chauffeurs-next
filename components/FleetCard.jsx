
export default function FleetCard({ name, seats, img = "/images/vehicle-placeholder.jpg" }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <img src={img} alt={name} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="mt-3 text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600">Seats: {seats}</p>
    </div>
  );
}
