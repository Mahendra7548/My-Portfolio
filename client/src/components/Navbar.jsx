// src/components/Navbar.jsx
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-lg fixed w-full top-0 z-50">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <div className="space-x-6">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-80} // adjust for navbar height
          className="cursor-pointer hover:text-yellow-400"
        >
          Home
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer hover:text-yellow-400"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer hover:text-yellow-400"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
