import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, ExternalLink, Sparkles, Briefcase, GraduationCap, Award, Code, ShieldCheck } from 'lucide-react';

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
      <div className="relative w-full max-w-4xl bg-[#0d1322] border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-heading">Mukund Soni — Official Resume</h2>
              <p className="text-xs text-slate-400">Updated Portfolio Document (Ready for Print & Download)</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy Text'}
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Container */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 bg-[#090d16] text-slate-200 printable-resume">
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight font-heading">MUKUND SONI</h1>
                <p className="text-emerald-400 font-medium text-sm mt-1">
                  Head of Technology | Full-Stack AI & Web3 Systems Engineer
                </p>
              </div>
              <div className="flex flex-col text-xs text-slate-400 space-y-1 md:text-right font-code">
                <span>📧 mukundsoni08@gmail.com</span>
                <span>📞 +91 9992976692</span>
                <span>🌐 github.com/mukundS0ni</span>
                <span>🔗 linkedin.com/in/mukundx</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-300 leading-relaxed max-w-3xl">
              Engineering leader with expertise building high-throughput AI display platforms, DeFi prediction market infrastructure, and cross-platform native/web solutions. Proven track record in asynchronous European startup environments, technical RFC writing, and end-to-end product ownership.
            </p>
          </div>

          {/* Section: Experience */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-emerald-400">
              <Briefcase className="w-5 h-5" />
              <h2 className="text-lg font-bold uppercase tracking-wider text-white">Professional Experience</h2>
            </div>
            <div className="space-y-6">
              {/* Optcl */}
              <div className="border-l-2 border-emerald-500/40 pl-4 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-white text-base">Co-Founder & Head of Technology <span className="text-emerald-400 font-normal text-sm">@ Optcl</span></h3>
                  <span className="text-xs font-code text-slate-400">Feb 2025 – May 2026</span>
                </div>
                <p className="text-xs text-emerald-400/90 font-medium italic">Head of Technology (Feb 2025 – Mar 2026) • Technical Consultant (Mar 2026 – May 2026)</p>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 mt-2">
                  <li>Engineered Optcl.io, an AI-powered platform for intelligent display kiosk management with real-time telemetry analytics and automated content delivery.</li>
                  <li>Architected end-to-end AI-powered systems for industrial automation and smart infrastructure monitoring.</li>
                  <li>Managed technical roadmap, cloud infrastructure deployment, and hardware-to-cloud IoT syncing.</li>
                </ul>
              </div>

              {/* Powerloom */}
              <div className="border-l-2 border-cyan-500/40 pl-4 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-white text-base">Senior Frontend & DeFi Developer <span className="text-cyan-400 font-normal text-sm">@ Powerloom Protocol</span></h3>
                  <span className="text-xs font-code text-slate-400">Jun 2024 – Dec 2024</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 mt-2">
                  <li>Built OCP token launch website and implemented community incentive mechanisms for POP token staking rewards.</li>
                  <li>Architected Generative Prediction Markets (GPM) powered by real-time DeFi data nodes on Powerloom Protocol.</li>
                  <li>Redesigned and optimized the Snapshotter Dashboard, enabling node operators to monitor node status and reward slots.</li>
                  <li>Operated in an asynchronous distributed European remote setup, authoring technical RFCs and maintaining high velocity across IST & CET time zones.</li>
                </ul>
              </div>

              {/* Sachtek */}
              <div className="border-l-2 border-purple-500/40 pl-4 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-white text-base">Freelance Mobile & Full-Stack Architect <span className="text-purple-400 font-normal text-sm">@ Sachtek</span></h3>
                  <span className="text-xs font-code text-slate-400">Sep 2023 – Mar 2024</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 mt-2">
                  <li>Designed and built custom enterprise applications tailored to client specifications.</li>
                  <li>Created "AD Numeroscope" mobile app for calculation of numerological values, chart generation, and phonetic interpretations based on user inputs.</li>
                </ul>
              </div>

              {/* Nonceblox */}
              <div className="border-l-2 border-amber-500/40 pl-4 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-white text-base">Software Analyst & Web3 Developer <span className="text-amber-400 font-normal text-sm">@ Nonceblox</span></h3>
                  <span className="text-xs font-code text-slate-400">Jun 2023 – Aug 2023</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 mt-2">
                  <li>Delivered Web3 solutions for NFT marketplaces and blockchain gaming portals.</li>
                  <li>Integrated AI-driven generative NFT creation pipelines into web applications.</li>
                  <li>Built a custom content management system (CMS) for scalable digital asset organization.</li>
                </ul>
              </div>

              {/* Birlasoft */}
              <div className="border-l-2 border-slate-600 pl-4 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-white text-base">Cloud & Security Engineering Intern <span className="text-slate-400 font-normal text-sm">@ BirlaSoft</span></h3>
                  <span className="text-xs font-code text-slate-400">Jun 2022 – Jul 2022</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                  <li>Contributed to enterprise Microsoft Azure deployment, hybrid device protection, network vulnerability scanners, and risk mitigation.</li>
                </ul>
              </div>

              {/* Internship Studio */}
              <div className="border-l-2 border-slate-600 pl-4 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-white text-base">Cybersecurity Intern <span className="text-slate-400 font-normal text-sm">@ Internship Studio</span></h3>
                  <span className="text-xs font-code text-slate-400">Aug 2021 – Sep 2021</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                  <li>Applied ethical hacking protocols to detect system vulnerabilities and implement defensive security controls.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Key Projects */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-cyan-400">
              <Code className="w-5 h-5" />
              <h2 className="text-lg font-bold uppercase tracking-wider text-white">Highlighted Technical Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <h4 className="font-bold text-white text-sm">Samachar AI</h4>
                <p className="text-emerald-400 font-code text-[11px] mb-1">Python, LLM, PyTorch, GCP, Kaggle</p>
                <p className="text-slate-300">Automated AI news video generation platform uploading news content across 8 Indian languages.</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <h4 className="font-bold text-white text-sm">Hotel Booking System</h4>
                <p className="text-cyan-400 font-code text-[11px] mb-1">Next.js, Tailwind, TypeScript, Strapi CMS, Stripe</p>
                <p className="text-slate-300">Full-stack hotel room reservation engine with Strapi CMS backend and Stripe payment integration.</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <h4 className="font-bold text-white text-sm">ASL Real-Time Recognition App</h4>
                <p className="text-purple-400 font-code text-[11px] mb-1">TensorFlow ML, Java, Android Studio</p>
                <p className="text-slate-300">Real-time American Sign Language detection Android application with instant text-to-speech feedback.</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <h4 className="font-bold text-white text-sm">Blind Assistance System</h4>
                <p className="text-amber-400 font-code text-[11px] mb-1">Computer Vision, PyTorch, GPS, TTS</p>
                <p className="text-slate-300">Spatial assistive mobile app incorporating PyTorch object detection, real-time GPS navigation, and TTS guidance.</p>
              </div>
            </div>
          </div>

          {/* Section: Education & Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3 text-emerald-400">
                <GraduationCap className="w-5 h-5" />
                <h2 className="text-base font-bold uppercase tracking-wider text-white">Education</h2>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs">
                <h3 className="font-bold text-white">Jaypee University Of Information Technology</h3>
                <p className="text-slate-300">B.Tech in Computer Science & Engineering</p>
                <p className="text-emerald-400 font-code mt-1">Jun 2019 – Jun 2023 | CGPA: 9.0 / 10.0</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3 text-purple-400">
                <Award className="w-5 h-5" />
                <h2 className="text-base font-bold uppercase tracking-wider text-white">Achievements</h2>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>GATE Exam Qualified</strong> twice (in both pre-final and final years of B.Tech).</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Technical Book Reviewer</strong> for <em>"My First Mobile App for Students"</em> by Zaid Kamil.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-900/90">
          <span className="text-xs text-slate-400 font-code">Mukund Soni • Portfolio 2026</span>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-xs shadow-lg transition-all"
          >
            <Download className="w-4 h-4" />
            Download Printable Resume PDF
          </button>
        </div>
      </div>
    </div>
  );
};
