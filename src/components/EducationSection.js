// src/components/EducationSection.js
import React from 'react';
import { FaUniversity, FaSchool } from 'react-icons/fa';

import './EducationSection.css';

const EducationSection = () => {
  const educationItems = [
    {
      institution: 'SKIT College',
      degree: 'Bachelor of Technology in Computer Science',
      date: '2021 - 2025',
      icon: <FaUniversity />,
    },
    {
      institution: 'Saraswati High School',
      degree: 'High School',
      date: '2020 - 2021',
      icon: <FaSchool />,
    },
    // Add more items as needed
  ];

  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education-container">
        {educationItems.map((item, index) => (
          <div key={index} className="education-card">
            <div className="icon">{item.icon}</div>
            <h3>{item.institution}</h3>
            <p>{item.degree}</p>
            <p className="date">{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
