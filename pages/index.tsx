import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ManifestoSection } from '../components/ManifestoSection';
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

      <div className="relative min-h-screen bg-[#0a0a0a] text-zinc-100 overflow-x-hidden selection:bg-blue-600 selection:text-white font-sans">
        {/* Technical Grid Background */}
        <ParticleBackground />

        {/* Top Custom Header */}
        <Header
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <HeroSection
            onOpenTerminal={() => setTerminalOpen(true)}
            onOpenResume={() => setResumeOpen(true)}
          />

          <ExperienceSection />

          <ProjectsSection />

          <ManifestoSection />

          <SkillsSection />

          <CertificationsSection />

          <ContactSection
            onOpenResume={() => setResumeOpen(true)}
          />
        </main>

        {/* Custom 4-Column Footer */}
        <Footer />

        {/* CLI Terminal Drawer */}
        <InteractiveTerminal
          isOpen={terminalOpen}
          onClose={() => setTerminalOpen(false)}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Resume Modal */}
        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />
      </div>
    </>
  );
}
