import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company:'Kugelblitz',
      role:'ReactJS Developer',
      duration:'May 2025 - Present',
      description:'',
      certificateLink:''
    },
    {
      company: 'Concret.io',
      role: 'Salesforce Developer',
      duration: 'Jan 2025 - Mar 2025',
      description: 'Gained hands-on experience in Salesforce Development or API Integration',
      certificateLink: 'https://github.com/Devmukhija01/Certificates/blob/main/Salesforce%20Developer%20Training.pdf',
    },
    {
      company: 'Celebal Technologies',
      role: 'ReactJS Developer',
      duration: 'Jun 2024 - Aug 2024',
      description: 'Worked on developing user interfaces using React.js and Redux.',
      certificateLink: 'https://github.com/Devmukhija01/Certificates/blob/main/Celebal.pdf',
    },
    // {
    //   company: 'CipherBytes Technologies',
    //   role: 'Java Developer',
    //   duration: 'May 2024 - Jun 2024',
    //   description: 'Developed REST APIs using Node.js and Express.',
    //   certificateLink: 'https://github.com/Devmukhija01/Certificates/blob/main/CipherBytes.pdf',
    // },
  ];

  return (
    <section className="experience" id='experience'>
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3 className="experience-role">💼 {exp.role}</h3>
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
