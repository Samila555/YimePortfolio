import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Certifications } from './components/sections/Certifications';
import { Gallery } from './components/sections/Gallery';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <ScrollProgress />
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-secondary text-slate-800 dark:text-slate-100 transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
