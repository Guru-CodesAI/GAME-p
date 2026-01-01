import {
  Code2,
  Brain,
  Database,
  Layers,
  Cpu,
  FileCode,
  Terminal,
  Globe,
  GitBranch,
  Sparkles,
  Zap,
  Shield,
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'CORE WEAPONS',
      color: 'cyan',
      skills: [
        { name: 'Python', icon: Code2, level: 85, description: 'Primary arsenal for AI/ML warfare' },
        { name: 'Java', icon: FileCode, level: 75, description: 'Object-oriented combat system' },
        { name: 'C Language', icon: Terminal, level: 70, description: 'Low-level system operations' },
        { name: 'Data Structures', icon: Layers, level: 90, description: 'Algorithmic combat mastery' },
      ],
    },
    {
      category: 'AI ABILITIES',
      color: 'fuchsia',
      skills: [
        { name: 'Machine Learning', icon: Brain, level: 80, description: 'Pattern recognition & prediction' },
        { name: 'Data Analysis', icon: Database, level: 85, description: 'Extract insights from chaos' },
        { name: 'Deep Learning', icon: Cpu, level: 75, description: 'Neural network deployment' },
        { name: 'AI Concepts', icon: Sparkles, level: 80, description: 'Intelligent system design' },
      ],
    },
    {
      category: 'WEB TECH',
      color: 'green',
      skills: [
        { name: 'HTML5', icon: Globe, level: 90, description: 'Structure & semantic markup' },
        { name: 'CSS3', icon: Sparkles, level: 85, description: 'Visual design & animations' },
        { name: 'JavaScript', icon: Zap, level: 80, description: 'Interactive functionality' },
        { name: 'React', icon: Code2, level: 75, description: 'Component-based UI' },
      ],
    },
    {
      category: 'POWER UPS',
      color: 'yellow',
      skills: [
        { name: 'Problem Solving', icon: Shield, level: 88, description: 'Critical thinking under pressure' },
        { name: 'Team Collaboration', icon: GitBranch, level: 92, description: 'Multiplayer coordination' },
        { name: 'Git/GitHub', icon: GitBranch, level: 80, description: 'Version control mastery' },
        { name: 'Adaptability', icon: Sparkles, level: 90, description: 'Quick learning & flexibility' },
      ],
    },
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-fuchsia-950/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500"></div>
          <Shield className="w-8 h-8 text-cyan-400 animate-pulse" />
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
            LOADOUT SYSTEM
          </h2>
          <Zap className="w-8 h-8 text-fuchsia-400 animate-pulse" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-fuchsia-500"></div>
        </div>

        <p className="text-center text-gray-400 mb-12 text-lg font-mono">
          <span className="text-cyan-400">&gt;</span> Hover over abilities to reveal stats{' '}
          <span className="text-fuchsia-400">&lt;</span>
        </p>

        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => {
            const colorMap: Record<string, { border: string; text: string; gradient: string; glow: string }> = {
              cyan: {
                border: 'border-cyan-500/30',
                text: 'text-cyan-400',
                gradient: 'from-cyan-500 to-cyan-600',
                glow: 'from-cyan-500 to-cyan-600',
              },
              fuchsia: {
                border: 'border-fuchsia-500/30',
                text: 'text-fuchsia-400',
                gradient: 'from-fuchsia-500 to-fuchsia-600',
                glow: 'from-fuchsia-500 to-fuchsia-600',
              },
              green: {
                border: 'border-green-500/30',
                text: 'text-green-400',
                gradient: 'from-green-500 to-green-600',
                glow: 'from-green-500 to-green-600',
              },
              yellow: {
                border: 'border-yellow-500/30',
                text: 'text-yellow-400',
                gradient: 'from-yellow-500 to-yellow-600',
                glow: 'from-yellow-500 to-yellow-600',
              },
            };

            const colors = colorMap[category.color];

            return (
              <div key={catIdx}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`h-1 w-12 bg-gradient-to-r ${colors.gradient}`}></div>
                  <h3 className={`text-2xl font-black ${colors.text} tracking-wider`}>
                    {category.category}
                  </h3>
                  <div className={`h-1 flex-1 bg-gradient-to-r ${colors.gradient} opacity-20`}></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.skills.map((skill, skillIdx) => {
                    const Icon = skill.icon;
                    return (
                      <div key={skillIdx} className="group relative">
                        <div
                          className={`absolute -inset-1 bg-gradient-to-r ${colors.glow} rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500`}
                        ></div>
                        <div
                          className={`relative bg-black/90 backdrop-blur-xl border ${colors.border} rounded-xl p-6 hover:border-opacity-70 transition-all transform group-hover:scale-105 group-hover:-translate-y-2 cursor-pointer`}
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div
                              className={`w-14 h-14 bg-gradient-to-br ${colors.gradient} rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}
                            >
                              <Icon className="w-7 h-7 text-black" />
                            </div>
                            <div
                              className={`px-3 py-1 bg-opacity-50 border ${colors.border} rounded-full`}
                            >
                              <span className={`text-xs font-bold ${colors.text}`}>
                                LVL {skill.level}
                              </span>
                            </div>
                          </div>

                          <h4 className="text-xl font-bold text-white mb-2">{skill.name}</h4>

                          <p className="text-sm text-gray-400 mb-4 h-10 group-hover:text-gray-300 transition-colors">
                            {skill.description}
                          </p>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-500 font-mono">PROFICIENCY</span>
                              <span className={`font-bold ${colors.text}`}>{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                              <div
                                className={`h-full bg-gradient-to-r ${colors.gradient} transition-all duration-1000`}
                                style={{ width: `${skill.level}%` }}
                              >
                                <div className="h-full w-full bg-white/20 animate-pulse"></div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 pt-4 border-t border-gray-800 flex items-center justify-between">
                            <span className="text-xs text-gray-600 font-mono">STATUS</span>
                            <div className="flex items-center gap-2">
                              <div className={`w-2 h-2 ${colors.text.replace('text-', 'bg-')} rounded-full animate-pulse`}></div>
                              <span className={`text-xs font-bold ${colors.text}`}>EQUIPPED</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
          <div className="relative bg-black/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 text-center">
            <Sparkles className="w-12 h-12 text-fuchsia-400 mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 mb-2">
              SPECIAL ABILITIES
            </h3>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Competitive Coding • Hackathon Warrior • Fast Learner • Critical Thinker • Creative Problem Solver •
              Tech Explorer • Team Player • Innovation Enthusiast
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
