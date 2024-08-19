// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';
import myPhoto from './profile.jpg'; // Replace with your photo path

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="details">
        <h1>Hello, I'm Dev Mukhija</h1>
        <p>I'm a FrontEnd Developer. Welcome to my portfolio where you can find my projects, skills, and more.</p>
      </div>
      <div className="photo">
        <img src={myPhoto} alt="My Photo" />
      </div>
    </section>
  );
};

export default HeroSection;
