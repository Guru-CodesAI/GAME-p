import { Mail, Phone, Linkedin, Instagram, Send, Skull, Swords, Shield, Zap } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isHovering, setIsHovering] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contacts = [
    {
      icon: Mail,
      label: 'EMAIL',
      value: 'vengaigurunathan2@gmail.com',
      href: 'mailto:vengaigurunathan2@gmail.com',
      color: 'cyan',
    },
    {
      icon: Phone,
      label: 'PHONE',
      value: '+91 91598 16648',
      href: 'tel:+919159816648',
      color: 'fuchsia',
    },
    {
      icon: Linkedin,
      label: 'LINKEDIN',
      value: 'gurunathan-v',
      href: 'https://linkedin.com/in/gurunathan-v-521295367',
      color: 'cyan',
    },
    {
      icon: Instagram,
      label: 'INSTAGRAM',
      value: '@shadow_guru07',
      href: 'https://www.instagram.com/shadow_guru07?igsh=dnI0NDNxeHh1bnFn',
      color: 'fuchsia',
    },
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>

      <div className="absolute inset-0 opacity-10">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-red-500 rounded-full animate-pulse"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDuration: Math.random() * 2 + 1 + 's',
              animationDelay: Math.random() * 2 + 's',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Swords className="w-10 h-10 text-red-500 animate-pulse" />
            <Skull className="w-12 h-12 text-red-500 animate-bounce" />
            <Swords className="w-10 h-10 text-red-500 animate-pulse" />
          </div>

          <div className="relative inline-block mb-6">
            <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-fuchsia-500 to-cyan-500 animate-pulse">
              FINAL BOSS
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-cyan-500 blur-3xl opacity-30 -z-10"></div>
          </div>

          <p className="text-2xl md:text-3xl text-gray-400 mb-4 font-bold">
            READY TO <span className="text-cyan-400">COLLABORATE</span> &{' '}
            <span className="text-fuchsia-400">CONQUER</span>?
          </p>

          <p className="text-lg text-gray-500 font-mono">
            <span className="text-red-500">&gt;</span> Let's build something legendary together{' '}
            <span className="text-red-500">&lt;</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div
            className="relative group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div
              className={`absolute -inset-1 bg-gradient-to-r from-red-500 via-fuchsia-500 to-cyan-500 rounded-2xl blur transition-all duration-500 ${
                isHovering ? 'opacity-75 animate-pulse' : 'opacity-25'
              }`}
            ></div>
            <div className="relative bg-black/90 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                  <Send className="w-7 h-7 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-400">SEND MESSAGE</h3>
                  <p className="text-sm text-gray-500 font-mono">Direct Communication Channel</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-cyan-400 mb-2 font-mono">PLAYER NAME</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors placeholder-gray-600"
                    placeholder="Enter your name..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-fuchsia-400 mb-2 font-mono">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-fuchsia-500/30 rounded-lg text-white focus:border-fuchsia-500 focus:outline-none transition-colors placeholder-gray-600"
                    placeholder="your.email@domain.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-yellow-400 mb-2 font-mono">MISSION BRIEF</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors placeholder-gray-600 resize-none"
                    placeholder="Describe your project or collaboration idea..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="group/btn w-full relative px-8 py-4 bg-gradient-to-r from-red-500 via-fuchsia-500 to-cyan-500 text-white font-black text-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    <Zap className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                    ENGAGE FINAL BOSS
                    <Zap className="w-5 h-5 group-hover/btn:-rotate-12 transition-transform" />
                  </span>
                </button>
              </form>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-600 font-mono">
                <Shield className="w-4 h-4 text-green-500" />
                <span>SECURE CONNECTION ESTABLISHED</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-black/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400">DIRECT CHANNELS</h3>
                    <p className="text-sm text-gray-500 font-mono">Quick Access Points</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {contacts.map((contact, idx) => {
                    const Icon = contact.icon;
                    const colorMap: Record<string, { border: string; text: string; bg: string; gradient: string }> = {
                      cyan: {
                        border: 'border-cyan-500/30',
                        text: 'text-cyan-400',
                        bg: 'bg-cyan-500',
                        gradient: 'from-cyan-500 to-cyan-600',
                      },
                      fuchsia: {
                        border: 'border-fuchsia-500/30',
                        text: 'text-fuchsia-400',
                        bg: 'bg-fuchsia-500',
                        gradient: 'from-fuchsia-500 to-fuchsia-600',
                      },
                    };

                    const colors = colorMap[contact.color];

                    return (
                      <a
                        key={idx}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/contact block p-4 bg-opacity-20 border ${colors.border} rounded-lg hover:bg-opacity-40 hover:border-opacity-70 transition-all transform hover:scale-105`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-lg flex items-center justify-center flex-shrink-0 group-hover/contact:rotate-12 transition-transform`}
                          >
                            <Icon className="w-6 h-6 text-black" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`text-xs font-bold ${colors.text} mb-1 font-mono`}>{contact.label}</p>
                            <p className="text-sm text-white truncate">{contact.value}</p>
                          </div>
                          <Zap className={`w-5 h-5 ${colors.text} flex-shrink-0 group-hover/contact:animate-pulse`} />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-black/90 backdrop-blur-xl border border-fuchsia-500/30 rounded-2xl p-8 text-center">
                <Skull className="w-16 h-16 text-red-500 mx-auto mb-4 animate-pulse" />
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-fuchsia-500 mb-3">
                  BOSS STATS
                </h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center justify-between">
                    <span className="font-mono">RESPONSE TIME:</span>
                    <span className="text-cyan-400 font-bold">24-48 HRS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono">COLLABORATION RATE:</span>
                    <span className="text-green-400 font-bold">95%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono">DIFFICULTY LEVEL:</span>
                    <span className="text-yellow-400 font-bold">FRIENDLY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500 via-fuchsia-500 to-cyan-500 blur-2xl opacity-30 animate-pulse"></div>
            <p className="relative text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-red-500">
              GAME ON. LET'S CREATE MAGIC.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
