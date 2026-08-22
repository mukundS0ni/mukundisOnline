import React, { useState } from 'react';
import { Shield, Cpu, Globe, FileCode, CheckCircle2, Terminal, ArrowRight, Layers } from 'lucide-react';

interface Principle {
  id: string;
  title: string;
  category: string;
  color: string;
  badgeColor: string;
  description: string;
  rfcSnippet: string;
  highlights: string[];
}

export const ManifestoSection: React.FC = () => {
  const [activePrinciple, setActivePrinciple] = useState<string>('async-rfcs');

  const principles: Principle[] = [
    {
      id: 'async-rfcs',
      title: 'Async & RFC-Driven Engineering',
      category: 'REMOTE VELOCITY',
      color: 'border-l-blue-500',
      badgeColor: 'bg-blue-950 text-blue-400 border-blue-800',
      description: 'Distributed teams achieve peak performance through clear technical writing, written RFC proposals, and self-documented pull requests.',
      rfcSnippet: `// RFC-104: Asynchronous Cross-Timezone Synchronization Protocol
// Author: Mukund Soni (Head of Tech)
// Scope: Powerloom Protocol & Distributed European Engineering (IST / CET)

1. OBJECTIVE: Eliminate blocking synchronous status calls across time zones.
2. IMPLEMENTATION:
   - Written Technical RFCs published prior to sprint execution.
   - Comprehensive PR descriptions with automated end-to-end regression suites.
   - Explicit operational boundaries allowing 24-hour continuous engineering handoff.`,
      highlights: [
        'Maintains high engineering velocity across IST and CET time zones.',
        'Reduces meeting overhead through structured design documents (RFCs).',
        'Fosters autonomy and clear domain ownership for every team member.'
      ]
    },
    {
      id: 'pragmatic-ai',
      title: 'Pragmatic AI & LLM Pipelines',
      category: 'AI SYSTEMS ARCHITECTURE',
      color: 'border-l-red-500',
      badgeColor: 'bg-red-950 text-red-400 border-red-800',
      description: 'Building AI tools that solve real operational problems—focusing on low-latency inference, multi-lingual TTS, and deterministic fallbacks.',
      rfcSnippet: `// AI-PIPELINE: Multilingual News Generation Engine (Samachar AI)
// Stack: Python, Mistral LLM, PyTorch, Google Cloud Platform

def process_news_feed(raw_text: str, target_languages: list[str]):
    # Step 1: Script Summarization via Mistral LLM
    script = llm_engine.summarize(raw_text, format="broadcast")
    
    # Step 2: Parallel Translation & Audio TTS Synthesis across 8 languages
    audio_tracks = tts_synthesizer.batch_generate(script, languages=target_languages)
    
    # Step 3: PyTorch Computer Vision Scene Assembly & Automated YouTube Dispatch
    return video_compiler.export_and_publish(audio_tracks, gcp_bucket=STORAGE_URI)`,
      highlights: [
        'Supports 8 Indian regional languages with automated speech synthesis.',
        'Combines PyTorch computer vision with LLM script generation.',
        'Scheduled cloud pipelines dispatched directly to streaming platforms.'
      ]
    },
    {
      id: 'edge-telemetry',
      title: 'Resilient Kiosk & Edge Telemetry',
      category: 'INDUSTRIAL AUTOMATION',
      color: 'border-l-green-500',
      badgeColor: 'bg-green-950 text-green-400 border-green-800',
      description: 'Designing fault-tolerant IoT display management platforms (Optcl.io) that recover gracefully from cloud network outages.',
      rfcSnippet: `// OPTCL-TELEMETRY: Industrial Kiosk Health & Content Dispatch Protocol
// Architecture: Optcl.io AI Display Management Engine

struct KioskTelemetry {
    device_id: String,
    screen_status: ScreenState,
    cpu_temperature_c: f32,
    active_content_hash: [u8; 32],
    offline_cache_ready: bool,
};

// Zero-downtime offline fallback: Kiosks cache content locally and heartbeat
// to Optcl cloud telemetry endpoint every 15 seconds.`,
      highlights: [
        'Automated kiosk display health monitoring & telemetry analytics.',
        'Offline content caching ensuring zero display blackouts on network drops.',
        'Designed for high-throughput smart infrastructure applications.'
      ]
    },
    {
      id: 'defi-security',
      title: 'DeFi Data & Staking Protocol Security',
      category: 'WEB3 INFRASTRUCTURE',
      color: 'border-l-zinc-400',
      badgeColor: 'bg-zinc-900 text-zinc-300 border-zinc-700',
      description: 'Building secure DeFi staking portals, Generative Prediction Markets, and real-time node operator dashboards (Powerloom Protocol).',
      rfcSnippet: `// POWERLOOM-STAKING: Snapshotter Node Reward & Staking Monitor
// Frontend Stack: Next.js 14, TypeScript, Web3.js, DeFi Event Streams

interface SnapshotterSlotState {
  slotId: string;
  stakerAddress: string;
  popTokenStaked: bigint;
  rewardsAccrued: bigint;
  nodeHealthScore: number; // 0 to 100%
  isEpochFinalized: boolean;
}`,
      highlights: [
        'Incentive reward mechanics for community POP token stakers.',
        'Generative Prediction Markets powered by real-time DeFi data streams.',
        'Snapshotter dashboard enabling slot operators to monitor uptime.'
      ]
    }
  ];

  const current = principles.find((p) => p.id === activePrinciple) || principles[0];

  return (
    <section id="manifesto" className="py-16 border-b border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#18181b] border border-[#27272a] text-blue-400 text-xs font-code">
            <FileCode className="w-3.5 h-3.5" />
            <span>ENGINEERING DNA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase font-heading tracking-tight">
            ENGINEERING MANIFESTO & SYSTEM ARCHITECTURE
          </h2>
          <p className="text-zinc-400 text-sm">
            Core technical principles guiding my work across AI display telemetry, Web3 protocols, and asynchronous remote teams.
          </p>
        </div>

        {/* Principles Grid & Interactive RFC Code Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Principle Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {principles.map((p) => {
              const isActive = p.id === activePrinciple;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePrinciple(p.id)}
                  className={`w-full text-left p-4 rounded border transition-all space-y-1.5 ${
                    isActive
                      ? `bg-[#18181b] border-[#52525b] ${p.color} border-l-4`
                      : 'bg-[#121212] border-[#27272a] hover:border-[#3f3f46]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[9px] font-code px-1.5 py-0.5 rounded border ${p.badgeColor}`}>
                      {p.category}
                    </span>
                    <span className={`text-xs font-code ${isActive ? 'text-white' : 'text-zinc-500'}`}>0{principles.indexOf(p) + 1}</span>
                  </div>
                  <h3 className={`font-heading font-bold text-sm ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                    {p.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2">{p.description}</p>
                </button>
              );
            })}
          </div>

          {/* Interactive RFC / Architecture Code Display */}
          <div className="lg:col-span-7">
            <div className={`bg-[#121212] rounded border border-[#27272a] ${current.color} border-l-4 p-6 space-y-5 h-full flex flex-col justify-between`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#27272a] pb-3">
                  <div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-code border ${current.badgeColor}`}>
                      {current.category}
                    </span>
                    <h3 className="text-lg font-bold text-white font-heading mt-1">{current.title}</h3>
                  </div>
                  <Terminal className="w-5 h-5 text-zinc-400" />
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed bg-[#0a0a0a] p-3 rounded border border-[#27272a]">
                  {current.description}
                </p>

                {/* RFC Code Box */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-code text-zinc-400 block">Architectural Blueprint / Code Specification:</span>
                  <div className="bg-[#0a0a0a] p-4 rounded border border-[#27272a] font-code text-xs text-zinc-300 overflow-x-auto">
                    <pre className="whitespace-pre-wrap">{current.rfcSnippet}</pre>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="space-y-2 pt-2 border-t border-[#27272a]">
                  <h4 className="text-[11px] font-code font-bold uppercase text-zinc-400">Core Impact</h4>
                  <ul className="space-y-1.5">
                    {current.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
