import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Celebal Technologies',
      role: 'ReactJS Developer',
      duration: 'Jun 2024 - Aug 2024',
      description: 'Worked on developing user interfaces using React.js and Redux.',
      certificateLink: 'https://github.com/Devmukhija01/Certificates/blob/main/Celebal.pdf',
    },
    {
      company: 'CipherBytes Technologies',
      role: 'Java Developer',
      duration: 'May 2024 - Jun 2024',
      description: 'Developed REST APIs using Node.js and Express.',
      certificateLink: 'https://github.com/Devmukhija01/Certificates/blob/main/CipherBytes.pdf',
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
            <a
              href={exp.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="view-certificate-btn"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
