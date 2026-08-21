import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { SkillsSection } from '../components/SkillsSection';
import { CertificationsSection } from '../components/CertificationsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { ParticleBackground } from '../components/ParticleBackground';
import { InteractiveTerminal } from '../components/InteractiveTerminal';
import { ResumeModal } from '../components/ResumeModal';

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Global Keyboard Shortcut for Terminal (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Head>
        <title>Mukund Soni — Head of Technology & Fullstack AI Architect</title>
        <meta name="description" content="Official portfolio of Mukund Soni: Head of Technology, Full-Stack AI Engineer & Web3 Systems Specialist. Former Co-Founder at Optcl, Web3 Developer at Powerloom Protocol." />
        <meta name="keywords" content="Mukund Soni, Head of Technology, AI Architect, Next.js Developer, Python, Web3, Powerloom, Optcl, Full Stack Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="relative min-h-screen bg-[#090d16] text-slate-100 overflow-x-hidden selection:bg-emerald-500 selection:text-slate-950 font-inter">
        {/* Dynamic HTML5 Canvas Particle Background */}
        <ParticleBackground />

        {/* Top Header */}
        <Header
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Main Body Content Sections */}
        <main className="relative z-10">
          <HeroSection
            onOpenTerminal={() => setTerminalOpen(true)}
            onOpenResume={() => setResumeOpen(true)}
          />

          <ExperienceSection />

          <ProjectsSection />

          <SkillsSection />

          <CertificationsSection />

          <ContactSection
            onOpenResume={() => setResumeOpen(true)}
          />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Interactive CLI Terminal Drawer */}
        <InteractiveTerminal
          isOpen={terminalOpen}
          onClose={() => setTerminalOpen(false)}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Resume Modal & Viewer */}
        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />
      </div>
    </>
  );
}
