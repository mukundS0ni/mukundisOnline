import React, { useState } from 'react';
import { Terminal, FileText, Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Manifesto', href: '#manifesto' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Monogram & Title */}
        <a href="#" className="flex items-center gap-3 group">
          <BrandLogo size={34} />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-black text-base tracking-tight text-white group-hover:text-blue-400 transition-colors">
                MUKUND SONI
              </span>
            </div>
            <span className="block text-[10px] font-code text-zinc-400 uppercase tracking-wider">
              Head of Technology • AI & Web3
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-code font-semibold text-zinc-400 hover:text-white transition-colors uppercase tracking-wider py-1 relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#18181b] border border-[#3f3f46] hover:border-blue-500 text-zinc-300 hover:text-white text-xs font-code transition-all"
            title="Launch Interactive Developer CLI Terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-blue-500" />
            <span>Terminal CLI</span>
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-1.5 rounded bg-white hover:bg-zinc-200 text-black font-bold text-xs transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenTerminal}
            className="p-1.5 rounded bg-[#18181b] border border-[#3f3f46] text-blue-500"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded bg-[#18181b] border border-[#3f3f46] text-zinc-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121212] border-b border-[#27272a] px-6 py-4 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-code text-zinc-300 hover:text-white py-1 transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#27272a] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 rounded bg-white text-black font-bold text-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              Download Resume PDF
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
