import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './atoms/navbar.jsx';
import Home from './components/home.jsx';
import Skills from './components/skills.jsx';
import Experience from './components/experience.jsx';
import Achievements from './components/achivements.jsx';
import Projects from './components/projects.jsx';
import './App.css';

function App() {
  return (
    <>
      <Navbar /> 
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
