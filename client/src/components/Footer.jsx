import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side */}
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-indigo-400 font-semibold">Mahendra Singh</span>. All Rights Reserved.
        </p>

        {/* Right Side */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            LinkedIn
          </a>
          <a href="mailto:mahnderbisht218@gmail.com" className="hover:text-white transition">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
