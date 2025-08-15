
// components/KnowledgeSection.jsx

import React from 'react';

const skills = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    name: "SQLite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
];

const KnowledgeSection = () => {
  return (
    <section id="knowledge" className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6" >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          My Knowledge
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center" >
          {skills.map((skill, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition" data-aos="flip-down"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700" data-aos="fade-up">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
