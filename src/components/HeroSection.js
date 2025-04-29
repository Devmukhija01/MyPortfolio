import React from 'react';
import './HeroSection.css';  // Ensure this CSS file contains the updated styles
import myPhoto from './profile.jpg';  // Your profile image

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="details">
        <h1>Hello, I'm Dev Mukhija</h1>
        <p>
          I'm a passionate Front-End Developer with expertise in creating engaging, user-friendly web experiences. 
          I specialize in <strong>JavaScript, React, CSS</strong>, and <strong>Java</strong>, with hands-on experience 
          working with <strong>MySQL</strong> and <strong>Spring Framework</strong>.
        </p>
      </div>
      <div className="photo">
        <img src={myPhoto} alt="Dev Mukhija" />
      </div>
    </section>
  );
};

export default HeroSection;
