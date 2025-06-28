
// components/ProjectSection.jsx

import React from "react";

const projects = [
  {
    title: "Student Management System (SMS)",
    description: "A Django-based CRUD web app for managing student records with SQLite.",
    liveLink: "https://student-management-system-django.onrender.com",
    github: "https://github.com/asadulshaown/Student-Management-System-django-",
  },
  {
    title: "Personal Portfolio",
    description: "A responsive portfolio website built using React and Tailwind CSS.",
    liveLink: "https://my-protfolio-dusky-ten.vercel.app/",
    github: "https://github.com/asadulshaown/My-Protfolio",
  },
  {
    title: "Mess Management System Software (MMSS)",
    description: "A Django app to calculate meals, costs, and manager balance for hostels.",
    liveLink: "###",
    github: "https://github.com/asadulshaown/MMSS",
  },
  {
    title: "Country Find App",
    description: "A Django App To Find Country ",
    liveLink: "https://country-app-chi-eight.vercel.app/",
    github: "https://github.com/asadulshaown/Country-App",
  },
  {
    title: "Temperature Converter App",
    description: "Temperature Converter App",
    liveLink: "https://temperature-converter-app-lake.vercel.app/",
    github: "https://github.com/asadulshaown/TEMPERATURE-CONVERTER-APP",
  },
  {
    title: "Blood Group Project",
    description: "Blood Group Project",
    liveLink: "###",
    github: "https://github.com/asadulshaown/BloodGroup-Project",
  },

];

const ProjectSection = () => {
  return (
    <section id="projects" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          My Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                >
                  Live Preview
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
