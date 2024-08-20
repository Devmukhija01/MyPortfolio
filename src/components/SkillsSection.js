import React from 'react';
import './SkillsSection.css'; // Ensure this CSS file is created
import { FaJsSquare, FaReact, FaCss3Alt, FaJava, FaDatabase } from 'react-icons/fa';
import { SiSpring } from 'react-icons/si';

const skillsData = [
  { skill: 'JavaScript', description: 'Experienced in building interactive web applications.', icon: <FaJsSquare /> },
  { skill: 'React', description: 'Skilled in creating dynamic user interfaces with React.', icon: <FaReact /> },
  { skill: 'CSS', description: 'Proficient in styling and designing responsive layouts.', icon: <FaCss3Alt /> },
  { skill: 'Java', description: 'Strong foundation in Java for backend and frontend development.', icon: <FaJava /> },
  { skill: 'MySQL', description: 'Experienced in managing and querying relational databases.', icon: <FaDatabase /> },
  { skill: 'Spring', description: 'Proficient in building robust backend systems with Spring Framework.', icon: <SiSpring /> },
];

const SkillCard = ({ skill, description, icon }) => (
  <div className="skill-card">
    <div className="skill-icon">{icon}</div>
    <h3>{skill}</h3>
    <p>{description}</p>
    <div className="skill-hover">

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
