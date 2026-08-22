import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, Globe, Cpu, Award } from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  tailoredTitle: string;
  company: string;
  period: string;
  location: string;
  type: string;
  accentColor: string;
  badge: string;
  badgeColor: string;
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
      accentColor: 'border-l-red-500',
      badge: 'AI KIOSK PLATFORM',
      badgeColor: 'bg-red-950 text-red-400 border-red-800',
      summary: 'Spearheaded engineering for intelligent display kiosk automation and real-time telemetry systems for smart infrastructure.',
      bullets: [
        'Developed Optcl.io, an AI-powered platform for intelligent display kiosk management, focusing on automated content delivery and live telemetry analytics.',
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
      accentColor: 'border-l-blue-500',
      badge: 'DEFI & STAKING',
      badgeColor: 'bg-blue-950 text-blue-400 border-blue-800',
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
      accentColor: 'border-l-green-500',
      badge: 'MOBILE & ENTERPRISE',
      badgeColor: 'bg-green-950 text-green-400 border-green-800',
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
      accentColor: 'border-l-zinc-400',
      badge: 'WEB3 & AI CMS',
      badgeColor: 'bg-zinc-900 text-zinc-300 border-zinc-700',
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
      accentColor: 'border-l-zinc-600',
      badge: 'AZURE SECURITY',
      badgeColor: 'bg-zinc-900 text-zinc-400 border-zinc-800',
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
      tailoredTitle: 'Cybersecurity Specialist',
      company: 'Internship Studio',
      period: 'Aug 2021 – Sep 2021',
      location: 'Remote',
      type: 'Internship',
      accentColor: 'border-l-zinc-700',
      badge: 'ETHICAL HACKING',
      badgeColor: 'bg-zinc-900 text-zinc-400 border-zinc-800',
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
    <section id="experience" className="py-16 border-b border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#18181b] border border-[#27272a] text-blue-400 text-xs font-code">
            <Briefcase className="w-3.5 h-3.5" />
            <span>TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase font-heading tracking-tight">
            WORK EXPERIENCE & TECHNICAL IMPACT
          </h2>
          <p className="text-zinc-400 text-sm">
            Engineering leadership across startup co-founding, distributed European DeFi protocols, AI kiosk systems, and full-stack engineering.
          </p>
        </div>

        {/* Remote Capability Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-[#121212] p-4 rounded border border-[#27272a] border-t-2 border-t-blue-500">
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-1 font-heading">
              <Globe className="w-4 h-4 text-blue-500" />
              <span>Asynchronous & Remote Work</span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed">European startup track record writing technical RFCs and maintaining high velocity across IST & CET time zones.</p>
          </div>

          <div className="bg-[#121212] p-4 rounded border border-[#27272a] border-t-2 border-t-red-500">
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-1 font-heading">
              <Cpu className="w-4 h-4 text-red-500" />
              <span>End-to-End Ownership</span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed">From initial architecture and cloud deployment to production telemetry and client management.</p>
          </div>

          <div className="bg-[#121212] p-4 rounded border border-[#27272a] border-t-2 border-t-green-500">
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-1 font-heading">
              <Award className="w-4 h-4 text-green-500" />
              <span>Leadership Scale</span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed">Co-founded & led technology at Optcl; engineered token incentive dashboards for Powerloom Protocol.</p>
          </div>
        </div>

        {/* Experience Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Company Selector Tab Column */}
          <div className="lg:col-span-4 space-y-2">
            {experiences.map((exp) => {
              const isActive = exp.id === activeTab;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(exp.id)}
                  className={`w-full text-left p-3.5 rounded border transition-all flex items-center justify-between group ${
                    isActive
                      ? `bg-[#18181b] border-[#52525b] ${exp.accentColor} border-l-4`
                      : 'bg-[#121212] border-[#27272a] hover:border-[#3f3f46]'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`font-heading font-bold text-sm ${isActive ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
                        {exp.company}
                      </span>
                      <span className={`text-[9px] font-code px-1.5 py-0.5 rounded border ${exp.badgeColor}`}>
                        {exp.badge}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400">{exp.role}</p>
                    <p className="text-[10px] font-code text-zinc-500">{exp.period}</p>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-zinc-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Experience Display Panel */}
          <div className="lg:col-span-8">
            <div className={`bg-[#121212] p-6 rounded border border-[#27272a] ${activeExp.accentColor} border-l-4 space-y-5`}>
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#27272a] pb-4">
                <div>
                  <h3 className="text-xl font-black text-white font-heading">{activeExp.role}</h3>
                  <p className="text-xs font-bold text-blue-400 font-code mt-0.5">
                    {activeExp.tailoredTitle} <span className="text-zinc-400 font-normal">@ {activeExp.company}</span>
                  </p>
                </div>
                <div className="flex flex-col text-xs font-code text-zinc-400 space-y-0.5 sm:text-right">
                  <span className="flex items-center gap-1 sm:justify-end text-zinc-300">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" /> {activeExp.period}
                  </span>
                  <span className="flex items-center gap-1 sm:justify-end text-zinc-400">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" /> {activeExp.location}
                  </span>
                </div>
              </div>

              {/* Impact Summary */}
              <p className="text-zinc-300 text-xs leading-relaxed bg-[#0a0a0a] p-3 rounded border border-[#27272a]">
                {activeExp.summary}
              </p>

              {/* Bullet Points */}
              <div className="space-y-2">
                <h4 className="text-[11px] font-code font-bold uppercase text-zinc-400">Key Contributions</h4>
                <ul className="space-y-2">
                  {activeExp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <span className="w-1.5 h-1.5 bg-blue-500 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="pt-3 border-t border-[#27272a] space-y-1.5">
                <span className="text-[11px] font-code text-zinc-400 block">Technologies & Tools:</span>
                <div className="flex flex-wrap gap-1.5">
                  {activeExp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-code bg-[#18181b] text-zinc-300 border border-[#27272a]"
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
