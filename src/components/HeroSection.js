// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';
import myPhoto from './profile.jpg'; // Replace with your photo path

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="details">
        <h1>Hello</h1>
        <p>I’m Dev Mukhija, a Front-End Developer skilled in creating engaging and user-friendly web experiences. I specialize in JavaScript, React, CSS, and Java, and have experience with MySQL and Spring.</p>
      </div>
      <div className="photo">
        <img src={myPhoto} alt="My Photo" />
      </div>
    </section>
  );
};

export default HeroSection;
