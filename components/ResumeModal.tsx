import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, Briefcase, GraduationCap, Award, Code, ShieldCheck } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const text = `
MUKUND SONI
Head of Technology | Staff AI & Web3 Engineer
Email: mukundsoni08@gmail.com | Phone: +91 9992976692
GitHub: github.com/mukundS0ni | LinkedIn: linkedin.com/in/mukundx/

SUMMARY
Results-oriented Head of Technology and Senior AI/Full-Stack Engineer with proven experience creating AI-powered automation platforms, DeFi prediction market infrastructure, and custom high-throughput web/mobile applications. Skilled in distributed European/global remote collaboration, asynchronous RFC writing, and technical ownership from concept to cloud deployment.

EXPERIENCE
1. Optcl — Co-Founder & Head of Technology (Feb 2025 – Mar 2026) | Technical Consultant (Mar 2026 – May 2026)
   • Engineered Optcl.io, an AI-powered platform for intelligent display kiosk management featuring real-time analytics and automated content dispatch.
   • Designed end-to-end AI-powered systems for industrial automation and smart infrastructure applications.

2. Powerloom Protocol — Senior Frontend & DeFi Developer (Jun 2024 – Dec 2024)
   • Built community token launch interface for OCP token and reward incentive mechanics for staking POP token.
   • Developed Generative Prediction Markets (GPM) utilizing real-time DeFi data provided by Powerloom Protocol.
   • Upgraded Snapshotter Dashboard enabling slot owners to monitor node uptime, reward distributions, and staking status.
   • Collaborated asynchronously with distributed European engineering teams across IST and CET time zones.

3. Sachtek — Freelance Mobile & Full-Stack Architect (Sep 2023 – Mar 2024)
   • Architected and developed custom mobile application "AD Numeroscope" for high-precision numerology chart generation based on DOB and phonetic algorithms.

4. Nonceblox — Software Analyst & Web3 Engineer (Jun 2023 – Aug 2023)
   • Integrated Web3 solutions for NFT marketplaces and Web3 gaming ecosystems.
   • Integrated AI-powered NFT creation tools and custom headless CMS architecture.

5. BirlaSoft — Cloud & Security Engineering Intern (Jun 2022 – Jul 2022)
   • Implemented Microsoft Azure enterprise cloud solutions, hybrid device protection, and automated vulnerability detection protocols.

6. Internship Studio — Cybersecurity Intern (Aug 2021 – Sep 2021)
   • Performed ethical hacking assessments, security vulnerability mapping, and risk mitigation strategies.

EDUCATION
Jaypee University Of Information Technology (2019 – 2023)
• B.Tech in Computer Science & Engineering | CGPA: 9.0 / 10.0

ACHIEVEMENTS & CERTIFICATIONS
• Qualified GATE Examination in both pre-final and final years of B.Tech.
• Technical Reviewer for "My First Mobile App for Students" published book by Zaid Kamil.
• Industry Certifications: Duke University, IBM Cloud/AI, Python Data Science, Android Development.

SKILLS
• Languages: Python, C/C++, TypeScript, JavaScript, SQL (PostgreSQL, MySQL), HTML/CSS
• AI & ML: PyTorch, TensorFlow, Mistral LLM, Pandas, NumPy, Tableau, Matplotlib
• Frameworks: Next.js, React, React Native, Nuxt.js, Svelte, Vue, FastAPI, Flask, TailwindCSS
• Tools: GCP, Azure, Git/GitHub, Docker, VS Code, Android Studio, Unity
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#121212] border border-[#3f3f46] rounded shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#27272a] bg-[#0a0a0a]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
            <h2 className="text-sm font-bold text-white font-heading">Mukund Soni — Official Resume</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-code rounded bg-[#18181b] hover:bg-[#27272a] text-zinc-300 border border-[#3f3f46]"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy Text'}
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1 px-3 py-1 text-xs font-code rounded bg-white hover:bg-zinc-200 text-black font-bold"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-zinc-400 hover:text-white hover:bg-[#18181b]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Container */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 bg-[#0a0a0a] text-zinc-200 printable-resume">
          {/* Resume Header */}
          <div className="border-b border-[#27272a] pb-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <h1 className="text-2xl font-black text-white uppercase tracking-tight font-heading">MUKUND SONI</h1>
                <p className="text-blue-400 font-bold text-xs mt-0.5 font-code">
                  Head of Technology | Full-Stack AI & Web3 Systems Engineer
                </p>
              </div>
              <div className="flex flex-col text-xs text-zinc-400 space-y-0.5 md:text-right font-code">
                <span>📧 mukundsoni08@gmail.com</span>
                <span>📞 +91 9992976692</span>
                <span>🌐 github.com/mukundS0ni</span>
                <span>🔗 linkedin.com/in/mukundx</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-zinc-300 leading-relaxed max-w-3xl">
              Engineering leader with expertise building AI display platforms, DeFi prediction market infrastructure, and cross-platform native/web solutions. Proven track record in asynchronous European startup environments, technical RFC writing, and end-to-end product ownership.
            </p>
          </div>

          {/* Section: Experience */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-red-500">
              <Briefcase className="w-4 h-4" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-white font-heading">Professional Experience</h2>
            </div>
            <div className="space-y-5">
              {/* Optcl */}
              <div className="border-l-2 border-red-500 pl-3 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-white text-sm">Co-Founder & Head of Technology <span className="text-red-400 font-normal text-xs">@ Optcl</span></h3>
                  <span className="text-[11px] font-code text-zinc-400">Feb 2025 – May 2026</span>
                </div>
                <p className="text-[11px] text-zinc-400 italic">Head of Tech (Feb 2025 – Mar 2026) • Technical Consultant (Mar 2026 – May 2026)</p>
                <ul className="list-disc list-inside text-xs text-zinc-300 space-y-1 mt-1">
                  <li>Engineered Optcl.io, an AI-powered platform for intelligent display kiosk management with real-time telemetry analytics.</li>
                  <li>Architected end-to-end AI systems for industrial automation and smart infrastructure monitoring.</li>
                </ul>
              </div>

              {/* Powerloom */}
              <div className="border-l-2 border-blue-500 pl-3 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-white text-sm">Senior Frontend & DeFi Developer <span className="text-blue-400 font-normal text-xs">@ Powerloom Protocol</span></h3>
                  <span className="text-[11px] font-code text-zinc-400">Jun 2024 – Dec 2024</span>
                </div>
                <ul className="list-disc list-inside text-xs text-zinc-300 space-y-1 mt-1">
                  <li>Built OCP token launch website and implemented community incentive mechanisms for staking POP token rewards.</li>
                  <li>Architected Generative Prediction Markets (GPM) utilizing real-time DeFi data feeds.</li>
                  <li>Collaborated asynchronously with a distributed European team across IST & CET time zones writing RFC design docs.</li>
                </ul>
              </div>

              {/* Sachtek */}
              <div className="border-l-2 border-green-500 pl-3 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-white text-sm">Freelance Mobile & Full-Stack Architect <span className="text-green-400 font-normal text-xs">@ Sachtek</span></h3>
                  <span className="text-[11px] font-code text-zinc-400">Sep 2023 – Mar 2024</span>
                </div>
                <ul className="list-disc list-inside text-xs text-zinc-300 space-y-1 mt-1">
                  <li>Developed "AD Numeroscope" mobile app for calculation of numerology values based on phonetic algorithms.</li>
                </ul>
              </div>

              {/* Nonceblox */}
              <div className="border-l-2 border-zinc-600 pl-3 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-white text-sm">Software Analyst & Web3 Developer <span className="text-zinc-400 font-normal text-xs">@ Nonceblox</span></h3>
                  <span className="text-[11px] font-code text-zinc-400">Jun 2023 – Aug 2023</span>
                </div>
                <ul className="list-disc list-inside text-xs text-zinc-300 space-y-1">
                  <li>Delivered Web3 solutions for NFT marketplaces and integrated AI-driven generative NFT creation pipelines.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Key Projects */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-blue-500">
              <Code className="w-4 h-4" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-white font-heading">Highlighted Technical Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded bg-[#121212] border border-[#27272a]">
                <h4 className="font-bold text-white text-xs">Samachar AI</h4>
                <p className="text-red-400 font-code text-[10px] mb-0.5">Python, LLM, PyTorch, GCP</p>
                <p className="text-zinc-400 text-[11px]">Automated AI news video generation platform uploading news content across 8 Indian languages.</p>
              </div>

              <div className="p-2.5 rounded bg-[#121212] border border-[#27272a]">
                <h4 className="font-bold text-white text-xs">Hotel Booking System</h4>
                <p className="text-blue-400 font-code text-[10px] mb-0.5">Next.js, Tailwind, Strapi CMS, Stripe</p>
                <p className="text-zinc-400 text-[11px]">Full-stack hotel reservation engine with Strapi CMS backend and Stripe payment integration.</p>
              </div>
            </div>
          </div>

          {/* Section: Education & Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2 text-green-500">
                <GraduationCap className="w-4 h-4" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-white font-heading">Education</h2>
              </div>
              <div className="p-2.5 rounded bg-[#121212] border border-[#27272a] text-xs">
                <h3 className="font-bold text-white">Jaypee University Of Information Technology</h3>
                <p className="text-zinc-400">B.Tech in Computer Science & Engineering</p>
                <p className="text-green-400 font-code mt-0.5">CGPA: 9.0 / 10.0</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2 text-red-500">
                <Award className="w-4 h-4" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-white font-heading">Achievements</h2>
              </div>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                <li className="flex items-start gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>GATE Exam Qualified</strong> twice (pre-final & final years).</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                  <span><strong>Technical Reviewer</strong> for <em>"My First Mobile App for Students"</em> by Zaid Kamil.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-[#27272a] bg-[#0a0a0a]">
          <span className="text-xs text-zinc-400 font-code">Mukund Soni • 2026</span>
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded bg-white text-black font-bold text-xs"
          >
            <Download className="w-3.5 h-3.5" />
            Download Resume PDF
          </button>
        </div>
      </div>
    </div>
  );
};
