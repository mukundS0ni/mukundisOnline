import React, { useEffect, useState } from 'react';
import { Mail, Phone, ArrowRight, Terminal, Sparkles, Code2, Cpu, Globe, CheckCircle2, Shield } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';


interface HeroSectionProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTerminal, onOpenResume }) => {
  const titles = [
    'Head of Technology',
    'Full-Stack AI Architect',
    'Web3 & DeFi Systems Engineer',
    'Python & Next.js Lead Specialist'
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[currentTitleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(
          isDeleting
            ? fullText.substring(0, displayText.length - 1)
            : fullText.substring(0, displayText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex]);

  return (
    <section id="about" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Main Copy */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-emerald-500/30 text-xs font-medium text-emerald-300 shadow-lg shadow-emerald-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Leadership & Senior Staff IC Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-heading leading-tight">
                Hi, I'm <span className="text-gradient-emerald">Mukund Soni</span>
              </h1>
              <div className="h-12 flex items-center">
                <span className="text-xl sm:text-3xl font-code font-bold text-slate-300">
                  I build as a{' '}
                  <span className="text-gradient-cyan border-b-2 border-cyan-400/50 pb-0.5">
                    {displayText}
                  </span>
                  <span className="animate-pulse text-emerald-400">|</span>
                </span>
              </div>
            </div>

            {/* Strategic Value Narrative */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Former <strong>Co-Founder & Head of Tech at Optcl</strong> with proven experience engineering AI display telemetry systems, Web3 prediction markets at <strong>Powerloom Protocol</strong>, and high-performance full-stack applications. Specialized in <strong>asynchronous European startup workflows</strong>, technical RFC authorship, and end-to-end technical autonomy.
            </p>

            {/* Quick Metrics Badge Row */}
            <div className="grid grid-cols-3 gap-4 max-w-xl py-2">
              <div className="glass-card p-3 rounded-xl border border-slate-800 text-center">
                <span className="block text-2xl font-extrabold text-white font-heading">9.0<span className="text-xs text-emerald-400 font-normal">/10</span></span>
                <span className="text-[11px] text-slate-400 font-code">B.Tech CGPA</span>
              </div>
              <div className="glass-card p-3 rounded-xl border border-slate-800 text-center">
                <span className="block text-2xl font-extrabold font-heading text-gradient-cyan">2x</span>
                <span className="text-[11px] text-slate-400 font-code">GATE Exam Qualified</span>
              </div>
              <div className="glass-card p-3 rounded-xl border border-slate-800 text-center">
                <span className="block text-2xl font-extrabold text-white font-heading">8+</span>
                <span className="text-[11px] text-slate-400 font-code">Languages AI Video</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02]"
              >
                <span>View Projects & Demos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-emerald-500/50 text-slate-200 hover:text-emerald-400 font-code text-sm transition-all"
              >
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Launch Interactive CLI</span>
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 font-medium text-sm transition-all"
              >
                <span>Download CV</span>
              </button>
            </div>

            {/* Direct Contacts Row */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-800/80 text-xs font-code text-slate-400">
              <a
                href="https://github.com/mukundS0ni"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>github.com/mukundS0ni</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mukundx/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span>linkedin.com/in/mukundx</span>
              </a>
              <a
                href="mailto:mukundsoni08@gmail.com"
                className="flex items-center gap-2 hover:text-purple-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>mukundsoni08@gmail.com</span>
              </a>
              <a
                href="tel:+919992976692"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+91 9992976692</span>
              </a>
            </div>
          </div>

          {/* Right Column - Tech Card & Live Workstation Graphic */}
          <div className="lg:col-span-5 relative">
            {/* Background Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-purple-500/20 blur-xl opacity-70 animate-pulse-glow" />

            <div className="relative glass-card rounded-2xl p-6 border border-slate-700/70 shadow-2xl space-y-6">
              {/* Terminal Code Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-code text-slate-400">mukund@workstation:~$</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-code bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  SYSTEM READY
                </span>
              </div>

              {/* Avatar + Quick Stats */}
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-emerald-500/40 p-1 bg-slate-900 shrink-0">
                  <img
                    src="/assets/avatar.jpg"
                    alt="Mukund Soni"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">Mukund Soni</h3>
                  <p className="text-xs text-emerald-400 font-code">Head of Technology & Fullstack AI</p>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-cyan-400" /> Remote (IST / CET Timezones)
                  </p>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="bg-slate-950/80 rounded-xl p-4 font-code text-xs space-y-2 border border-slate-800/80">
                <div className="text-slate-500">// Core Engineering DNA</div>
                <div>
                  <span className="text-purple-400">const</span> <span className="text-cyan-300">architect</span> = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">primaryDomain:</span> <span className="text-emerald-300">'AI Automation & Web3'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">recentImpact:</span> <span className="text-amber-300">'Optcl AI Kiosks & Powerloom DeFi'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">workStyle:</span> <span className="text-cyan-300">['Async RFCs', 'Cross-Cultural IST/CET', 'Full Ownership']</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">status:</span> <span className="text-emerald-400">'Open for Senior Opportunities'</span>
                </div>
                <div>{'}'};</div>
              </div>

              {/* Key Highlights Grid */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>AI Video Generation supporting 8 Indian Languages (Samachar AI)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Staking Rewards & DeFi Prediction Markets (Powerloom OCP)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Intelligent Kiosk Display Automation & Telemetry (Optcl.io)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
