// src/components/ProjectsSection.js
import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React, including user authentication, product listings, and a checkout system.',
      link: 'https://github.com/Devmukhija01/Eco01.git',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my skills, projects, and experience.',
      link: 'https://github.com/yourprofile/portfolio-website',
    },
    {
        title: 'Chatting Application',
        description: 'It is a chatting Application built by using Java and Socket Programming.',
        link: 'https://github.com/Devmukhija01/Chatting-Application.git',
      },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
