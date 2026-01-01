import { Terminal, Zap, Code2, Brain, Gamepad2, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [glitchText, setGlitchText] = useState('GURUNATHAN V');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.95) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*';
        const randomText = 'GURUNATHAN V'
          .split('')
          .map((char) => (Math.random() > 0.7 ? char : chars[Math.floor(Math.random() * chars.length)]))
          .join('');
        setGlitchText(randomText);
        setTimeout(() => setGlitchText('GURUNATHAN V'), 100);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-black to-fuchsia-950/20"></div>

      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cyan-500 rounded-full animate-pulse"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDuration: Math.random() * 3 + 2 + 's',
              animationDelay: Math.random() * 2 + 's',
            }}
          />
        ))}
      </div>

      <div
        className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'all 0.3s ease-out',
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-6xl">
        <div className="flex items-center justify-center gap-4 mb-6 animate-pulse">
          <Terminal className="w-8 h-8 text-cyan-400" />
          <Zap className="w-10 h-10 text-yellow-400" />
          <Code2 className="w-8 h-8 text-fuchsia-400" />
        </div>

        <div className="relative inline-block">
          <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              {glitchText}
            </span>
          </h1>
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 blur-2xl opacity-50 -z-10"></div>
        </div>

        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500"></div>
          <Brain className="w-6 h-6 text-cyan-400 animate-pulse" />
          <p className="text-2xl md:text-3xl font-bold text-cyan-400 tracking-wider">
            AI & DATA SCIENCE
          </p>
          <Sparkles className="w-6 h-6 text-fuchsia-400 animate-pulse" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-fuchsia-500"></div>
        </div>

        <p className="text-xl md:text-2xl text-gray-400 mb-4 font-mono">
          <span className="text-green-400">&gt;</span> Gamer Mindset{' '}
          <span className="text-cyan-400">|</span> Builder Mentality{' '}
          <span className="text-cyan-400">|</span> Problem Solver
        </p>

        <div className="flex items-center justify-center gap-2 mb-12 text-sm text-gray-500 font-mono">
          <Gamepad2 className="w-4 h-4 text-fuchsia-400 animate-bounce" />
          <span>Level 2 • CGPA 8.14 • XP: Climbing</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-bold text-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <span className="relative flex items-center gap-2">
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              VIEW MISSIONS
            </span>
          </button>

          <button className="group relative px-8 py-4 bg-black border-2 border-fuchsia-500 text-fuchsia-400 font-bold text-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:bg-fuchsia-500/10">
            <span className="relative flex items-center gap-2">
              <Terminal className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              ENTER ARENA
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <p className="text-cyan-400 text-sm font-mono">SCROLL TO BEGIN</p>
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="absolute top-8 left-8 flex flex-col gap-2 font-mono text-xs text-cyan-400">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>SYSTEM ONLINE</span>
        </div>
        <div>FPS: 60</div>
        <div>PING: 12ms</div>
      </div>

      <div className="absolute top-8 right-8 flex flex-col gap-2 font-mono text-xs text-fuchsia-400 text-right">
        <div>ID: GURU_07</div>
        <div>RANK: RISING STAR</div>
        <div className="flex items-center gap-2 justify-end">
          <span>STATUS</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
