import React, { useState } from 'react';
import { Award, BookOpen, ShieldCheck, Eye, X, GraduationCap, FileText, ExternalLink, Trophy, Sparkles } from 'lucide-react';

interface CertItem {
  id: string;
  title: string;
  issuer: string;
  file: string;
  category: 'Letters & Experience' | 'Google & Contests' | 'AI, Data & Cloud' | 'Software & Mobile' | 'Global Languages';
  priority: number;
  highlight?: string;
}

export const CertificationsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCert, setSelectedCert] = useState<CertItem | null>(null);

  const bookImage = "/assets/Book Named My First Mobile App for Students: A comprehensive guide to Android app development for beginners (English Edition).png";

  const certificates: CertItem[] = [
    // 1. Letters & Enterprise Experience (Priority 1)
    {
      id: 'nonceblox-lor',
      title: 'Letter of Recommendation (Web3 & Software Analyst)',
      issuer: 'Nonceblox',
      file: '/certificate/Nonceblox LOR.jpg',
      category: 'Letters & Experience',
      priority: 1,
      highlight: 'Official Executive Recommendation'
    },
    {
      id: 'birlasoft-cert',
      title: 'Enterprise Cloud & Security Internship Certificate',
      issuer: 'BirlaSoft',
      file: '/certificate/Birlasoft Certificate.jpg',
      category: 'Letters & Experience',
      priority: 1,
      highlight: 'Azure Cloud & Hybrid Security'
    },
    {
      id: 'internship-studio-cert',
      title: 'Cybersecurity & Mitigation Internship Certificate',
      issuer: 'Internship Studio',
      file: '/certificate/Internship Studio Internship.jpg',
      category: 'Letters & Experience',
      priority: 1,
      highlight: 'Ethical Hacking & System Hardening'
    },

    // 2. Google & Global Contests (Priority 2)
    {
      id: 'ird-contest-winner',
      title: 'Innovation, Research and Development (IRD) Contest Winner',
      issuer: 'IRD Cell',
      file: '/certificate/Innovation, Research and Development (IRD).jpg',
      category: 'Google & Contests',
      priority: 2,
      highlight: 'Contest Winner — IRD Cell'
    },
    {
      id: 'google-kickstart-2022',
      title: 'Google KickStart 2022 Global Algorithmic Contest',
      issuer: 'Google',
      file: '/certificate/Google KickStart 2022.jpg',
      category: 'Google & Contests',
      priority: 2,
      highlight: 'Global Algorithmic Competition'
    },
    {
      id: 'google-kickstart-2021',
      title: 'Google KickStart 2021 Global Algorithmic Contest',
      issuer: 'Google',
      file: '/certificate/Google KickStart 2021.jpg',
      category: 'Google & Contests',
      priority: 2,
      highlight: 'Global Algorithmic Competition'
    },
    {
      id: 'google-hashcode-2022',
      title: 'Google HashCode 2022 Team Programming Competition',
      issuer: 'Google',
      file: '/certificate/Google HashCode 2022.jpg',
      category: 'Google & Contests',
      priority: 2,
      highlight: 'Team Engineering Challenge'
    },
    {
      id: 'google-hashcode-2021',
      title: 'Google HashCode 2021 Team Programming Competition',
      issuer: 'Google',
      file: '/certificate/Google HashCode 2021.jpg',
      category: 'Google & Contests',
      priority: 2,
      highlight: 'Team Engineering Challenge'
    },
    {
      id: 'national-eng-olympiad',
      title: 'National Engineering Olympiad Certificate',
      issuer: 'NEO',
      file: '/certificate/National Engineering Olyampiad.jpg',
      category: 'Google & Contests',
      priority: 2,
      highlight: 'National Merit Rank'
    },
    {
      id: 'raise-2020',
      title: 'RAISE 2020 Global AI Summit Certificate',
      issuer: 'Government of India / MeitY',
      file: '/certificate/Raise 2020 Certificate.jpg',
      category: 'Google & Contests',
      priority: 2,
      highlight: 'Global Responsible AI Summit'
    },

    // 3. AI, Data Science & Cloud Specializations (Priority 3)
    {
      id: 'ibm-data-science',
      title: 'Fundamentals of Scalable Data Science',
      issuer: 'IBM',
      file: '/certificate/IBM Fundamentals of Scalable Data Science.jpg',
      category: 'AI, Data & Cloud',
      priority: 3,
      highlight: 'Big Data & Scalable AI'
    },
    {
      id: 'python-data-science',
      title: 'Python for Data Science & AI',
      issuer: 'IBM / Coursera',
      file: '/certificate/Python Data Science.jpg',
      category: 'AI, Data & Cloud',
      priority: 3,
      highlight: 'Data Science & Machine Learning'
    },
    {
      id: 'python-specialization',
      title: 'Python for Everybody Specialization',
      issuer: 'University of Michigan',
      file: '/certificate/Python for Everybody Specialization.png',
      category: 'AI, Data & Cloud',
      priority: 3,
      highlight: '5-Course Full Python Mastery'
    },
    {
      id: 'google-iot',
      title: 'Industrial IoT on Google Cloud Platform',
      issuer: 'Google Cloud',
      file: '/certificate/Google Industrial IoT on Google Cloud Platform.jpg',
      category: 'AI, Data & Cloud',
      priority: 3,
      highlight: 'IoT Telemetry & Cloud Compute'
    },
    {
      id: 'google-dialogflow',
      title: 'Building Conversational Experiences with Dialogflow',
      issuer: 'Google Cloud',
      file: '/certificate/Google Building Conversational Experiences with Dialogflow.jpg',
      category: 'AI, Data & Cloud',
      priority: 3,
      highlight: 'Conversational NLP & AI Agents'
    },
    {
      id: 'capstone-python-data',
      title: 'Capstone: Retrieving, Processing & Visualizing Data',
      issuer: 'University of Michigan',
      file: '/certificate/Capstone Retriving: Processing, and Visualizing Data with Python.jpg',
      category: 'AI, Data & Cloud',
      priority: 3,
      highlight: 'Data Processing Pipelines'
    },
    {
      id: 'python-databases',
      title: 'Using Databases with Python & SQL',
      issuer: 'University of Michigan',
      file: '/certificate/Using Databases with Python.jpg',
      category: 'AI, Data & Cloud',
      priority: 3,
      highlight: 'Relational Database Architecture'
    },
    {
      id: 'python-web-data',
      title: 'Using Python to Access Web Data & APIs',
      issuer: 'University of Michigan',
      file: '/certificate/Using Python to Access Web Data.jpg',
      category: 'AI, Data & Cloud',
      priority: 3,
      highlight: 'API Integration & Web Scraping'
    },

    // 4. Software & Mobile Development (Priority 4)
    {
      id: 'book-review-cert',
      title: 'Technical Reviewer — "My First Mobile App for Students"',
      issuer: 'Zaid Kamil (Published Author)',
      file: bookImage,
      category: 'Software & Mobile',
      priority: 4,
      highlight: 'Published Book Reviewer'
    },
    {
      id: 'android-centrale',
      title: 'Building Your First Android App',
      issuer: 'CentraleSupélec (France)',
      file: '/certificate/CentraleSupelec Building Your First Android App.jpg',
      category: 'Software & Mobile',
      priority: 4,
      highlight: 'Native Mobile Development'
    },
    {
      id: 'programming-fundamentals',
      title: 'Programming Fundamentals & Java Architecture',
      issuer: 'Duke University',
      file: '/certificate/Programming Fundamentals.jpg',
      category: 'Software & Mobile',
      priority: 4,
      highlight: 'Object-Oriented Design'
    },
    {
      id: 'programming-for-everybody',
      title: 'Programming for Everybody (Getting Started with Python)',
      issuer: 'University of Michigan',
      file: '/certificate/Programming for Everybody.jpg',
      category: 'Software & Mobile',
      priority: 4
    },
    {
      id: 'internship-studio-training',
      title: 'Cybersecurity & Ethical Hacking Systems Training',
      issuer: 'Internship Studio',
      file: '/certificate/Internship Studio Training.jpg',
      category: 'Software & Mobile',
      priority: 4
    },

    // 5. Global Languages & International Competencies (Priority 5)
    {
      id: 'mandarin-specialization',
      title: 'Mandarin Chinese Specialization',
      issuer: 'Peking University',
      file: '/certificate/Mandarin Chinese Specialization.jpg',
      category: 'Global Languages',
      priority: 5,
      highlight: 'Full Mandarin Specialization'
    },
    {
      id: 'mandarin-1',
      title: 'Mandarin Chinese Level 1',
      issuer: 'Peking University',
      file: '/certificate/Mandarin Chinese 1.jpg',
      category: 'Global Languages',
      priority: 5
    },
    {
      id: 'mandarin-2',
      title: 'Mandarin Chinese Level 2',
      issuer: 'Peking University',
      file: '/certificate/Mandarin Chinese 3.jpg',
      category: 'Global Languages',
      priority: 5
    },
    {
      id: 'mandarin-4',
      title: 'Mandarin Chinese Level 4',
      issuer: 'Peking University',
      file: '/certificate/Mandarin Chinese 4.jpg',
      category: 'Global Languages',
      priority: 5
    },
    {
      id: 'spanish-vocabulary',
      title: 'Spanish Vocabulary & Professional Communication',
      issuer: 'UC Davis',
      file: '/certificate/UCDAVIS Spanish Vocabulary: Meeting People.jpg',
      category: 'Global Languages',
      priority: 5
    }
  ];

  const categories = [
    'All',
    'Letters & Experience',
    'Google & Contests',
    'AI, Data & Cloud',
    'Software & Mobile',
    'Global Languages'
  ];

  const filteredCertificates = activeCategory === 'All'
    ? certificates
    : certificates.filter((c) => c.category === activeCategory);

  return (
    <section id="certifications" className="py-16 border-b border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#18181b] border border-[#27272a] text-blue-400 text-xs font-code">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & VERIFIED ACCREDITATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase font-heading tracking-tight">
            CERTIFICATIONS, LORS & COMPETITIONS ({certificates.length})
          </h2>
          <p className="text-zinc-400 text-sm">
            Official letters of recommendation, Google global contests, contest victories, enterprise certificates, and technical book reviews.
          </p>
        </div>

        {/* Top 4 Key Honors Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {/* GATE Exam */}
          <div className="bg-[#121212] p-4 rounded border border-[#27272a] border-l-4 border-l-red-500 space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-red-500" />
              <h3 className="font-heading font-bold text-sm text-white">GATE Exam Qualified (2x)</h3>
            </div>
            <p className="text-[11px] text-zinc-300 leading-relaxed">
              Qualified the competitive GATE exam twice in pre-final and final years of B.Tech.
            </p>
            <span className="inline-block text-[9px] font-code text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-800">
              National Engineering Qualifier
            </span>
          </div>

          {/* IRD Contest Winner */}
          <div className="bg-[#121212] p-4 rounded border border-[#27272a] border-l-4 border-l-green-500 space-y-2 cursor-pointer hover:border-[#52525b]" onClick={() => setSelectedCert(certificates.find(c => c.id === 'ird-contest-winner') || null)}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-green-500" />
                <h3 className="font-heading font-bold text-sm text-white">IRD Contest Winner</h3>
              </div>
              <Eye className="w-3.5 h-3.5 text-zinc-400" />
            </div>
            <p className="text-[11px] text-zinc-300 leading-relaxed">
              Winner of the Innovation, Research and Development (IRD) contest issued by IRD Cell.
            </p>
            <span className="inline-block text-[9px] font-code text-green-400 bg-green-950 px-2 py-0.5 rounded border border-green-800">
              Contest Winner — IRD Cell
            </span>
          </div>

          {/* Nonceblox LOR */}
          <div className="bg-[#121212] p-4 rounded border border-[#27272a] border-l-4 border-l-blue-500 space-y-2 cursor-pointer hover:border-[#52525b]" onClick={() => setSelectedCert(certificates[0])}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-500" />
                <h3 className="font-heading font-bold text-sm text-white">Nonceblox LOR</h3>
              </div>
              <Eye className="w-3.5 h-3.5 text-zinc-400" />
            </div>
            <p className="text-[11px] text-zinc-300 leading-relaxed">
              Official Executive Letter of Recommendation for Web3 & AI marketplace engineering.
            </p>
            <span className="inline-block text-[9px] font-code text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-800">
              Executive Recommendation
            </span>
          </div>

          {/* Technical Book Reviewer */}
          <div className="bg-[#121212] p-4 rounded border border-[#27272a] border-l-4 border-l-zinc-400 space-y-2 cursor-pointer hover:border-[#52525b]" onClick={() => setSelectedCert(certificates.find(c => c.id === 'book-review-cert') || null)}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-zinc-300" />
                <h3 className="font-heading font-bold text-sm text-white">Book Reviewer</h3>
              </div>
              <Eye className="w-3.5 h-3.5 text-zinc-400" />
            </div>
            <p className="text-[11px] text-zinc-300 leading-relaxed">
              Technical reviewer for <em>"My First Mobile App for Students"</em> by Zaid Kamil.
            </p>
            <span className="inline-block text-[9px] font-code text-zinc-300 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-700">
              Published Book Reviewer
            </span>
          </div>
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
              {cat} {cat === 'All' ? `(${certificates.length})` : ''}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="bg-[#121212] rounded border border-[#27272a] p-3.5 cursor-pointer group hover:border-[#52525b] transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                {/* Visual Thumbnail */}
                <div className="h-44 rounded overflow-hidden bg-[#0a0a0a] relative border border-[#27272a] flex items-center justify-center">
                  <img
                    src={cert.file}
                    alt={cert.title}
                    className="w-full h-full object-contain p-1 opacity-90 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />

                  <div className="absolute top-2 right-2">
                    <span className="p-1 rounded bg-black/90 text-zinc-300 group-hover:text-white border border-[#3f3f46] block">
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {cert.highlight && (
                    <div className="absolute bottom-2 left-2">
                      <span className="px-2 py-0.5 rounded text-[9px] font-code bg-blue-950 text-blue-300 border border-blue-800">
                        {cert.highlight}
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="font-heading font-bold text-xs text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                    {cert.title}
                  </h4>
                  <p className="text-[10px] font-code text-zinc-400 mt-0.5">Issuer: {cert.issuer}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#27272a] flex items-center justify-between text-[10px] font-code text-zinc-400">
                <span className="uppercase text-zinc-500">{cert.category}</span>
                <span className="text-blue-400 group-hover:underline flex items-center gap-1 font-bold">
                  <span>View Document</span> →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <div className="relative max-w-4xl w-full bg-[#121212] border border-[#3f3f46] rounded p-5 shadow-2xl space-y-4 max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#27272a] pb-3">
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-code bg-blue-950 text-blue-300 border border-blue-800">
                  {selectedCert.category}
                </span>
                <h3 className="font-heading font-bold text-base text-white mt-1">{selectedCert.title}</h3>
                <p className="text-xs font-code text-zinc-400">Issuer: {selectedCert.issuer}</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selectedCert.file}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white text-black font-bold text-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Open Full Image
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded text-zinc-400 hover:text-white hover:bg-[#18181b]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Viewer Body */}
            <div className="flex-1 rounded border border-[#27272a] bg-black flex items-center justify-center overflow-hidden min-h-[400px]">
              <img
                src={selectedCert.file}
                alt={selectedCert.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="flex items-center justify-between text-xs font-code text-zinc-400 pt-2 border-t border-[#27272a]">
              <span>File: {selectedCert.file.split('/').pop()}</span>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-1.5 rounded bg-[#18181b] hover:bg-[#27272a] text-white font-bold text-xs border border-[#3f3f46]"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
