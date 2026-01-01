import { Trophy, Award, Target, Zap, Medal, Star, Crown, Shield } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      year: '2025',
      title: 'HACKATHON DOMINATION',
      items: [
        {
          name: 'Hack4Us Victory',
          description: 'Rank 6 - Team Prime Innovators',
          organizer: 'MSI, New Delhi',
          icon: Crown,
          rarity: 'LEGENDARY',
          color: 'yellow',
        },
        {
          name: 'InnovateX Championship',
          description: 'Rank 13 - Innovation Challenge',
          organizer: 'VIT-AP, Andhra Pradesh',
          icon: Trophy,
          rarity: 'EPIC',
          color: 'fuchsia',
        },
        {
          name: 'CODE-A-THON Warrior',
          description: 'National Level Competition',
          organizer: 'KIOT, Salem',
          icon: Zap,
          rarity: 'RARE',
          color: 'cyan',
        },
      ],
    },
    {
      year: '2025',
      title: 'SKILL ACQUISITION',
      items: [
        {
          name: 'TechTrove\'25 Workshop',
          description: 'Advanced Technology Training',
          organizer: 'SIMATS Engineering, Chennai',
          icon: Award,
          rarity: 'RARE',
          color: 'green',
        },
      ],
    },
    {
      year: '2024-2028',
      title: 'ACADEMIC EXCELLENCE',
      items: [
        {
          name: 'AI & Data Science Journey',
          description: 'CGPA: 8.14/10.0 • Recent: 8.39',
          organizer: 'Mahendra Engineering College',
          icon: Star,
          rarity: 'EPIC',
          color: 'cyan',
        },
        {
          name: 'Outstanding Performance',
          description: 'Grade O in DSA Laboratory',
          organizer: 'Data Structures & Algorithms',
          icon: Medal,
          rarity: 'RARE',
          color: 'fuchsia',
        },
        {
          name: 'Excellence Achievement',
          description: 'Grade A+ in IT Essentials',
          organizer: 'Information Technology',
          icon: Shield,
          rarity: 'RARE',
          color: 'green',
        },
      ],
    },
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-950/5 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-500"></div>
          <Trophy className="w-8 h-8 text-yellow-400 animate-pulse" />
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-fuchsia-500">
            ACHIEVEMENT LOG
          </h2>
          <Medal className="w-8 h-8 text-fuchsia-400 animate-pulse" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-fuchsia-500"></div>
        </div>

        <p className="text-center text-gray-400 mb-16 text-lg font-mono">
          <span className="text-yellow-400">&gt;</span> Progress through the ranks{' '}
          <span className="text-fuchsia-400">&lt;</span>
        </p>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-fuchsia-500 to-yellow-500 opacity-30"></div>

          <div className="space-y-16">
            {achievements.map((period, periodIdx) => (
              <div key={periodIdx} className="relative">
                <div className="flex items-center gap-4 mb-8 md:justify-center">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full blur opacity-75 animate-pulse"></div>
                    <div className="relative w-16 h-16 bg-black border-4 border-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-lg font-black text-cyan-400">{period.year}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                    {period.title}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ml-0 md:ml-0">
                  {period.items.map((item, itemIdx) => {
                    const Icon = item.icon;

                    const colorMap: Record<string, { border: string; text: string; bg: string; gradient: string; glow: string }> = {
                      cyan: {
                        border: 'border-cyan-500/30',
                        text: 'text-cyan-400',
                        bg: 'bg-cyan-500',
                        gradient: 'from-cyan-500 to-cyan-600',
                        glow: 'from-cyan-500 to-cyan-600',
                      },
                      fuchsia: {
                        border: 'border-fuchsia-500/30',
                        text: 'text-fuchsia-400',
                        bg: 'bg-fuchsia-500',
                        gradient: 'from-fuchsia-500 to-fuchsia-600',
                        glow: 'from-fuchsia-500 to-fuchsia-600',
                      },
                      yellow: {
                        border: 'border-yellow-500/30',
                        text: 'text-yellow-400',
                        bg: 'bg-yellow-500',
                        gradient: 'from-yellow-500 to-yellow-600',
                        glow: 'from-yellow-500 to-yellow-600',
                      },
                      green: {
                        border: 'border-green-500/30',
                        text: 'text-green-400',
                        bg: 'bg-green-500',
                        gradient: 'from-green-500 to-green-600',
                        glow: 'from-green-500 to-green-600',
                      },
                    };

                    const colors = colorMap[item.color];

                    const rarityColors: Record<string, string> = {
                      LEGENDARY: 'text-yellow-400 border-yellow-500/50 bg-yellow-950/30',
                      EPIC: 'text-fuchsia-400 border-fuchsia-500/50 bg-fuchsia-950/30',
                      RARE: 'text-cyan-400 border-cyan-500/50 bg-cyan-950/30',
                    };

                    return (
                      <div key={itemIdx} className="group relative">
                        <div
                          className={`absolute -inset-1 bg-gradient-to-r ${colors.glow} rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500`}
                        ></div>
                        <div
                          className={`relative bg-black/90 backdrop-blur-xl border ${colors.border} rounded-xl p-6 hover:border-opacity-70 transition-all transform group-hover:scale-105 group-hover:-translate-y-2`}
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div
                              className={`w-14 h-14 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}
                            >
                              <Icon className="w-7 h-7 text-black" />
                            </div>
                            <div className={`px-3 py-1 border rounded-full ${rarityColors[item.rarity]}`}>
                              <span className="text-xs font-bold">{item.rarity}</span>
                            </div>
                          </div>

                          <h4 className="text-xl font-bold text-white mb-2">{item.name}</h4>
                          <p className="text-sm text-gray-400 mb-3">{item.description}</p>

                          <div className={`pt-3 border-t ${colors.border} flex items-center justify-between`}>
                            <span className="text-xs text-gray-500 font-mono">UNLOCKED BY</span>
                            <span className={`text-xs ${colors.text} font-bold`}>{item.organizer}</span>
                          </div>

                          <div className="mt-4 flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full animate-pulse`} style={{
                              backgroundColor: item.color === 'cyan' ? '#06b6d4' : item.color === 'fuchsia' ? '#d946ef' : item.color === 'yellow' ? '#facc15' : '#22c55e'
                            }}></div>
                            <span className={`text-xs font-bold ${colorMap[item.color].text}`}>ACHIEVEMENT UNLOCKED</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-fuchsia-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300 animate-pulse"></div>
          <div className="relative bg-black/90 backdrop-blur-xl border border-yellow-500/30 rounded-2xl p-12 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Target className="w-10 h-10 text-yellow-400 animate-pulse" />
              <h3 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-fuchsia-500 to-cyan-400">
                NEXT LEVEL OBJECTIVES
              </h3>
              <Zap className="w-10 h-10 text-cyan-400 animate-pulse" />
            </div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Currently grinding for more achievements in Machine Learning, Advanced Projects, and National-Level
              Competitions. The journey to mastery continues...
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400 font-bold">XP FARMING ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
