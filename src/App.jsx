import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

import CertificationsTools from './components/CertificationsTools';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-sans antialiased text-gray-900 dark:text-white transition-colors duration-300">
      <ThemeToggle />
      <Header />
      <Skills />

      <Experience />
      <CertificationsTools />
      <Education />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
