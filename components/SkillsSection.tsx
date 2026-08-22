import React, { useState } from 'react';
import { Code, Terminal, Cpu, Cloud, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

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
      name: 'Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 95, note: 'AI/LLM, PyTorch, FastAPI, Data Science' },
        { name: 'TypeScript', level: 92, note: 'Next.js, Strict Type Systems, React' },
        { name: 'JavaScript', level: 90, note: 'ES6+, Async, Web3 Integration' },
        { name: 'C / C++', level: 85, note: 'DSA, System Algorithms, High Performance' },
        { name: 'SQL', level: 88, note: 'PostgreSQL, MySQL, Schema Architecture' },
        { name: 'HTML5 / CSS3', level: 95, note: 'High-contrast Modern Layouts' }
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
      name: 'Frameworks & Web',
      icon: Layers,
      skills: [
        { name: 'Next.js', level: 95, note: 'App/Pages Router, SSR, Optimization' },
        { name: 'React & React Native', level: 92, note: 'Cross-platform Mobile & Web' },
        { name: 'Nuxt.js / Vue', level: 85, note: 'SSR Vue Architectures' },
        { name: 'Svelte', level: 82, note: 'Reactive UI Components' },
        { name: 'FastAPI & Flask', level: 90, note: 'Python Microservice APIs' },
        { name: 'TailwindCSS', level: 95, note: 'Custom Utilities, High-Contrast Design' }
      ]
    },
    {
      id: 'tools-cloud',
      name: 'Cloud & Developer Tools',
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
    <section id="skills" className="py-16 border-b border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#18181b] border border-[#27272a] text-green-400 text-xs font-code">
            <Terminal className="w-3.5 h-3.5" />
            <span>TECHNICAL MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase font-heading tracking-tight">
            SKILLS & ENGINEERING PROFICIENCY
          </h2>
          <p className="text-zinc-400 text-sm">
            Programming languages, machine learning frameworks, cloud systems, and core computer science.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-code font-bold uppercase transition-all ${
                  isActive
                    ? 'bg-white text-black'
                    : 'bg-[#121212] text-zinc-400 border border-[#27272a] hover:border-[#3f3f46] hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Level Matrix Panel */}
        <div className="bg-[#121212] p-6 rounded border border-[#27272a] space-y-6">
          <div className="flex items-center justify-between border-b border-[#27272a] pb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#18181b] border border-[#3f3f46] flex items-center justify-center text-white font-bold">
                <currentCategory.icon className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-heading">{currentCategory.name}</h3>
                <p className="text-xs text-zinc-400">Verified proficiency and direct implementation experience</p>
              </div>
            </div>
            <span className="text-xs font-code text-zinc-400">
              {currentCategory.skills.length} Items
            </span>
          </div>

          {/* Skill Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentCategory.skills.map((skill) => (
              <div key={skill.name} className="space-y-1.5 p-3 rounded bg-[#0a0a0a] border border-[#27272a]">
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-xs text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                    {skill.name}
                  </span>
                  <span className="text-xs font-code text-blue-400 font-bold">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1.5 rounded-full bg-[#18181b] overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <p className="text-[10px] font-code text-zinc-400 pt-0.5">{skill.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
