import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CertificationsTools from './components/CertificationsTools';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-sans antialiased text-gray-900 dark:text-white transition-colors duration-300">
      <ThemeToggle />
      <Header />
      <Skills />
      <Projects />
      <Experience />
      <CertificationsTools />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
