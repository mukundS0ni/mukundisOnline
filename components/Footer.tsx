import React from 'react';
import { ArrowUp, Mail, Phone, Globe, Terminal } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#27272a] bg-[#0a0a0a] text-zinc-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Main 4-Column Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand Logo & Mission */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <BrandLogo size={32} />
              <div>
                <span className="font-heading font-black text-white text-base">MUKUND SONI</span>
                <p className="text-[10px] font-code text-blue-400">Head of Technology</p>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Engineering leader specializing in AI display kiosks, Web3 prediction markets, and asynchronous remote startup architectures.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-2">
            <span className="text-xs font-code font-bold uppercase text-white tracking-wider block">Engineering Directory</span>
            <ul className="space-y-1.5 text-xs font-code">
              <li><a href="#about" className="hover:text-white transition-colors">01. About Workstation</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">02. Work Experience</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">03. Code Projects</a></li>
              <li><a href="#manifesto" className="hover:text-white transition-colors">04. Engineering Manifesto</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">05. Technical Matrix</a></li>
              <li><a href="#certifications" className="hover:text-white transition-colors">06. Credentials & LORs</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">07. Direct Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Direct Profiles & Outreach */}
          <div className="space-y-2">
            <span className="text-xs font-code font-bold uppercase text-white tracking-wider block">Direct Outreach</span>
            <ul className="space-y-2 text-xs font-code">
              <li>
                <a href="mailto:mukundsoni08@gmail.com" className="flex items-center gap-2 hover:text-red-400 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-red-500" />
                  <span>mukundsoni08@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+919992976692" className="flex items-center gap-2 hover:text-green-400 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-green-500" />
                  <span>+91 9992976692</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/mukundS0ni" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <GithubIcon className="w-3.5 h-3.5 text-zinc-300" />
                  <span>github.com/mukundS0ni</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mukundx/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-500" />
                  <span>linkedin.com/in/mukundx</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: System Operational Telemetry */}
          <div className="space-y-2">
            <span className="text-xs font-code font-bold uppercase text-white tracking-wider block">System Status</span>
            <div className="p-3 rounded bg-[#121212] border border-[#27272a] space-y-2 text-xs font-code">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Status:</span>
                <span className="text-green-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Open for Roles
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Timezones:</span>
                <span className="text-zinc-300">IST / CET</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Built With:</span>
                <span className="text-blue-400">Next.js & TypeScript</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-code text-zinc-500">
          <span>© {new Date().getFullYear()} Mukund Soni. All Rights Reserved.</span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#121212] border border-[#27272a] hover:border-[#3f3f46] text-zinc-300 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
