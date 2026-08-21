import React, { useState } from 'react';
import { Award, BookOpen, ExternalLink, ShieldCheck, Eye, X, GraduationCap, FileCheck } from 'lucide-react';

interface CertItem {
  title: string;
  issuer: string;
  image: string;
  tag: string;
}

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertItem | null>(null);

  const certificates: CertItem[] = [
    {
      title: 'Python for Data Science & AI',
      issuer: 'IBM',
      image: '/certificate/IBM.jpg',
      tag: 'Data Science & AI'
    },
    {
      title: 'Java Programming & Software Engineering Fundamentals',
      issuer: 'Duke University',
      image: '/certificate/Duke.jpg',
      tag: 'Software Engineering'
    },
    {
      title: 'Android Application Development',
      issuer: 'Android Certified',
      image: '/certificate/android.jpg',
      tag: 'Mobile Development'
    },
    {
      title: 'Cybersecurity & Vulnerability Assessment',
      issuer: 'Internship Studio',
      image: '/certificate/Internship1.jpg',
      tag: 'Security & Mitigation'
    },
    {
      title: 'Conversational AI & Dialogflow',
      issuer: 'Google Cloud',
      image: '/certificate/Dialogflow.jpg',
      tag: 'Natural Language AI'
    },
    {
      title: 'Internet of Things (IoT) & Smart Systems',
      issuer: 'IoT Specialist',
      image: '/certificate/IOT.jpg',
      tag: 'IoT Telemetry'
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-code">
            <Award className="w-3.5 h-3.5" />
            <span>Honors & Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Certifications & <span className="text-gradient-purple">Achievements</span>
          </h2>
          <p className="text-slate-400 text-base">
            Formal achievements, GATE qualification, published technical review, and professional certifications.
          </p>
        </div>

        {/* Major Achievements Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {/* GATE Exam */}
          <div className="glass-card p-6 rounded-2xl border border-emerald-500/30 space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-code text-emerald-400 uppercase tracking-wider block font-bold">National Exam</span>
                <h3 className="font-heading font-extrabold text-lg text-white">GATE Exam Qualified</h3>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Qualified the competitive <strong>GATE (Graduate Aptitude Test in Engineering)</strong> exam in both pre-final and final years of B.Tech degree.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-code text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                Pre-Final & Final Year Qualifier
              </span>
            </div>
          </div>

          {/* Technical Book Reviewer */}
          <div className="glass-card p-6 rounded-2xl border border-cyan-500/30 space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-code text-cyan-400 uppercase tracking-wider block font-bold">Published Literature</span>
                <h3 className="font-heading font-extrabold text-lg text-white">Technical Book Reviewer</h3>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Served as official Technical Reviewer for the book <strong>"My First Mobile App for Students"</strong> by Zaid Kamil, validating technical accuracy.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-code text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/30">
                Editorial & Code Verification
              </span>
            </div>
          </div>

          {/* Academic CGPA */}
          <div className="glass-card p-6 rounded-2xl border border-purple-500/30 space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/40">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-code text-purple-400 uppercase tracking-wider block font-bold">Academic Distinction</span>
                <h3 className="font-heading font-extrabold text-lg text-white">B.Tech CS — 9.0 / 10.0</h3>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Graduated with First Class Distinction in Computer Science & Engineering from Jaypee University of Information Technology (2019–2023).
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-code text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-lg border border-purple-500/30">
                Jaypee University (2019–2023)
              </span>
            </div>
          </div>
        </div>

        {/* Certificates Grid Gallery */}
        <div className="space-y-6">
          <h3 className="text-xl font-extrabold text-white font-heading text-center">
            Professional Certificate Verification Gallery
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                onClick={() => setSelectedCert(cert)}
                className="glass-card rounded-2xl border border-slate-800/80 p-4 space-y-3 cursor-pointer group hover:border-purple-500/50 transition-all"
              >
                <div className="h-44 rounded-xl overflow-hidden bg-slate-950 relative border border-slate-800">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80 group-hover:opacity-100"
                    onError={(e) => {
                      // Fallback visual if image load fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-code bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {cert.tag}
                    </span>
                    <span className="p-1 rounded bg-slate-900/80 text-white group-hover:text-emerald-400">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-sm text-white group-hover:text-purple-300 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-code text-slate-400 mt-0.5">Issued by {cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Image Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className="relative max-w-3xl w-full bg-[#090d16] border border-purple-500/40 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="font-heading font-bold text-lg text-white">{selectedCert.title}</h3>
                <p className="text-xs font-code text-purple-400">Issuer: {selectedCert.issuer}</p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center max-h-[70vh]">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-h-[65vh] w-auto object-contain rounded-lg"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
