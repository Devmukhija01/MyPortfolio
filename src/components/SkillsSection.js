// src/components/SkillsSection.js

import React from 'react';
import './SkillsSection.css'; // Ensure this CSS file is created

const skillsData = [
  { skill: 'JavaScript', description: 'Experienced in building interactive web applications.', icon: 'path/to/js-icon.png' },
  { skill: 'React', description: 'Skilled in creating dynamic user interfaces with React.', icon: 'path/to/react-icon.png' },
  { skill: 'CSS', description: 'Proficient in styling and designing responsive layouts.', icon: 'path/to/css-icon.png' },
  { skill: 'HTML', description: 'Strong foundation in semantic HTML and web standards.', icon: 'path/to/html-icon.png' },
  { skill: 'Node.js', description: 'Capable of developing server-side applications with Node.js.', icon: 'path/to/nodejs-icon.png' },
  { skill: 'Python', description: 'Familiar with Python for scripting and automation tasks.', icon: 'path/to/python-icon.png' },
];

const SkillCard = ({ skill, description, icon }) => (
  <div className="skill-card">
    <img src={icon} alt={`${skill} icon`} className="skill-icon" />
    <h3>{skill}</h3>
    <p>{description}</p>
    <div className="skill-hover">
      <p>Click to learn more</p>
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section className="skills">
      <div className="container">
        <h2>My Skills</h2>
        <div className="skill-grid">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill.skill}
              description={skill.description}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
