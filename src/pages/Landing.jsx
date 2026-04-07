import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal, Trophy, Gamepad2, Layers } from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();
  const [alias, setAlias] = useState(localStorage.getItem('hackerAlias') || '');

  const handleStart = (e) => {
    e.preventDefault();
    if (alias.trim()) {
      localStorage.setItem('hackerAlias', alias.trim());
      navigate('/themes');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      {/* Header Tag */}
      <div className="text-[var(--color-cyan-400)] font-mono text-sm sm:text-base mb-6 tracking-widest animate-pulse">
        {'< CODING ESCAPE ROOM />'}
      </div>

      {/* Hero Title */}
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-4 text-center tracking-tighter">
        <span className="text-white">DEV</span>
        <span className="text-[var(--color-cyan-400)] text-shadow-glow">ESCAPE</span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 text-center max-w-2xl text-lg sm:text-xl mb-12 leading-relaxed">
        Solve coding challenges. Unlock virtual rooms. Race against time. 
        Can you escape before the clock runs out?
      </p>

      {/* Input Form */}
      <form onSubmit={handleStart} className="w-full max-w-md mb-16 relative group">
        <div className="absolute -inset-0.5 bg-[var(--color-cyan-400)] rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex items-center bg-[var(--color-dark-card)] rounded-lg border border-cyan-900 overflow-hidden">
          <Terminal className="w-5 h-5 text-gray-400 ml-4" />
          <input 
            type="text" 
            placeholder="Enter your hacker alias..." 
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            className="w-full bg-transparent text-white px-4 py-4 focus:outline-none placeholder-gray-600 font-mono"
            required
            aria-label="Hacker Alias"
          />
          <button 
            type="submit"
            className="bg-[var(--color-cyan-500)] text-black font-bold px-6 py-4 hover:bg-white transition-colors"
          >
            INIT()
          </button>
        </div>
      </form>

      {/* Feature Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 w-full max-w-4xl">
        {[
          { icon: <Terminal size={20} />, text: 'Code Challenges' },
          { icon: <Trophy size={20} />, text: 'Race the Clock' },
          { icon: <Layers size={20} />, text: 'Multiple Levels' },
          { icon: <Gamepad2 size={20} />, text: '10 Unique Themes' },
        ].map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center p-4 bg-[var(--color-dark-card)] rounded-xl border border-gray-800 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all">
            <div className="text-[var(--color-cyan-400)] mb-2">{feature.icon}</div>
            <span className="text-sm font-bold text-gray-300 text-center">{feature.text}</span>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex gap-4">
        <button 
          onClick={() => navigate('/leaderboard')}
          className="px-6 py-3 rounded-lg border border-gray-600 text-gray-300 font-bold hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all flex items-center gap-2"
        >
          <Trophy size={18} />
          Leaderboard
        </button>
      </div>

      {/* Scroll indicator - mostly aesthetic if all is visible, but good for hinting at scroll if we append theme select logic */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-xs font-mono text-[var(--color-cyan-400)] uppercase tracking-widest">System Ready</span>
      </div>
    </div>
  );
}
