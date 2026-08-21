import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, Sparkles, CornerDownLeft, Play } from 'lucide-react';
import confetti from 'canvas-confetti';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  isOpen,
  onClose,
  onOpenResume
}) => {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-emerald-400 font-bold">Mukund Soni Portfolio CLI Terminal v2.4.0</p>
          <p className="text-xs text-slate-400">
            Type <span className="text-cyan-400 font-bold">help</span> to view all available commands or click quick action buttons below.
          </p>
        </div>
      )
    }
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-xs">
            <p className="text-emerald-400 font-bold">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-slate-300">
              <div><span className="text-cyan-400">skills</span> - Display key technologies & frameworks</div>
              <div><span className="text-cyan-400">experience</span> - View work history & timeline</div>
              <div><span className="text-cyan-400">projects</span> - View highlighted AI & Web3 projects</div>
              <div><span className="text-cyan-400">contact</span> - Show email, phone & social profiles</div>
              <div><span className="text-cyan-400">resume</span> - Open printable & downloadable CV</div>
              <div><span className="text-cyan-400">sudo hire mukund</span> - Special hiring easter egg</div>
              <div><span className="text-cyan-400">clear</span> - Clear terminal screen</div>
            </div>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-emerald-400 font-bold">Technical Skills Breakdown:</p>
            <p><strong className="text-cyan-400">Languages:</strong> Python, C/C++, TypeScript, JavaScript, SQL (PostgreSQL, MySQL)</p>
            <p><strong className="text-purple-400">AI & Data:</strong> PyTorch, TensorFlow, Mistral LLM, Pandas, NumPy, Tableau, Matplotlib</p>
            <p><strong className="text-amber-400">Frameworks:</strong> Next.js, React, React Native, Nuxt.js, Svelte, Vue, FastAPI, Flask, TailwindCSS</p>
            <p><strong className="text-emerald-300">Cloud & Tools:</strong> GCP, Azure, Git/GitHub, Docker, VS Code, Android Studio, Unity</p>
          </div>
        );
        break;

      case 'experience':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-emerald-400 font-bold">Work Experience Summary:</p>
            <p>1. <strong className="text-white">Optcl</strong> (Feb 2025–May 2026) — Co-Founder & Head of Tech (Feb 2025–Mar 2026) | Contract Consultant (Mar 2026–May 2026)</p>
            <p>2. <strong className="text-cyan-400">Powerloom Protocol</strong> (Jun 2024–Dec 2024) — Senior Frontend & DeFi Developer (OCP, POWER, Prediction Markets)</p>
            <p>3. <strong className="text-purple-400">Sachtek</strong> (Sep 2023–Mar 2024) — Freelance Mobile & Enterprise Architect (AD Numeroscope app)</p>
            <p>4. <strong className="text-amber-400">Nonceblox</strong> (Jun 2023–Aug 2023) — Software Analyst & Web3 Developer (NFTs, AI CMS)</p>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-emerald-400 font-bold">Key Technical Projects:</p>
            <p>• <strong className="text-white">Samachar AI:</strong> AI video news creator in 8 Indian languages (Python, PyTorch, LLM, GCP)</p>
            <p>• <strong className="text-cyan-400">Optcl.io Kiosk Platform:</strong> AI display management & telemetry automation</p>
            <p>• <strong className="text-purple-400">Powerloom Staking Dashboard:</strong> OCP token incentive hub & node monitoring</p>
            <p>• <strong className="text-amber-400">Hotel Booking Engine:</strong> Next.js, Strapi CMS, Stripe payment gateway</p>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 text-xs">
            <p className="text-emerald-400 font-bold">Contact Details:</p>
            <p>Email: <span className="text-cyan-300">mukundsoni08@gmail.com</span></p>
            <p>Phone: <span className="text-emerald-300">+91 9992976692</span></p>
            <p>LinkedIn: <span className="text-purple-300">linkedin.com/in/mukundx/</span></p>
            <p>GitHub: <span className="text-amber-300">github.com/mukundS0ni</span></p>
          </div>
        );
        break;

      case 'resume':
      case 'cat resume':
        outputNode = (
          <div className="text-xs text-emerald-300">
            Launching official resume viewer modal...
          </div>
        );
        onOpenResume();
        break;

      case 'sudo hire mukund':
      case 'hire':
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
        outputNode = (
          <div className="p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 space-y-1 text-xs">
            <p className="font-bold text-white text-sm">🎉 ACCESS GRANTED! Outstanding Choice!</p>
            <p>Mukund Soni is available for Head of Tech, Lead Architect, and Senior Staff IC roles.</p>
            <p>Direct Email: <a href="mailto:mukundsoni08@gmail.com" className="underline font-bold text-white">mukundsoni08@gmail.com</a></p>
          </div>
        );
        break;

      case 'clear':
        setLogs([]);
        setInput('');
        return;

      default:
        outputNode = (
          <div className="text-xs text-red-400">
            Command not recognized: <span className="font-bold text-white">{trimmed}</span>. Type <span className="text-cyan-400 font-bold">help</span> for available commands.
          </div>
        );
        break;
    }

    setLogs((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        command: cmdStr,
        output: outputNode
      }
    ]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <div className="relative w-full max-w-3xl bg-[#090d16] border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col h-[520px]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-code font-bold text-slate-200">mukund@terminal: ~ (zsh)</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Command Output Logs */}
        <div className="flex-1 overflow-y-auto p-5 font-code text-xs space-y-4 bg-[#090d16]">
          {logs.map((log) => (
            <div key={log.id} className="space-y-1">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400">➜</span>
                <span className="text-cyan-400">~</span>
                <span className="text-slate-200 font-bold">{log.command}</span>
              </div>
              <div className="pl-4 border-l border-slate-800">{log.output}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Quick Action Command Chips */}
        <div className="px-4 py-2 border-t border-slate-800 bg-slate-900/50 flex flex-wrap gap-2 text-[11px] font-code">
          <span className="text-slate-400 py-0.5">Quick run:</span>
          {['help', 'skills', 'experience', 'projects', 'resume', 'sudo hire mukund', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-300 border border-slate-700 transition-all"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Input Line */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center gap-2 font-code text-xs">
          <span className="text-emerald-400 font-bold">➜</span>
          <span className="text-cyan-400">~</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type command here (e.g. help, skills, resume)..."
            className="flex-1 bg-transparent text-slate-100 focus:outline-none placeholder:text-slate-600"
          />
          <button
            onClick={() => handleCommand(input)}
            className="px-3 py-1 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold flex items-center gap-1 transition-colors"
          >
            <span>Run</span>
            <CornerDownLeft className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
