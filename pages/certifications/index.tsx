import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { CertificationsSection } from '../../components/CertificationsSection';
import { ParticleBackground } from '../../components/ParticleBackground';

export default function CertificationsPage() {
  return (
    <>
      <Head>
        <title>Certifications & Honors — Mukund Soni</title>
        <meta name="description" content="Verified certifications and honors for Mukund Soni, including GATE qualification, technical book review, Duke, IBM, and Python certificates." />
      </Head>

      <div className="min-h-screen bg-[#090d16] text-slate-100 relative selection:bg-emerald-500 selection:text-slate-950 font-inter py-8">
        <ParticleBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-code text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Return to Main Portfolio
            </Link>
            <span className="text-xs font-code text-emerald-400">Mukund Soni • Accreditations</span>
          </div>

          <CertificationsSection />
        </div>
      </div>
    </>
  );
}
