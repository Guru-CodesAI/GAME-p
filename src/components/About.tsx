import { User, Trophy, Target, Zap, Heart, Shield, Award, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function About() {
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const stats = [
    { name: 'Python Mastery', value: 85, color: 'cyan', icon: Zap },
    { name: 'Java Proficiency', value: 75, color: 'fuchsia', icon: Shield },
    { name: 'Data Structures', value: 90, color: 'green', icon: Target },
    { name: 'AI & ML Concepts', value: 80, color: 'yellow', icon: Trophy },
    { name: 'Problem Solving', value: 88, color: 'red', icon: Award },
    { name: 'Team Collaboration', value: 92, color: 'cyan', icon: Heart },
  ];

  const attributes = [
    { label: 'LEVEL', value: '2', subtitle: 'Second Year Student' },
    { label: 'XP', value: '8.14', subtitle: 'CGPA Score' },
    { label: 'CLASS', value: 'AI/DS', subtitle: 'Specialization' },
    { label: 'FACTION', value: 'MEC', subtitle: 'Mahendra Engineering' },
  ];

  return (
    <section id="about-section" className="relative min-h-screen py-20 px-4 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black"></div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500"></div>
          <User className="w-8 h-8 text-cyan-400 animate-pulse" />
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
            PLAYER PROFILE
          </h2>
          <User className="w-8 h-8 text-fuchsia-400 animate-pulse" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-fuchsia-500"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-black/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400">CHARACTER INFO</h3>
                  <p className="text-sm text-gray-500 font-mono">Player Statistics</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {attributes.map((attr, idx) => (
                  <div
                    key={idx}
                    className="bg-cyan-950/20 border border-cyan-500/20 rounded-lg p-4 hover:border-cyan-500/50 transition-all hover:scale-105"
                  >
                    <p className="text-xs text-cyan-400 font-mono mb-1">{attr.label}</p>
                    <p className="text-3xl font-black text-white mb-1">{attr.value}</p>
                    <p className="text-xs text-gray-500">{attr.subtitle}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-cyan-950/30 to-fuchsia-950/30 rounded-lg border border-cyan-500/20">
                <p className="text-sm text-gray-300 leading-relaxed">
                  <span className="text-cyan-400 font-bold">Mission Brief:</span> Aspiring AI & Data Science Engineer
                  on a quest to leverage cutting-edge technologies to solve real-world challenges.
                </p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-black/90 backdrop-blur-xl border border-fuchsia-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-fuchsia-400">POWER STATS</h3>
                  <p className="text-sm text-gray-500 font-mono">Skill Attributes</p>
                </div>
              </div>

              <div className="space-y-4">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  const colorMap: Record<string, string> = {
                    cyan: 'from-cyan-500 to-cyan-600',
                    fuchsia: 'from-fuchsia-500 to-fuchsia-600',
                    green: 'from-green-500 to-green-600',
                    yellow: 'from-yellow-500 to-yellow-600',
                    red: 'from-red-500 to-red-600',
                  };

                  return (
                    <div key={idx} className="group/stat">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-fuchsia-400 group-hover/stat:animate-pulse" />
                          <span className="text-sm font-bold text-gray-300">{stat.name}</span>
                        </div>
                        <span className="text-sm font-bold text-fuchsia-400">{stat.value}%</span>
                      </div>
                      <div className="h-3 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                        <div
                          className={`h-full bg-gradient-to-r ${colorMap[stat.color]} transition-all duration-1000 ease-out`}
                          style={{
                            width: statsVisible ? `${stat.value}%` : '0%',
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center justify-between p-4 bg-gradient-to-r from-green-950/30 to-cyan-950/30 rounded-lg border border-green-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-green-400">COMBAT READY</span>
                </div>
                <span className="text-xs text-gray-500 font-mono">All systems operational</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Trophy, label: 'HACKATHONS', value: '5+', color: 'yellow' },
            { icon: Target, label: 'PROJECTS', value: '10+', color: 'cyan' },
            { icon: Zap, label: 'TECHNOLOGIES', value: '15+', color: 'fuchsia' },
            { icon: Award, label: 'CERTIFICATIONS', value: '8+', color: 'green' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative group cursor-pointer"
              >
                <div className="absolute -inset-1 bg-gradient-to-r opacity-25 group-hover:opacity-75 transition duration-300 rounded-xl blur"
                  style={{
                    backgroundImage: `linear-gradient(to right, var(--color-start), var(--color-end))`,
                  }}
                ></div>
                <div className="relative bg-black/90 backdrop-blur-xl border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all transform group-hover:scale-105">
                  <Icon className="w-8 h-8 text-fuchsia-400 mb-3 group-hover:animate-pulse" />
                  <p className="text-3xl font-black text-white mb-1">{item.value}</p>
                  <p className="text-xs text-gray-500 font-mono">{item.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
