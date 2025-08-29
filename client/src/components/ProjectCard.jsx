// src/components/ProjectCard.jsx
export default function ProjectCard({ title, desc, link }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{desc}</p>
      <a href={link} target="_blank" rel="noopener noreferrer"
        className="text-blue-600 hover:underline">
        View Project →
      </a>
    </div>
  );
}
