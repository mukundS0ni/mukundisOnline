import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
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
        <div className="space-y-1 text-zinc-300">
          <p className="text-blue-400 font-bold">Mukund Soni CLI Workstation Terminal v3.0.0</p>
          <p className="text-xs text-zinc-400">
            Type <span className="text-white font-bold">help</span> to view all available commands or click quick action buttons below.
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
            <p className="text-blue-400 font-bold">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-zinc-300">
              <div><span className="text-green-400">skills</span> - Display key technologies & frameworks</div>
              <div><span className="text-green-400">experience</span> - View work history & timeline</div>
              <div><span className="text-green-400">projects</span> - View highlighted AI & Web3 projects</div>
              <div><span className="text-green-400">contact</span> - Show email, phone & social profiles</div>
              <div><span className="text-green-400">resume</span> - Open printable & downloadable CV</div>
              <div><span className="text-green-400">sudo hire mukund</span> - Special hiring command</div>
              <div><span className="text-green-400">clear</span> - Clear terminal screen</div>
            </div>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-1.5 text-xs">
            <p className="text-blue-400 font-bold">Technical Skills Breakdown:</p>
            <p><strong className="text-white">Languages:</strong> Python, C/C++, TypeScript, JavaScript, SQL (PostgreSQL, MySQL)</p>
            <p><strong className="text-red-400">AI & Data:</strong> PyTorch, TensorFlow, Mistral LLM, Pandas, NumPy, Tableau, Matplotlib</p>
            <p><strong className="text-blue-400">Frameworks:</strong> Next.js, React, React Native, Nuxt.js, Svelte, Vue, FastAPI, Flask, TailwindCSS</p>
            <p><strong className="text-green-400">Cloud & Tools:</strong> GCP, Azure, Git/GitHub, Docker, VS Code, Android Studio, Unity</p>
          </div>
        );
        break;

      case 'experience':
        outputNode = (
          <div className="space-y-1.5 text-xs">
            <p className="text-blue-400 font-bold">Work Experience Summary:</p>
            <p>1. <strong className="text-red-400">Optcl</strong> (Feb 2025–May 2026) — Co-Founder & Head of Tech (Feb 2025–Mar 2026) | Contract Consultant (Mar 2026–May 2026)</p>
            <p>2. <strong className="text-blue-400">Powerloom Protocol</strong> (Jun 2024–Dec 2024) — Senior Frontend & DeFi Developer (OCP, POWER, Prediction Markets)</p>
            <p>3. <strong className="text-green-400">Sachtek</strong> (Sep 2023–Mar 2024) — Freelance Mobile & Enterprise Architect (AD Numeroscope app)</p>
            <p>4. <strong className="text-zinc-300">Nonceblox</strong> (Jun 2023–Aug 2023) — Software Analyst & Web3 Developer (NFTs, AI CMS)</p>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-1 text-xs">
            <p className="text-blue-400 font-bold">Key Technical Projects:</p>
            <p>• <strong className="text-red-400">Samachar AI:</strong> AI video news creator in 8 Indian languages (Python, PyTorch, LLM, GCP)</p>
            <p>• <strong className="text-blue-400">Optcl.io Kiosk Platform:</strong> AI display management & telemetry automation</p>
            <p>• <strong className="text-green-400">Powerloom Staking Dashboard:</strong> OCP token incentive hub & node monitoring</p>
            <p>• <strong className="text-white">Hotel Booking Engine:</strong> Next.js, Strapi CMS, Stripe payment gateway</p>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 text-xs">
            <p className="text-blue-400 font-bold">Contact Details:</p>
            <p>Email: <span className="text-red-400">mukundsoni08@gmail.com</span></p>
            <p>Phone: <span className="text-blue-400">+91 9992976692</span></p>
            <p>LinkedIn: <span className="text-green-400">linkedin.com/in/mukundx/</span></p>
            <p>GitHub: <span className="text-white">github.com/mukundS0ni</span></p>
          </div>
        );
        break;

      case 'resume':
      case 'cat resume':
        outputNode = (
          <div className="text-xs text-green-400">
            Opening official resume viewer modal...
          </div>
        );
        onOpenResume();
        break;

      case 'sudo hire mukund':
      case 'hire':
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
        outputNode = (
          <div className="p-3 rounded bg-[#18181b] border border-blue-500 text-zinc-200 space-y-1 text-xs">
            <p className="font-bold text-white text-sm">🎉 ACCESS GRANTED!</p>
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
          <div className="text-xs text-red-500">
            Command not recognized: <span className="font-bold text-white">{trimmed}</span>. Type <span className="text-blue-400 font-bold">help</span> for available commands.
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
      <div className="relative w-full max-w-3xl bg-[#0a0a0a] border border-[#3f3f46] rounded shadow-2xl overflow-hidden my-auto flex flex-col h-[500px]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#27272a] bg-[#121212]">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-blue-500" />
            <span className="text-xs font-code font-bold text-zinc-200">mukund@terminal: ~ (zsh)</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-zinc-400 hover:text-white hover:bg-[#18181b]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Command Output Logs */}
        <div className="flex-1 overflow-y-auto p-4 font-code text-xs space-y-3 bg-[#0a0a0a]">
          {logs.map((log) => (
            <div key={log.id} className="space-y-1">
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="text-blue-500">&gt;</span>
                <span className="text-white font-bold">{log.command}</span>
              </div>
              <div className="pl-3 border-l border-[#27272a]">{log.output}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Quick Action Chips */}
        <div className="px-4 py-2 border-t border-[#27272a] bg-[#121212] flex flex-wrap gap-1.5 text-[11px] font-code">
          <span className="text-zinc-500 py-0.5">Quick run:</span>
          {['help', 'skills', 'experience', 'projects', 'resume', 'sudo hire mukund', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-[#18181b] hover:bg-[#27272a] text-zinc-300 hover:text-white border border-[#3f3f46] transition-all"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Input Line */}
        <div className="p-3 border-t border-[#27272a] bg-[#121212] flex items-center gap-2 font-code text-xs">
          <span className="text-blue-500 font-bold">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type command here..."
            className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-zinc-600"
          />
          <button
            onClick={() => handleCommand(input)}
            className="px-3 py-1 rounded bg-white text-black font-bold flex items-center gap-1 transition-colors"
          >
            <span>Run</span>
            <CornerDownLeft className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
