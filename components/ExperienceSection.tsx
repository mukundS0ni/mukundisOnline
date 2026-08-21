import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronRight, Cpu, Globe, Award, Sparkles, Shield, Code } from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  tailoredTitle: string;
  company: string;
  period: string;
  location: string;
  type: string;
  color: string;
  badge: string;
  summary: string;
  bullets: string[];
  skills: string[];
}

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('optcl');

  const experiences: ExperienceItem[] = [
    {
      id: 'optcl',
      role: 'Co-Founder & Head of Technology',
      tailoredTitle: 'Head of Technology / Lead AI Systems Architect',
      company: 'Optcl',
      period: 'Feb 2025 – May 2026',
      location: 'Remote / Hybrid',
      type: 'Co-Founder (Feb 25–Mar 26) • Contract Consultant (Mar 26–May 26)',
      color: 'from-emerald-500 to-teal-400',
      badge: 'AI & Industrial Automation',
      summary: 'Spearheaded engineering for intelligent display kiosk automation and real-time telemetry systems for smart infrastructure.',
      bullets: [
        'Developed Optcl.io, an AI-powered platform for intelligent display kiosk management, focusing on automated content delivery and live device telemetry analytics.',
        'Architected end-to-end AI systems for industrial automation and smart infrastructure applications.',
        'Managed cloud infrastructure, hardware IoT sync pipelines, and system reliability, scaling real-time analytics delivery.',
        'Transitioned to Contract Lead Architect in March 2026 to oversee strategic system deployment.'
      ],
      skills: ['Python', 'AI/LLM', 'System Architecture', 'Real-Time Analytics', 'IoT', 'FastAPI', 'GCP']
    },
    {
      id: 'powerloom',
      role: 'Frontend & DeFi Developer',
      tailoredTitle: 'Senior Frontend & DeFi Protocol Engineer',
      company: 'Powerloom Protocol',
      period: 'Jun 2024 – Dec 2024',
      location: 'Remote (European Startup / IST & CET)',
      type: 'Full-time Remote',
      color: 'from-cyan-500 to-blue-500',
      badge: 'Asynchronous European Startup',
      summary: 'Engineered Web3 prediction markets and staker incentive dashboards for decentralized DeFi data networks.',
      bullets: [
        'Created the official token launch website for OCP token and engineered community reward incentive mechanisms for staking POP tokens.',
        'Architected Generative Prediction Markets (GPM) executing on real-time DeFi data streams provided by Powerloom Protocol.',
        'Redesigned and optimized the Snapshotter Dashboard, allowing slot operators to view node status and reward distributions in real time.',
        'Collaborated asynchronously with a distributed European team, authoring technical RFC design documents and maintaining high velocity across IST and CET time zones.'
      ],
      skills: ['Next.js', 'TypeScript', 'TailwindCSS', 'DeFi Staking', 'Web3 Data', 'Async RFCs', 'React']
    },
    {
      id: 'sachtek',
      role: 'Freelance Software Architect',
      tailoredTitle: 'Mobile & Enterprise Systems Architect',
      company: 'Sachtek',
      period: 'Sep 2023 – Mar 2024',
      location: 'Remote',
      type: 'Contract',
      color: 'from-purple-500 to-indigo-500',
      badge: 'Mobile & Enterprise',
      summary: 'Designed and deployed bespoke mobile applications and enterprise systems for external client projects.',
      bullets: [
        'Designed and built custom cross-platform applications tailored to precise client business requirements.',
        'Developed "AD Numeroscope" mobile app, designed to calculate numerological values and construct personalized charts based on phonetic algorithms and user DOB.',
        'Handled full lifecycle from UI/UX wireframing to database indexing and store publishing.'
      ],
      skills: ['React Native', 'Mobile UI/UX', 'Algorithms', 'TypeScript', 'Node.js']
    },
    {
      id: 'nonceblox',
      role: 'Software Analyst',
      tailoredTitle: 'Web3 & AI Solutions Analyst',
      company: 'Nonceblox',
      period: 'Jun 2023 – Aug 2023',
      location: 'Hybrid',
      type: 'Full-time',
      color: 'from-amber-500 to-orange-500',
      badge: 'NFT & AI Integration',
      summary: 'Built Web3 marketplace solutions and integrated AI-driven generative NFT creation pipelines.',
      bullets: [
        'Created custom Web3 solutions for NFT marketplaces and Web3 gaming portals.',
        'Integrated blockchain technology and AI-powered generative NFT creation into live customer applications.',
        'Developed a custom headless Content Management System (CMS) for digital asset curation.'
      ],
      skills: ['Web3.js', 'NFT Marketplaces', 'Generative AI', 'CMS Development', 'JavaScript']
    },
    {
      id: 'birlasoft',
      role: 'Cloud & Security Intern',
      tailoredTitle: 'Cloud Security & Infrastructure Intern',
      company: 'BirlaSoft',
      period: 'Jun 2022 – Jul 2022',
      location: 'Noida, India',
      type: 'Internship',
      color: 'from-slate-400 to-slate-600',
      badge: 'Azure Cloud Security',
      summary: 'Contributed to cloud management, hybrid device protection, and vulnerability detection systems.',
      bullets: [
        'Contributed to enterprise Microsoft Azure infrastructure projects and hybrid endpoint security.',
        'Configured network protection protocols and automated vulnerability detection scripts.'
      ],
      skills: ['Microsoft Azure', 'Cloud Security', 'Network Protection', 'Vulnerability Detection']
    },
    {
      id: 'internship-studio',
      role: 'Cybersecurity Intern',
      tailoredTitle: 'Cybersecurity & Mitigation Specialist',
      company: 'Internship Studio',
      period: 'Aug 2021 – Sep 2021',
      location: 'Remote',
      type: 'Internship',
      color: 'from-slate-500 to-slate-700',
      badge: 'Ethical Hacking',
      summary: 'Performed ethical hacking vulnerability scans and formulated mitigation strategies.',
      bullets: [
        'Identified system security vulnerabilities using ethical hacking penetration frameworks.',
        'Developed security hardening strategies for mitigation and risk reduction.'
      ],
      skills: ['Ethical Hacking', 'Vulnerability Assessment', 'Security Risk Mitigation']
    }
  ];

  const activeExp = experiences.find((exp) => exp.id === activeTab) || experiences[0];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-code">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Track Record & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Work Experience & <span className="text-gradient-emerald">Technical Impact</span>
          </h2>
          <p className="text-slate-400 text-base">
            Demonstrated engineering leadership across startup co-founding, distributed European DeFi protocols, AI kiosk systems, and full-stack architecture.
          </p>
        </div>

        {/* Strategic Remote Capabilities Highlight Box */}
        <div className="glass-card p-6 rounded-2xl border border-slate-800 mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-sm">Asynchronous & Remote Native</h4>
              <p className="text-slate-400 text-xs mt-1">Proven track record in European startup setups, writing detailed technical RFCs and maintaining high velocity across IST & CET time zones.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-sm">End-to-End Ownership</h4>
              <p className="text-slate-400 text-xs mt-1">From initial architectural design and cloud deployment to production telemetry and client management.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-sm">Leadership Scale</h4>
              <p className="text-slate-400 text-xs mt-1">Co-founded & led technology at Optcl; engineered token incentive dashboards for Powerloom Protocol.</p>
            </div>
          </div>
        </div>

        {/* Experience Selector Tabs + Detailed Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Company Selector Tab Column */}
          <div className="lg:col-span-4 space-y-3">
            {experiences.map((exp) => {
              const isActive = exp.id === activeTab;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(exp.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                    isActive
                      ? 'glass-card border-emerald-500/50 bg-slate-900/90 shadow-lg shadow-emerald-500/10'
                      : 'border-slate-800/80 bg-slate-950/40 hover:border-slate-700 hover:bg-slate-900/40'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`font-heading font-bold text-sm ${isActive ? 'text-emerald-400' : 'text-white group-hover:text-emerald-300'}`}>
                        {exp.company}
                      </span>
                      <span className="text-[10px] font-code px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                        {exp.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium">{exp.role}</p>
                    <p className="text-[11px] font-code text-slate-500">{exp.period}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'text-emerald-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Experience Display Panel */}
          <div className="lg:col-span-8">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-700/70 relative overflow-hidden space-y-6">
              {/* Top Accent Glow Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${activeExp.color}`} />

              {/* Title & Organization Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-white font-heading">{activeExp.role}</h3>
                  <p className="text-sm font-bold text-emerald-400 mt-1 font-heading">
                    {activeExp.tailoredTitle} <span className="text-slate-400 font-normal">@ {activeExp.company}</span>
                  </p>
                </div>
                <div className="flex flex-col text-xs font-code text-slate-400 space-y-1 sm:text-right">
                  <span className="flex items-center gap-1.5 sm:justify-end text-cyan-300">
                    <Calendar className="w-3.5 h-3.5" /> {activeExp.period}
                  </span>
                  <span className="flex items-center gap-1.5 sm:justify-end text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" /> {activeExp.location}
                  </span>
                  <span className="text-[11px] text-purple-300 font-medium">{activeExp.type}</span>
                </div>
              </div>

              {/* Impact Summary */}
              <p className="text-slate-300 text-sm leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
                {activeExp.summary}
              </p>

              {/* Bullet Points */}
              <div className="space-y-3">
                <h4 className="text-xs font-code font-bold uppercase tracking-wider text-slate-400">Key Contributions & Technical Scale</h4>
                <ul className="space-y-3">
                  {activeExp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <span className="text-xs font-code text-slate-400 block">Technologies & Methodologies:</span>
                <div className="flex flex-wrap gap-2">
                  {activeExp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-code bg-slate-900 text-emerald-300 border border-emerald-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
