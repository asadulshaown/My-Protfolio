
// components/ProjectSection.jsx

import React from "react";

const projects = [
  {
    title: "Student Management System (SMS)",
    description: "A Student Management System is a digital platform used to manage student data in schools, colleges or universities.It stores and organizes information like admissions, attendance, grades and personal details.The system simplifies administrative tasks by automating report generation and communication.Teachers, students, and parents can access relevant data through secure portals.It improves efficiency, transparency, and accuracy in academic record management.",
    liveLink: "https://student-management-system-django.onrender.com",
    github: "https://github.com/asadulshaown/Student-Management-System-django-",
  },
  {
    title: "Personal Portfolio",
    description: "The Personal Portfolio is a modern, responsive web application showcasing projects, skills and contact information.Built with React and powered by Vite for fast development and lightning-fast performance.HTML5 provides the semantic structure, while Tailwind CSS ensures a clean, utility-first design.JavaScript handles interactive elements like animations, modals and form validation.Perfect for developers and designers to present their professional profile with speed and style.",
    liveLink: "https://my-protfolio-dusky-ten.vercel.app/",
    github: "https://github.com/asadulshaown/My-Protfolio",
  },
  {
    title: "Mess Management System Software (MMSS)",
    description: "A Mess Management System is a software solution designed to streamline food and meal operations in hostels or canteens.It manages member details, meal entries, daily consumption and expense tracking efficiently.The system automates bill calculations based on individual meal counts.It may offer separate portals for members, managers and cooks for better coordination. If web-based users can access their meal reports and expenses anytime and anywhere.",
    liveLink: "https://mmss-django-3.onrender.com/views/",
    github: "https://github.com/asadulshaown/MMSS",
  },
  {
    title: "Country Find App",
    description: "The Country Find App is an educational tool that helps users learn and identify countries on a world map.Users are challenged to locate countries based on names, flags or capitals, improving their geography skills.It features interactive maps, timed quizzes and score tracking for self-assessment.Ideal for students, travelers and quiz enthusiasts who want to boost their global knowledge.The app offers a fun, visual and engaging way to explore the world from your device.Let me know if it's for a different type of app (like finding the origin of apps) and I’ll adjust accordingly. ",
    liveLink: "https://country-app-chi-eight.vercel.app/",
    github: "https://github.com/asadulshaown/Country-App",
  },
  {
    title: "Temperature Converter App",
    description: "The Temperature Converter App allows users to convert between Celsius, Fahrenheit and Kelvin instantly.Built with React for a dynamic and responsive user experience.HTML5 structures the content, while CSS styles it with a clean and modern interface.JavaScript handles the logic behind real-time temperature conversions.Ideal for students, developers and everyday users needing quick and accurate conversions.Let me know if you want a more technical version or code snippet to go with it.",
    liveLink: "https://temperature-converter-app-lake.vercel.app/",
    github: "https://github.com/asadulshaown/TEMPERATURE-CONVERTER-APP",
  },
  {
    title: "Blood Group Project",
    description: "The Blood Group Project is a web-based platform for managing blood donor and recipient information.Built with Django as the backend framework and SQLite3 as the lightweight database.HTML5 and Bootstrap 5 provide a responsive and mobile-friendly user interface.JavaScript is used for form validation, dynamic content and user interaction.Ideal for blood banks, hospitals or donation campaigns to track and manage blood availability efficiently.",
    liveLink: "https://github.com/asadulshaown/BloodGroup-Project",
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2" data-aos="fade-down">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4" data-aos="fade-up">{project.description}</p>
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
