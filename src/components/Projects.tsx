import { Target, ExternalLink, Github, Brain, Globe, Sparkles, Star, Zap } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const [selectedMission, setSelectedMission] = useState<number | null>(null);

  const missions = [
    {
      id: 1,
      title: 'AI DATA INSIGHTS ENGINE',
      difficulty: 'ELITE',
      difficultyLevel: 4,
      type: 'Machine Learning',
      status: 'COMPLETED',
      description:
        'Advanced reconnaissance mission involving comprehensive data cleaning, preprocessing, and visualization. Deployed machine learning algorithms to identify patterns and extract strategic intelligence for decision-making operations.',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
      achievements: [
        'Data preprocessing pipeline',
        'Pattern recognition algorithms',
        'Strategic insights generation',
        'Visualization dashboard',
      ],
      color: 'cyan',
      icon: Brain,
    },
    {
      id: 2,
      title: 'RESPONSIVE WEB COMBAT SYSTEM',
      difficulty: 'ADVANCED',
      difficultyLevel: 3,
      type: 'Web Development',
      status: 'DEPLOYED',
      description:
        'Full-scale web application deployment with optimized performance metrics. Engineered interactive UI components with cross-platform compatibility across all battlefield devices and screen configurations.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      achievements: [
        'Lightning-fast load times',
        'Smooth user interactions',
        'Multi-device compatibility',
        'Production-ready build',
      ],
      link: 'https://project-9k9xsm5zc-gurunathan-vs-projects.vercel.app/',
      color: 'fuchsia',
      icon: Globe,
    },
    {
      id: 3,
      title: 'HACKATHON BATTLE MISSIONS',
      difficulty: 'EXTREME',
      difficultyLevel: 5,
      type: 'Competitive Coding',
      status: 'IN PROGRESS',
      description:
        'Elite combat operations in multiple tournament arenas. Secured strategic victories including Rank 6 at Hack4Us (MSI Delhi) and Rank 13 at InnovateX (VIT-AP). Active deployment in national-level coding competitions.',
      tech: ['Python', 'Java', 'Data Structures', 'Algorithms', 'Team Strategy'],
      achievements: [
        'Rank 6 - Hack4Us (MSI Delhi)',
        'Rank 13 - InnovateX (VIT-AP)',
        'CODE-A-THON Participant',
        'TechTrove\'25 Workshop',
      ],
      color: 'yellow',
      icon: Sparkles,
    },
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/5 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500"></div>
          <Target className="w-8 h-8 text-cyan-400 animate-pulse" />
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
            MISSION SELECT
          </h2>
          <Target className="w-8 h-8 text-fuchsia-400 animate-pulse" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-fuchsia-500"></div>
        </div>

        <p className="text-center text-gray-400 mb-16 text-lg font-mono">
          <span className="text-cyan-400">&gt;</span> Choose your next objective{' '}
          <span className="text-fuchsia-400">&lt;</span>
        </p>

        <div className="space-y-8">
          {missions.map((mission, idx) => {
            const Icon = mission.icon;
            const isSelected = selectedMission === mission.id;

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
            };

            const colors = colorMap[mission.color];

            return (
              <div
                key={idx}
                className="group relative cursor-pointer"
                onClick={() => setSelectedMission(isSelected ? null : mission.id)}
              >
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${colors.glow} rounded-2xl blur transition-all duration-500 ${
                    isSelected ? 'opacity-75' : 'opacity-0 group-hover:opacity-50'
                  }`}
                ></div>

                <div
                  className={`relative bg-black/90 backdrop-blur-xl border ${colors.border} rounded-2xl overflow-hidden transition-all duration-300`}
                >
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}
                          >
                            <Icon className="w-8 h-8 text-black" />
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-2xl md:text-3xl font-black text-white">{mission.title}</h3>
                              <div className={`px-3 py-1 ${colors.bg} rounded-full`}>
                                <span className="text-xs font-bold text-black">{mission.status}</span>
                              </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-sm">
                              <div className="flex items-center gap-2">
                                <span className="text-gray-500 font-mono">TYPE:</span>
                                <span className={`${colors.text} font-bold`}>{mission.type}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-gray-500 font-mono">DIFFICULTY:</span>
                                <div className="flex items-center gap-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-3 h-3 ${
                                        i < mission.difficultyLevel
                                          ? colors.text
                                          : 'text-gray-700'
                                      }`}
                                      fill={i < mission.difficultyLevel ? 'currentColor' : 'none'}
                                    />
                                  ))}
                                  <span className={`ml-2 ${colors.text} font-bold`}>
                                    {mission.difficulty}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-400 mb-6 leading-relaxed">{mission.description}</p>

                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-bold text-gray-500 mb-3 font-mono">TECH STACK:</h4>
                            <div className="flex flex-wrap gap-2">
                              {mission.tech.map((tech, techIdx) => (
                                <span
                                  key={techIdx}
                                  className={`px-3 py-1 bg-opacity-30 border ${colors.border} rounded-full text-sm ${colors.text} font-mono hover:bg-opacity-50 transition-colors`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {isSelected && (
                            <div className="animate-fadeIn">
                              <h4 className="text-sm font-bold text-gray-500 mb-3 font-mono">
                                ACHIEVEMENTS UNLOCKED:
                              </h4>
                              <div className="grid md:grid-cols-2 gap-3">
                                {mission.achievements.map((achievement, achIdx) => (
                                  <div
                                    key={achIdx}
                                    className={`flex items-center gap-3 p-3 bg-opacity-20 border ${colors.border} rounded-lg hover:bg-opacity-30 transition-colors`}
                                  >
                                    <Zap className={`w-4 h-4 ${colors.text} flex-shrink-0`} />
                                    <span className="text-sm text-gray-300">{achievement}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {mission.link && (
                          <div className="mt-6 flex flex-wrap gap-4">
                            <a
                              href={mission.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`group/btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${colors.gradient} text-black font-bold rounded-lg hover:scale-105 transition-all`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                              LAUNCH MISSION
                            </a>
                            <button
                              className={`flex items-center gap-2 px-6 py-3 bg-black border ${colors.border} ${colors.text} font-bold rounded-lg hover:bg-opacity-20 transition-all`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github className="w-4 h-4" />
                              VIEW CODE
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={`h-1 bg-gradient-to-r ${colors.gradient}`}></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 font-mono mb-4">MORE MISSIONS INCOMING...</p>
          <div className="flex items-center justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
