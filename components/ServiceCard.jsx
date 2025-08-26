
export default function ServiceCard({ title, description, href }) {
  return (
    <a href={href} className="block bg-white rounded-xl shadow p-6 hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
      <p className="mt-2 text-sm text-gray-700">{description}</p>
      <p className="mt-3 text-blue-800 text-sm underline">Learn more →</p>
    </a>
  );
}
