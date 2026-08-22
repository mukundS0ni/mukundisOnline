import React from 'react';

export const ParticleBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-25">
      <div className="absolute inset-0 bg-tech-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a]" />
    </div>
  );
};
