import React, { useEffect, useState } from 'react';
import { getLeaderboard } from '../utils/storage';
import { Trophy, Clock, Target, Hash } from 'lucide-react';
import { themes } from '../data/themes';

export default function LeaderboardPage() {
  const [board, setBoard] = useState([]);
  const [filterTheme, setFilterTheme] = useState('all');

  useEffect(() => {
    setBoard(getLeaderboard());
  }, []);

  const filteredBoard = filterTheme === 'all' 
    ? board 
    : board.filter(entry => entry.themeId === parseInt(filterTheme));

  const getThemeName = (id) => {
     return themes.find(t => t.id === id)?.name || "Unknown";
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <Trophy size={48} className="text-[var(--color-cyan-400)] mb-4 animate-glow" />
        <h2 className="text-5xl font-black text-shadow-glow text-white mb-8 tracking-tighter">GLOBAL RANKINGS</h2>
        
        <div className="w-full flex justify-center mb-8">
           <select 
              value={filterTheme}
              onChange={(e) => setFilterTheme(e.target.value)}
              className="bg-[var(--color-dark-card)] border border-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:border-cyan-500 font-mono"
           >
              <option value="all">🏆 All Themes</option>
              {themes.map(t => (
                  <option key={t.id} value={t.id}>{t.icon} {t.name}</option>
              ))}
           </select>
        </div>

        <div className="w-full bg-[var(--color-dark-card)] border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
          {filteredBoard.length === 0 ? (
            <div className="p-12 text-center text-gray-500 font-mono">
              <p className="text-xl mb-2">No escapes recorded yet.</p>
              <p className="text-sm">Be the first to hack the system.</p>
            </div>
          ) : (
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black text-gray-400 font-mono text-xs uppercase tracking-wider border-b border-gray-800">
                    <td className="p-4 w-16 text-center">Rank</td>
                    <td className="p-4">Hacker Alias</td>
                    <td className="p-4 hidden sm:table-cell">Theme</td>
                    <td className="p-4 text-right">Score</td>
                    <td className="p-4 text-right hidden sm:table-cell">Time</td>
                  </tr>
                </thead>
                <tbody>
                  {filteredBoard.map((entry, idx) => (
                    <tr 
                      key={idx} 
                      className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors"
                    >
                      <td className="p-4 font-black font-mono text-center">
                        {idx === 0 ? <span className="text-yellow-400 text-xl">🥇</span> : 
                         idx === 1 ? <span className="text-gray-400 text-xl">🥈</span> : 
                         idx === 2 ? <span className="text-amber-700 text-xl">🥉</span> : 
                         <span className="text-gray-600">#{idx + 1}</span>}
                      </td>
                      <td className="p-4">
                        <span className="font-bold text-lg">{entry.alias}</span>
                      </td>
                      <td className="p-4 text-gray-400 text-sm hidden sm:table-cell">
                        {getThemeName(entry.themeId)}
                      </td>
                      <td className="p-4 text-right">
                        <span className="font-mono text-cyan-400 font-bold bg-cyan-900/20 px-2 py-1 rounded">
                          {entry.score.toLocaleString()}
                        </span>
                      </td>
                      <td className="p-4 text-right text-gray-500 font-mono text-sm hidden sm:table-cell">
                        {formatTime(entry.time)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
