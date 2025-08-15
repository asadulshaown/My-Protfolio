// components/SkillSection.jsx

import React from "react";

const skills = [
  { name: "HTML", color: "text-orange-600", icon: "🌐" },
  { name: "CSS", color: "text-blue-600", icon: "🎨" },
  { name: "JavaScript", color: "text-yellow-500", icon: "🧠" },
  { name: "React", color: "text-cyan-500", icon: "⚛️" },
  { name: "Tailwind CSS", color: "text-sky-500", icon: "💨" },
  { name: "Django", color: "text-green-700", icon: "🖥️" },
  { name: "SQLite", color: "text-gray-600", icon: "💾" },
  { name: "Git", color: "text-red-600", icon: "🔧" },
];

const SkillSection = () => {
  return (
    <section id="skills" className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300" data-aos="flip-down"
            >
              <div className={`text-4xl mb-3 ${skill.color}`}>{skill.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700" data-aos="fade-down">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
