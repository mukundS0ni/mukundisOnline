import React, { useState } from 'react';
import { Code, Terminal, Cpu, Database, Cloud, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  skills: { name: string; level: number; note: string }[];
}

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('languages');

  const skillCategories: SkillCategory[] = [
    {
      id: 'languages',
      name: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 95, note: 'AI/LLM, PyTorch, FastAPI, Data Science' },
        { name: 'TypeScript', level: 92, note: 'Next.js, Strict Type Systems, React' },
        { name: 'JavaScript', level: 90, note: 'ES6+, Async, Web3 Integration' },
        { name: 'C / C++', level: 85, note: 'DSA, System Algorithms, High Performance' },
        { name: 'SQL', level: 88, note: 'PostgreSQL, MySQL, Schema Architecture' },
        { name: 'HTML5 / CSS3', level: 95, note: 'Glassmorphism, Responsive Modern Web' }
      ]
    },
    {
      id: 'ai-data',
      name: 'AI, ML & Data Science',
      icon: Cpu,
      skills: [
        { name: 'Mistral LLM', level: 90, note: 'Prompt Engineering & Multilingual Systems' },
        { name: 'PyTorch', level: 88, note: 'Multilingual News Video & Vision Systems' },
        { name: 'TensorFlow', level: 85, note: 'Real-time ASL Symbol Recognition' },
        { name: 'Pandas & NumPy', level: 90, note: 'Data Pipeline Wrangling & Processing' },
        { name: 'Tableau & Matplotlib', level: 85, note: 'Visual Analytics & Telemetry Dashboards' }
      ]
    },
    {
      id: 'frameworks',
      name: 'Frameworks & Frontend',
      icon: Layers,
      skills: [
        { name: 'Next.js', level: 95, note: 'App/Pages Router, SSR, Optimization' },
        { name: 'React & React Native', level: 92, note: 'Cross-platform Mobile & Web' },
        { name: 'Nuxt.js / Vue', level: 85, note: 'SSR Vue Architectures' },
        { name: 'Svelte', level: 82, note: 'Reactive UI Components' },
        { name: 'FastAPI & Flask', level: 90, note: 'Python Microservice APIs' },
        { name: 'TailwindCSS', level: 95, note: 'Custom Utilities, Cyber Glass Aesthetics' }
      ]
    },
    {
      id: 'tools-cloud',
      name: 'Developer Tools & Cloud',
      icon: Cloud,
      skills: [
        { name: 'Google Cloud Platform', level: 88, note: 'Cloud Run, Storage, Compute' },
        { name: 'Microsoft Azure', level: 82, note: 'Enterprise Cloud Security & Protection' },
        { name: 'Git & GitHub', level: 95, note: 'Async PRs, Branching, CI/CD' },
        { name: 'Android Studio & Unity', level: 85, note: 'Native Android & Interactive Demos' }
      ]
    },
    {
      id: 'cs-coursework',
      name: 'CS Core & Engineering',
      icon: BookOpen,
      skills: [
        { name: 'Data Structures & Algorithms', level: 92, note: 'GATE Exam Qualified x2' },
        { name: 'Object-Oriented Programming', level: 92, note: 'Design Patterns & Clean Code' },
        { name: 'Operating Systems & DBMS', level: 90, note: 'Process Scheduling, Indexing' },
        { name: 'Knowledge Graphs & Networks', level: 88, note: 'Graph Traversal, Protocols' },
        { name: 'Asynchronous Remote RFCs', level: 95, note: 'European Startup IST/CET Velocity' }
      ]
    }
  ];

  const currentCategory = skillCategories.find((cat) => cat.id === activeCategory) || skillCategories[0];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-code">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Skills & <span className="text-gradient-emerald">Tech Stack Matrix</span>
          </h2>
          <p className="text-slate-400 text-base">
            Comprehensive breakdown of programming languages, AI frameworks, cloud tools, and computer science fundamentals.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-code font-semibold transition-all ${
                  isActive
                    ? 'glass-card border-emerald-500/50 text-emerald-300 bg-slate-900 shadow-lg shadow-emerald-500/10'
                    : 'bg-slate-950/60 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Level Matrix Panel */}
        <div className="glass-card p-6 sm:p-10 rounded-2xl border border-slate-700/70 max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <currentCategory.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white font-heading">{currentCategory.name}</h3>
                <p className="text-xs text-slate-400">Verified proficiency and project implementations</p>
              </div>
            </div>
            <span className="text-xs font-code text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 hidden sm:inline-block">
              {currentCategory.skills.length} Technical Directives
            </span>
          </div>

          {/* Skill Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCategory.skills.map((skill) => (
              <div key={skill.name} className="space-y-2 p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-sm text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    {skill.name}
                  </span>
                  <span className="text-xs font-code text-emerald-400 font-bold">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <p className="text-[11px] font-code text-slate-400 pt-1">{skill.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
