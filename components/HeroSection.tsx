import React, { useEffect, useState } from 'react';
import { Mail, Phone, ArrowRight, Terminal, CheckCircle2, Globe, Shield } from 'lucide-react';
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
    <section id="about" className="relative pt-12 pb-16 md:pt-16 md:pb-24 border-b border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Headline & Summary */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Solid Green Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#18181b] border border-[#27272a] rounded text-xs font-code text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span>Available for Leadership & Senior IC Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-heading uppercase">
                MUKUND SONI
              </h1>
              <div className="h-10 flex items-center">
                <span className="text-lg sm:text-2xl font-code font-bold text-zinc-300">
                  <span className="text-blue-500 font-extrabold">&gt; </span>
                  <span className="text-white">{displayText}</span>
                  <span className="animate-pulse text-red-500">_</span>
                </span>
              </div>
            </div>

            {/* Concise Technical Narrative */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Former <strong className="text-white">Head of Technology at Optcl</strong> (AI display kiosk management & real-time telemetry) and <strong className="text-white">DeFi Protocol Developer at Powerloom</strong>. Specialized in high-throughput system architecture, distributed European startup velocity across IST & CET time zones, and technical RFC authorship.
            </p>

            {/* Metric Boxes - Solid Colors */}
            <div className="grid grid-cols-3 gap-3 max-w-lg py-2">
              <div className="bg-[#121212] p-3 rounded border border-[#27272a] border-l-2 border-l-blue-500">
                <span className="block text-xl font-extrabold text-white font-heading">9.0<span className="text-xs text-zinc-400 font-normal">/10</span></span>
                <span className="text-[10px] text-zinc-400 font-code uppercase">B.Tech CGPA</span>
              </div>
              <div className="bg-[#121212] p-3 rounded border border-[#27272a] border-l-2 border-l-red-500">
                <span className="block text-xl font-extrabold text-red-500 font-heading">2x</span>
                <span className="text-[10px] text-zinc-400 font-code uppercase">GATE Qualified</span>
              </div>
              <div className="bg-[#121212] p-3 rounded border border-[#27272a] border-l-2 border-l-green-500">
                <span className="block text-xl font-extrabold text-green-500 font-heading">4+ Yrs</span>
                <span className="text-[10px] text-zinc-400 font-code uppercase">Engineering Exp</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-2.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 px-4 py-2.5 rounded bg-[#18181b] border border-[#3f3f46] hover:border-zinc-400 text-zinc-200 font-code text-xs transition-all"
              >
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>Launch CLI</span>
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4 py-2.5 rounded bg-white hover:bg-zinc-200 text-black font-bold text-xs transition-all"
              >
                <span>Download CV</span>
              </button>
            </div>

            {/* Direct Social Links */}
            <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-[#27272a] text-xs font-code text-zinc-400">
              <a
                href="https://github.com/mukundS0ni"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-zinc-300" />
                <span>github.com/mukundS0ni</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mukundx/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-500" />
                <span>linkedin.com/in/mukundx</span>
              </a>
              <a
                href="mailto:mukundsoni08@gmail.com"
                className="flex items-center gap-1.5 hover:text-red-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-red-500" />
                <span>mukundsoni08@gmail.com</span>
              </a>
              <a
                href="tel:+919992976692"
                className="flex items-center gap-1.5 hover:text-green-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-green-500" />
                <span>+91 9992976692</span>
              </a>
            </div>
          </div>

          {/* Right Column - Crisp Developer Workstation Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#121212] rounded border border-[#27272a] p-5 space-y-5">
              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-[#27272a] pb-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <span className="text-xs font-code text-zinc-400">mukund@workstation:~$</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-code bg-green-950 text-green-400 border border-green-800">
                  ONLINE
                </span>
              </div>

              {/* Avatar Info */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded overflow-hidden border border-[#3f3f46] bg-black shrink-0">
                  <img
                    src="/assets/avatar.jpg"
                    alt="Mukund Soni"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-base">Mukund Soni</h3>
                  <p className="text-xs text-blue-400 font-code">Head of Tech & Fullstack AI</p>
                  <p className="text-xs text-zinc-400 mt-1 flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-zinc-400" /> Remote (IST / CET Timezones)
                  </p>
                </div>
              </div>

              {/* Code Box */}
              <div className="bg-[#0a0a0a] rounded p-3.5 font-code text-xs space-y-1.5 border border-[#27272a]">
                <div className="text-zinc-500">// Technical Ownership</div>
                <div>
                  <span className="text-red-500 font-bold">const</span> <span className="text-blue-400">profile</span> = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">role:</span> <span className="text-green-400">'Head of Tech / Staff IC'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">focus:</span> <span className="text-blue-400">'AI Automation & Web3 DeFi'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">methodology:</span> <span className="text-zinc-200">'Async RFCs & Distributed Sprints'</span>
                </div>
                <div>{'}'};</div>
              </div>

              {/* Core Features */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Multilingual AI Video Engine in 8 Indian Languages</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Powerloom OCP Staking Rewards & Prediction Markets</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Optcl AI Kiosk Telemetry & Display Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
