import React, { useState } from 'react';
import { Code, ExternalLink, Sparkles, Layers, Eye, X, Cpu, Smartphone, Globe, Shield } from 'lucide-react';
import { GithubIcon } from './SocialIcons';


interface Project {
  id: string;
  title: string;
  category: 'AI & ML' | 'Web3 & DeFi' | 'Mobile & Apps' | 'Full-Stack';
  period: string;
  description: string;
  longDescription: string;
  techStack: string[];
  image: string;
  gradient: string;
  highlights: string[];
  demoUrl?: string;
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
      period: 'Sep 2023 – Present',
      description: 'AI-driven news video generator and automated YouTube uploader supporting 8 Indian languages.',
      longDescription: 'Engineered an end-to-end automated AI news pipeline utilizing Python, Mistral LLM, PyTorch, and Google Cloud Platform. Generates translated scripts, speech synthesis, and video compositions automatically dispatched to YouTube in 8 regional Indian languages.',
      techStack: ['Python', 'Mistral LLM', 'PyTorch', 'GCP', 'Kaggle', 'TTS', 'Computer Vision'],
      image: '/public/portfolio/aboutme.png',
      gradient: 'from-emerald-500/20 via-cyan-500/20 to-emerald-500/10',
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
      image: '/public/portfolio/product.png',
      gradient: 'from-cyan-500/20 via-blue-500/20 to-cyan-500/10',
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
      image: '/public/portfolio/skills.png',
      gradient: 'from-purple-500/20 via-indigo-500/20 to-purple-500/10',
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
      image: '/public/portfolio/about.png',
      gradient: 'from-amber-500/20 via-orange-500/20 to-amber-500/10',
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
      image: '/public/portfolio/product.png',
      gradient: 'from-emerald-500/20 via-teal-500/20 to-emerald-500/10',
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
      image: '/public/portfolio/aboutme.png',
      gradient: 'from-cyan-500/20 via-purple-500/20 to-cyan-500/10',
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
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-code">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Software Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Highlighted <span className="text-gradient-cyan">Projects & Demos</span>
          </h2>
          <p className="text-slate-400 text-base">
            From multilingual AI video generation and Web3 DeFi data dashboards to real-time machine vision mobile apps.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-code font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-card rounded-2xl border border-slate-800/80 overflow-hidden cursor-pointer group flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300"
            >
              {/* Project Card Top Gradient Banner */}
              <div className={`h-40 relative bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between border-b border-slate-800/60 overflow-hidden`}>
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-code font-bold bg-slate-950/80 text-emerald-400 border border-emerald-500/30">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-code text-slate-400">{project.period}</span>
                </div>

                <div className="space-y-1 z-10">
                  <h3 className="font-heading font-extrabold text-lg text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Decorative background grid pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights Summary */}
                <div className="space-y-1.5">
                  {project.highlights.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-code bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-3.5 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between text-xs font-code text-emerald-400 group-hover:text-emerald-300">
                <span className="flex items-center gap-1.5 font-medium">
                  <Eye className="w-3.5 h-3.5" /> View Technical Details
                </span>
                <span className="text-slate-500 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-[#090d16] border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden my-auto p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="px-2.5 py-1 rounded text-[10px] font-code bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl font-extrabold text-white font-heading mt-2">{selectedProject.title}</h3>
                <span className="text-xs text-slate-400 font-code">{selectedProject.period}</span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {selectedProject.longDescription}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-code font-bold uppercase tracking-wider text-emerald-400">Key Features & Architecture</h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800">
              <span className="text-xs font-code text-slate-400">Technologies Used:</span>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-lg text-xs font-code bg-slate-900 text-cyan-300 border border-slate-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-code border border-slate-700 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" /> View GitHub Repository
                </a>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
