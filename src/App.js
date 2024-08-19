// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import SocialMediaLinks from './components/SocialMediaLinks';
import Experience from './components/Experience';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <SkillsSection />
      <Experience />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <SocialMediaLinks />
    </div>
  );
};

export default App;
