import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Celebal Technologies',
      role: 'ReactJS Developer',
      duration: 'Jun 2024 - Aug 2024',
      description: 'Worked on developing user interfaces using React.js and Redux.',
    },
    {
      company: 'CipherBytes Technologies',
      role: 'Java Developer',
      duration: 'May 2024 - Jun 2024',
      description: 'Developed REST APIs using Node.js and Express.',
    },
    // Add more experiences as needed
  ];

  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3 className="experience-role">{exp.role}</h3>
            <p className="experience-company">{exp.company}</p>
            <p className="experience-duration">{exp.duration}</p>
            <p className="experience-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
