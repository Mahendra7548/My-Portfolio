// src/pages/About.jsx
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const About = () => {
  const skills = [
    { name: "React.js", percentage: 85, color: "#61DBFB" },
    { name: "Node.js", percentage: 80, color: "#68A063" },
    { name: "Express.js", percentage: 75, color: "#F0DB4F" },
    { name: "MongoDB", percentage: 70, color: "#4DB33D" },
    { name: "JavaScript", percentage: 90, color: "#F7E018" },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-16
                 bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 text-white"
    >
      {/* Animated Title */}
      <div className="text-center mb-8">
        <TypeAnimation
          sequence={[
            "I am a MERN Stack Developer",
            2000,
            "I build Scalable Web Applications",
            2000,
            "I love Full-Stack Development",
            2000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2rem", fontWeight: "bold", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>

      {/* Profile Info */}
      <div className="max-w-4xl text-center">
        <img
          src="/montyy.jpg"   // ✅ file must be inside client/public/montyy.jpg
          alt="Profile"
          className="w-40 h-45 rounded-full mx-auto border-4 border-indigo-400 shadow-lg mb-6"
        />
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hi, I’m <span className="text-indigo-400 font-semibold">Mahendra Singh</span>, 
          a passionate MERN Stack Developer who enjoys building clean, scalable, 
          and modern web applications.
        </p>
      </div>

      {/* Resume Button */}
      <div className="mt-6 mb-12">
<a
  href="https://drive.google.com/uc?export=download&id=1gJkSPaOd1jLL0pzF8jYvdv22oGWQgeli"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md"
>
  📄 Download Resume
</a>


      </div>

      {/* Skills Section */}
      <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-24 h-24 mb-4">
              <CircularProgressbar
                value={skill.percentage}
                text={`${skill.percentage}%`}
                styles={buildStyles({
                  textColor: "#fff",
                  pathColor: skill.color,
                  trailColor: "#333",
                  textSize: "16px",
                })}
              />
            </div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
