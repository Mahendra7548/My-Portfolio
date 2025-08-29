import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    { 
      title: "Chat App", 
      desc: "Real-time chat application using MERN + Socket.io", 
      link: "#" 
    },
    { 
      title: "Portfolio Website", 
      desc: "Personal portfolio built with React & Tailwind CSS", 
      link: "#" 
    },
    { 
      title: "E-Commerce App", 
      desc: "Full MERN stack e-commerce website with payments", 
      link: "#" 
    },
    { 
      title: "Blog Platform", 
      desc: "MERN blog app with authentication & admin panel", 
      link: "#" 
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 
                       hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-3">{p.title}</h3>
            <p className="text-gray-200 mb-5">{p.desc}</p>
            <a
              href={p.link}
              className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white px-5 py-2 rounded-lg shadow-md transition-all duration-300"
            >
              🔗 View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
