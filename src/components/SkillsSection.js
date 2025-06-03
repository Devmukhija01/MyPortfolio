import React, { useState } from 'react';
import './SkillsSection.css';
import { FaJsSquare, FaReact, FaCss3Alt, FaJava, FaHtml5, FaGitAlt } from 'react-icons/fa';
import { SiSpring, SiMysql } from 'react-icons/si';
// import { FaJsSquare, FaReact, FaCss3Alt, FaJava, FaGitAlt, FaHtml5 } from 'react-icons/fa';
import { SiTypescript, SiJenkins, SiJira, SiSalesforce, SiApollographql } from 'react-icons/si';


const allSkills = {
  Frontend: [
    { skill: 'HTML5', icon: <FaHtml5 /> },
    { skill: 'CSS3', icon: <FaCss3Alt /> },
    { skill: 'JavaScript', icon: <FaJsSquare /> },
    { skill: 'ReactJS', icon: <FaReact /> },
    { skill: 'TypeScript', icon: <SiTypescript /> }
  ],
  Backend: [
    { skill: 'Java', icon: <FaJava /> },
    { skill: 'JDBC', icon: <SiSpring /> }, // you can replace with a better JDBC icon if desired
    { skill: 'Jenkins', icon: <SiJenkins /> },
    { skill: 'Jira', icon: <SiJira /> }
  ],
  Databases: [
    { skill: 'MySQL', icon: <SiMysql /> }
  ],
  Salesforce: [
    { skill: 'Salesforce Admin', icon: <SiSalesforce /> },
    { skill: 'LWC', icon: <SiSalesforce /> },
    { skill: 'Apex & Advanced Apex', icon: <SiSalesforce /> },
    { skill: 'Triggers', icon: <SiSalesforce /> },
    { skill: 'Sales Cloud', icon: <SiSalesforce /> },
    { skill: 'REST APIs', icon: <SiApollographql /> },
  ],
  Tools: [
    { skill: 'GitHub', icon: <FaGitAlt /> }
  ]
};


const categories = Object.keys(allSkills);

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  return (
    <section className="skills" id='skills'>
      <div className="container">
        <h2>My Skills</h2>

        {/* Category Tabs */}
        <div className="skill-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`tab-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skill-grid">
          {allSkills[activeCategory].map((item, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{item.icon}</div>
              <p>{item.skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
