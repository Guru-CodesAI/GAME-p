import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-black overflow-x-hidden">
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-yellow-500 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />

      <footer className="relative bg-black border-t border-cyan-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm font-mono mb-2">
            <span className="text-cyan-400">&gt;</span> Built with passion by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 font-bold">
              GURUNATHAN V
            </span>
          </p>
          <p className="text-gray-700 text-xs font-mono">© 2025 • Ready Player One</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
