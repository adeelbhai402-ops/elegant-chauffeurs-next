
export default function Button({ href = "#", children }) {
  return (
    <a href={href} className="inline-block bg-blue-800 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700">
      {children}
    </a>
  );
}
