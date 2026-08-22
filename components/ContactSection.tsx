import React, { useState } from 'react';
import { Mail, Phone, Send, Copy, Check, MessageSquare, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', role: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mukundsoni08@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+919992976692');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#18181b] border border-[#27272a] text-blue-400 text-xs font-code">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>DIRECT OUTREACH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase font-heading tracking-tight">
            GET IN TOUCH
          </h2>
          <p className="text-zinc-400 text-sm">
            Open for Head of Technology, Staff AI/Fullstack Architect, or Senior IC Engineering opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#121212] p-6 rounded border border-[#27272a] space-y-4">
              <h3 className="text-lg font-bold text-white font-heading">Contact Details</h3>

              {/* Email Box - Solid Red Accent */}
              <div className="p-3 rounded bg-[#0a0a0a] border border-[#27272a] border-l-4 border-l-red-500 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-red-500" />
                  <div>
                    <span className="text-[9px] font-code text-zinc-500 uppercase block">Email</span>
                    <a href="mailto:mukundsoni08@gmail.com" className="text-xs font-bold text-white font-code hover:text-red-400">
                      mukundsoni08@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded bg-[#18181b] hover:bg-[#27272a] text-zinc-300 text-xs font-code border border-[#3f3f46]"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-500" /> : 'Copy'}
                </button>
              </div>

              {/* Phone Box - Solid Blue Accent */}
              <div className="p-3 rounded bg-[#0a0a0a] border border-[#27272a] border-l-4 border-l-blue-500 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <div>
                    <span className="text-[9px] font-code text-zinc-500 uppercase block">Phone</span>
                    <a href="tel:+919992976692" className="text-xs font-bold text-white font-code hover:text-blue-400">
                      +91 9992976692
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="px-2.5 py-1 rounded bg-[#18181b] hover:bg-[#27272a] text-zinc-300 text-xs font-code border border-[#3f3f46]"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-green-500" /> : 'Copy'}
                </button>
              </div>

              {/* Profiles */}
              <div className="pt-2 space-y-2">
                <span className="text-xs font-code text-zinc-400 block">Profiles:</span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://github.com/mukundS0ni"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded bg-[#0a0a0a] border border-[#27272a] text-xs font-code text-zinc-300 hover:text-white"
                  >
                    <GithubIcon className="w-4 h-4 text-white" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/mukundx/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded bg-[#0a0a0a] border border-[#27272a] text-xs font-code text-zinc-300 hover:text-blue-400"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-500" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* View Resume CTA */}
              <div className="pt-2 border-t border-[#27272a]">
                <button
                  onClick={onOpenResume}
                  className="w-full py-2.5 rounded bg-white hover:bg-zinc-200 text-black font-bold text-xs flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" /> Download Resume PDF
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121212] p-6 rounded border border-[#27272a]">
              {submitted ? (
                <div className="p-6 text-center space-y-3 bg-[#0a0a0a] border border-[#27272a] rounded">
                  <h3 className="text-lg font-bold text-white font-heading">Message Sent!</h3>
                  <p className="text-xs text-zinc-300">
                    Thank you, {formData.name}. Mukund will respond to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', role: '', message: '' });
                    }}
                    className="px-4 py-1.5 rounded bg-[#18181b] text-white text-xs font-code border border-[#3f3f46]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <h3 className="text-lg font-bold text-white font-heading">Send a Direct Inquiry</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-code text-zinc-400">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Name"
                        className="w-full px-3 py-2 rounded bg-[#0a0a0a] border border-[#27272a] text-white text-xs focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-code text-zinc-400">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@company.com"
                        className="w-full px-3 py-2 rounded bg-[#0a0a0a] border border-[#27272a] text-white text-xs focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-code text-zinc-400">Role / Subject</label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="e.g. Head of Tech / Senior IC Role"
                      className="w-full px-3 py-2 rounded bg-[#0a0a0a] border border-[#27272a] text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-code text-zinc-400">Message *</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Details..."
                      className="w-full px-3 py-2 rounded bg-[#0a0a0a] border border-[#27272a] text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" /> Submit Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
