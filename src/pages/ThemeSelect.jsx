import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Unlock, Play } from 'lucide-react';
import { themes } from '../data/themes';
import { getUnlockedThemes } from '../utils/storage';

export default function ThemeSelect() {
  const navigate = useNavigate();
  const [unlockedThemes, setUnlockedThemes] = useState([]);

  useEffect(() => {
    setUnlockedThemes(getUnlockedThemes());
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 border-b border-gray-800 pb-6">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Select Your Theme</h2>
          <p className="font-mono text-[var(--color-cyan-400)]">
            Each theme has 10 levels of progressive coding challenges (Easy → Expert)
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme) => {
            const isUnlocked = unlockedThemes.includes(theme.id);
            
            return (
              <div 
                key={theme.id}
                onClick={() => isUnlocked && navigate(`/game/${theme.id}`)}
                className={`relative group p-6 bg-[var(--color-dark-card)] rounded-xl border transition-all duration-300 ${
                  isUnlocked 
                    ? 'border-gray-700 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] cursor-pointer hover:-translate-y-1' 
                    : 'border-gray-900 opacity-60 cursor-not-allowed filter grayscale'
                }`}
              >
                {/* Lock icon */}
                <div className="absolute top-4 right-4">
                  {isUnlocked ? (
                    <Unlock className="text-gray-600 w-5 h-5 group-hover:text-[var(--color-cyan-400)] transition-colors" />
                  ) : (
                    <Lock className="text-gray-500 w-5 h-5" />
                  )}
                </div>

                <div className="text-5xl mb-4">{theme.icon}</div>
                <h3 className="text-2xl font-bold mb-1 group-hover:text-white transition-colors">
                  {theme.name}
                </h3>
                <h4 className="font-mono text-xs text-cyan-700 mb-4 uppercase tracking-wider group-hover:text-cyan-400 transition-colors">
                  {theme.subtitle}
                </h4>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2 h-10">
                  {theme.story}
                </p>

                <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                  <span className="text-xs font-bold bg-[#0a0a0a] px-3 py-1 rounded text-gray-400">
                     10 LEVELS
                  </span>
                  {isUnlocked && (
                    <span className="flex items-center gap-1 text-xs text-[var(--color-cyan-400)] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      ENTER <Play size={14} fill="currentColor" />
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
