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
import Chatbot from './components/Chatbot';
import VoiceControl from './components/VoiceControl';
// import {useState} from 'react'
// import ThemeToggle from './ThemeToggle';
const App = () => {
  return (
    <div className="App">
      {/* <ThemeToggle/> */}
      <VoiceControl/>
      <Header />
      <HeroSection />
      <SkillsSection />
      <Experience />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <SocialMediaLinks />
      <Chatbot/>
    </div>
  );
};

export default App;
