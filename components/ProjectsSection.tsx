import React, { useState } from 'react';
import { Layers, Eye, X, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface Project {
  id: string;
  title: string;
  category: 'AI & ML' | 'Web3 & DeFi' | 'Mobile & Apps' | 'Full-Stack';
  period: string;
  description: string;
  longDescription: string;
  techStack: string[];
  borderAccent: string;
  categoryBadge: string;
  highlights: string[];
  githubUrl?: string;
}

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'samachar-ai',
      title: 'Samachar AI — Multilingual Video Engine',
      category: 'AI & ML',
      period: 'Sep 2023 – Jan 2024',
      description: 'AI-driven news video generator and automated YouTube uploader supporting 8 Indian languages.',
      longDescription: 'Engineered an end-to-end automated AI news pipeline utilizing Python, Mistral LLM, PyTorch, and Google Cloud Platform. Generates translated scripts, speech synthesis, and video compositions automatically dispatched to YouTube in 8 regional Indian languages.',
      techStack: ['Python', 'Mistral LLM', 'PyTorch', 'GCP', 'Kaggle', 'TTS', 'Computer Vision'],
      borderAccent: 'border-l-red-500',
      categoryBadge: 'bg-red-950 text-red-400 border-red-800',
      highlights: [
        'Supports 8 Indian regional languages with automated voice synthesis & translation.',
        'Leverages PyTorch deep learning models for video scene assembly.',
        'Deployed on GCP with automated scheduled video publishing pipelines.'
      ],
      githubUrl: 'https://github.com/mukundS0ni'
    },
    {
      id: 'optcl-kiosk',
      title: 'Optcl.io — AI Kiosk Management System',
      category: 'Full-Stack',
      period: 'Feb 2025 – May 2026',
      description: 'Intelligent display kiosk automation platform with real-time telemetry analytics.',
      longDescription: 'Co-founded and engineered the platform core for Optcl.io. Enables industrial smart display monitoring, live remote content dispatch, automated screen health diagnostics, and real-time telemetry processing.',
      techStack: ['Next.js', 'Python', 'FastAPI', 'IoT Cloud Sync', 'TailwindCSS', 'Real-Time Telemetry'],
      borderAccent: 'border-l-blue-500',
      categoryBadge: 'bg-blue-950 text-blue-400 border-blue-800',
      highlights: [
        'Automated kiosk display scheduling & screen health monitoring.',
        'Real-time IoT telemetry pipelines processing live screen metrics.',
        'Designed for smart infrastructure and high-throughput industrial displays.'
      ]
    },
    {
      id: 'powerloom-ocp',
      title: 'Powerloom OCP Staking & Prediction Markets',
      category: 'Web3 & DeFi',
      period: 'Jun 2024 – Dec 2024',
      description: 'OCP token launch portal, POP staking reward system, and Generative Prediction Markets.',
      longDescription: 'Built community token launch portal for OCP and POP token staking rewards. Designed Generative Prediction Markets (GPM) executing on real-time DeFi data, alongside the Snapshotter Dashboard for slot operators to monitor node status.',
      techStack: ['Next.js', 'TypeScript', 'DeFi Data', 'Snapshotter Protocol', 'TailwindCSS', 'Web3.js'],
      borderAccent: 'border-l-blue-500',
      categoryBadge: 'bg-blue-950 text-blue-400 border-blue-800',
      highlights: [
        'Implemented reward incentive mechanics for POP token staking.',
        'Built Snapshotter Dashboard for decentralized node status tracking.',
        'Generative Prediction Markets utilizing real-time DeFi data feeds.'
      ],
      githubUrl: 'https://github.com/mukundS0ni'
    },
    {
      id: 'hotel-booking',
      title: 'Hotel Booking System & Payment Engine',
      category: 'Full-Stack',
      period: 'Dec 2023 – Jan 2024',
      description: 'Next.js hotel reservation platform integrated with Strapi CMS and Stripe payments.',
      longDescription: 'Created a high-converting hotel room reservation web application featuring seamless room filtering, live availability calendars, Strapi CMS admin dashboard for inventory control, and secure Stripe payment processing.',
      techStack: ['Next.js', 'TailwindCSS', 'TypeScript', 'Strapi CMS', 'Stripe API'],
      borderAccent: 'border-l-green-500',
      categoryBadge: 'bg-green-950 text-green-400 border-green-800',
      highlights: [
        'Full Strapi headless CMS integration for dynamic room management.',
        'Stripe payment gateway integration for secure reservations.',
        'Responsive, mobile-optimized guest checkout experience.'
      ],
      githubUrl: 'https://github.com/mukundS0ni'
    },
    {
      id: 'asl-recognition',
      title: 'ASL Real-Time Image Recognition APK',
      category: 'Mobile & Apps',
      period: 'May 2021 – Jan 2022',
      description: 'American Sign Language detection mobile app with real-time feedback and TTS speech.',
      longDescription: 'Engineered a native Android application using Java and TensorFlow machine learning models to detect American Sign Language (ASL) symbols in real time, featuring immediate visual feedback and text-to-speech conversion.',
      techStack: ['Java', 'TensorFlow', 'Android Studio', 'ASL Models', 'Text-To-Speech'],
      borderAccent: 'border-l-green-500',
      categoryBadge: 'bg-green-950 text-green-400 border-green-800',
      highlights: [
        'Real-time ASL gesture detection via smartphone camera.',
        'Integrated Text-to-Speech (TTS) for instant audio translation.',
        'Optimized ML model inference for Android hardware performance.'
      ],
      githubUrl: 'https://github.com/mukundS0ni'
    },
    {
      id: 'blind-assistance',
      title: 'Blind Assistance Computer Vision System',
      category: 'Mobile & Apps',
      period: 'May 2022 – Jun 2023',
      description: 'Spatial assistive vision application incorporating PyTorch object detection and GPS navigation.',
      longDescription: 'Developed an assistive application for visually impaired individuals utilizing PyTorch computer vision algorithms for obstacle detection, spatial awareness, real-time GPS location tracking, and audio TTS guidance.',
      techStack: ['Computer Vision', 'PyTorch', 'GPS API', 'TTS Engine', 'Python', 'UI/UX Design'],
      borderAccent: 'border-l-red-500',
      categoryBadge: 'bg-red-950 text-red-400 border-red-800',
      highlights: [
        'PyTorch object recognition identifying physical obstacles in real time.',
        'Integrated spatial GPS location guidance with auditory alerts.',
        'Tailored accessible UI/UX designed for non-visual feedback.'
      ],
      githubUrl: 'https://github.com/mukundS0ni'
    }
  ];

  const categories = ['All', 'AI & ML', 'Web3 & DeFi', 'Mobile & Apps', 'Full-Stack'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 border-b border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#18181b] border border-[#27272a] text-red-400 text-xs font-code">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO CODEBASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase font-heading tracking-tight">
            HIGHLIGHTED TECHNICAL PROJECTS
          </h2>
          <p className="text-zinc-400 text-sm">
            AI video automation, Web3 DeFi data dashboards, and real-time machine vision systems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded text-xs font-code font-bold uppercase transition-all ${
                activeCategory === cat
                  ? 'bg-white text-black'
                  : 'bg-[#121212] text-zinc-400 border border-[#27272a] hover:border-[#3f3f46] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`bg-[#121212] rounded border border-[#27272a] ${project.borderAccent} border-l-4 p-5 cursor-pointer group hover:border-[#52525b] transition-all flex flex-col justify-between space-y-4`}
            >
              {/* Header Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-code font-bold border ${project.categoryBadge}`}>
                    {project.category}
                  </span>
                  <span className="text-[10px] font-code text-zinc-500">{project.period}</span>
                </div>

                <h3 className="font-heading font-bold text-base text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-zinc-300 text-xs leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-1 pt-2 border-t border-[#27272a]">
                {project.highlights.slice(0, 2).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[11px] text-zinc-400">
                    <span className="w-1 h-1 bg-zinc-400 mt-1.5 shrink-0" />
                    <span className="line-clamp-1">{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Chips */}
              <div className="pt-2 flex flex-wrap gap-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-code bg-[#18181b] text-zinc-300 border border-[#27272a]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Card Action Link */}
              <div className="pt-3 border-t border-[#27272a] flex items-center justify-between text-xs font-code text-blue-400">
                <span className="flex items-center gap-1 font-medium">
                  <Eye className="w-3.5 h-3.5" /> Technical Specs
                </span>
                <span className="text-zinc-500">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-[#121212] border border-[#3f3f46] rounded p-6 shadow-2xl my-auto space-y-5">
            <div className="flex items-center justify-between border-b border-[#27272a] pb-4">
              <div>
                <span className={`px-2 py-0.5 rounded text-[10px] font-code border ${selectedProject.categoryBadge}`}>
                  {selectedProject.category}
                </span>
                <h3 className="text-lg font-black text-white font-heading mt-2">{selectedProject.title}</h3>
                <span className="text-xs text-zinc-400 font-code">{selectedProject.period}</span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 rounded text-zinc-400 hover:text-white hover:bg-[#18181b]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-zinc-300 text-xs leading-relaxed bg-[#0a0a0a] p-3 rounded border border-[#27272a]">
              {selectedProject.longDescription}
            </p>

            <div className="space-y-2">
              <h4 className="text-[11px] font-code font-bold uppercase text-zinc-400">Features & Architecture</h4>
              <ul className="space-y-1.5">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 bg-blue-500 mt-1.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-[#27272a]">
              <span className="text-[11px] font-code text-zinc-400">Tech Stack:</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded text-[11px] font-code bg-[#18181b] text-zinc-300 border border-[#27272a]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#27272a] flex items-center justify-end gap-3">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#18181b] hover:bg-[#27272a] text-zinc-200 text-xs font-code border border-[#3f3f46]"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub
                </a>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-1.5 rounded bg-white hover:bg-zinc-200 text-black font-bold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
