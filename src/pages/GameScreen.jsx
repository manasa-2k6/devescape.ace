import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Play, Check, X, Terminal, HelpCircle, FileCheck2, ArrowRight } from 'lucide-react';
import CodeEditor from '../components/CodeEditor';
import { getLevelData } from '../data/levels';
import { themes } from '../data/themes';
import { runCode } from '../utils/pistonAPI';
import { calculateScore, saveScore, unlockNextTheme, getHackerAlias } from '../utils/storage';

const TypewriterText = ({ text }) => {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed(text.substring(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, [text]);
  return <span>{displayed}<span className="animate-pulse">_</span></span>;
};

export default function GameScreen() {
  const { themeId } = useParams();
  const navigate = useNavigate();
  
  const theme = themes.find(t => t.id === parseInt(themeId));
  
  const [currentLevelNum, setCurrentLevelNum] = useState(1);
  const [levelData, setLevelData] = useState(null);
  
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState('');
  const [consoleOutput, setConsoleOutput] = useState('Ready.');
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState([]);
  
  const [timeLeft, setTimeLeft] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [gameStatus, setGameStatus] = useState('intro'); // intro, playing, completed, failed
  
  // Load level data
  useEffect(() => {
    const data = getLevelData(parseInt(themeId), currentLevelNum);
    if (data) {
      setLevelData(data);
      setCode(data.starterCode[language]);
      setTimeLeft(data.timeLimit);
      setShowHint(false);
      setTestResults([]);
      setConsoleOutput('Ready.');
    } else if (currentLevelNum > 10 || !data) {
      // Completed all levels! (Or simulating it)
      if (currentLevelNum > 1) {
        setGameStatus('completed');
        unlockNextTheme(themeId);
        saveScore(parseInt(themeId), calculateScore(levelData?.timeLimit - timeLeft || 0, hintsUsed), levelData?.timeLimit - timeLeft || 0);
      } else {
        navigate('/themes'); // Invalid theme
      }
    }
  }, [themeId, currentLevelNum]);

  // Language switch
  useEffect(() => {
    if (levelData && levelData.starterCode[language]) {
      setCode(levelData.starterCode[language]);
    }
  }, [language]);

  // Timer logic
  useEffect(() => {
    if (gameStatus !== 'playing' || timeLeft <= 0) {
      if (timeLeft <= 0 && gameStatus === 'playing') {
        setGameStatus('failed');
      }
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft, gameStatus]);

  const handleHint = () => {
    if (!showHint) {
      setShowHint(true);
      setHintsUsed(prev => prev + 1);
      setTimeLeft(prev => Math.max(0, prev - 30)); // 30 second penalty
    }
  };

  const handleRunCode = async (isSubmit = false) => {
    if (isRunning) return;
    setIsRunning(true);
    setConsoleOutput('Executing code...');
    setTestResults([]);
    
    let allPassed = true;
    let outputLog = "";
    let results = [];

    // Evaluate test cases
    const cases = levelData.testCases;
    const finalCode = code + (levelData.driverCode?.[language] || "");
    
    for (let i = 0; i < cases.length; i++) {
        const tc = cases[i];
        const res = await runCode(language, finalCode, [tc.input]);
        
        let passed = false;
        let actualOutput = "";
        
        if (res.success && res.run.stdout !== null) {
            actualOutput = res.run.stdout.trim();
            passed = actualOutput === tc.expected.trim();
        } else {
            actualOutput = res.run.stderr || res.compile?.stderr || "Execution Error";
            allPassed = false;
        }

        if (!passed) allPassed = false;
        
        results.push({
            input: tc.input,
            expected: tc.expected,
            actual: actualOutput,
            passed: passed
        });
        
        outputLog += `Test Case ${i+1}: ${passed ? '✅ PASS' : '❌ FAIL'}\n`;
        if (!passed && !isSubmit) {
            outputLog += `Input:    ${tc.input}\n`;
            outputLog += `Expected: ${tc.expected}\n`;
            outputLog += `Actual:   ${actualOutput}\n\n`;
            break; // Stop running tests on first failure when not submitting
        }
    }

    setTestResults(results);
    setConsoleOutput(outputLog || "No output.");
    setIsRunning(false);

    if (isSubmit && allPassed) {
       // Move to next level
       setTimeout(() => {
           setCurrentLevelNum(prev => prev + 1);
       }, 2000);
    }
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  if (!theme) return null;
  
  if (gameStatus === 'intro') {
      return (
        <div className="h-screen flex flex-col items-center justify-center p-4 bg-[var(--color-dark)] relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(0, 255, 0, 0.2) 1px, transparent 1px)', backgroundSize: '100% 4px' }}></div>
            <div className="max-w-3xl w-full flex flex-col items-center z-10">
                <span className="text-7xl mb-6 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">{theme.icon}</span>
                <h1 className="text-4xl md:text-6xl font-black mb-4 text-[var(--color-cyan-400)] text-shadow-glow text-center uppercase tracking-widest">{theme.name}</h1>
                <h2 className="text-lg md:text-xl text-gray-400 mb-12 uppercase tracking-widest text-center border-b border-gray-800 pb-4 w-full">{theme.subtitle}</h2>
                
                <div className="text-left w-full text-xl md:text-2xl text-[var(--color-primary)] font-mono leading-relaxed mb-16 h-32 md:h-24 px-4 border-l-2 border-[var(--color-primary)] bg-black/40 py-4">
                   <TypewriterText text={theme.story} />
                </div>

                <button 
                  onClick={() => setGameStatus('playing')}
                  className="px-10 py-4 bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black transition-all font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(0,255,0,0.2)] hover:shadow-[0_0_25px_rgba(0,255,0,0.5)] flex items-center gap-3"
                >
                  <Play size={20} /> INITIALIZE MISSION
                </button>
            </div>
        </div>
      );
  }

  if (!levelData && gameStatus === 'playing') return <div className="text-white p-8">Loading level...</div>;

  if (gameStatus === 'completed') {
    return (
      <div className="h-screen flex flex-col items-center justify-center p-4 bg-[var(--color-dark)] relative overflow-hidden">
        {/* Simple Confetti Effect (CSS driven or just text for now) */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-9xl opacity-10">🎉</div>
        <h1 className="text-6xl font-black mb-4 text-[var(--color-cyan-400)] text-shadow-glow">YOU ESCAPED!</h1>
        <p className="text-xl mb-8 font-mono text-gray-300 border-b border-gray-700 pb-4">
          Theme: <span className="text-white font-bold">{theme.name}</span>
        </p>
        
        <div className="bg-[var(--color-dark-card)] border border-gray-700 p-8 rounded-xl max-w-md w-full shadow-[0_0_30px_rgba(0,255,255,0.1)]">
            <div className="flex justify-between mb-4">
               <span className="text-gray-400">Hacker Alias:</span>
               <span className="font-bold text-white">{getHackerAlias()}</span>
            </div>
            <div className="flex justify-between mb-4">
               <span className="text-gray-400">Score:</span>
               <span className="font-bold text-[var(--color-cyan-400)]">{calculateScore(levelData?.timeLimit - timeLeft || 0, hintsUsed)}</span>
            </div>
            <div className="flex justify-between mb-4">
               <span className="text-gray-400">Hints Used:</span>
               <span className="font-bold text-yellow-500">{hintsUsed}</span>
            </div>
        </div>

        <button 
           onClick={() => navigate('/themes')}
           className="mt-8 px-8 py-4 bg-[var(--color-cyan-500)] text-black font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2 rounded shadow-[0_0_15px_rgba(0,255,255,0.4)]"
        >
          Explore Next Theme <ArrowRight size={20} />
        </button>
      </div>
    );
  }

  if (gameStatus === 'failed') {
      return (
        <div className="h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255, 0, 0, 0.2) 1px, transparent 1px)', backgroundSize: '100% 4px' }}></div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-red-500 text-shadow-[0_0_25px_rgba(255,0,0,0.8)] z-10 text-center tracking-widest">TIME EXPIRED</h1>
            <p className="text-xl md:text-2xl mb-12 font-mono text-gray-300 z-10">The system locked you out.</p>
            <button 
                onClick={() => {
                    setGameStatus('playing');
                    setCurrentLevelNum(1); // Restart from level 1
                }}
                className="z-10 px-10 py-4 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-black transition-all font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(255,0,0,0.4)] hover:shadow-[0_0_25px_rgba(255,0,0,0.8)]"
            >
                REBOOT SYSTEM (Try Again)
            </button>
        </div>
      );
  }

  return (
    <div className="h-screen flex flex-col md:flex-row p-4 gap-4 overflow-hidden pt-20 pb-4">
      {/* LEFT PANEL */}
      <div className="w-full md:w-[40%] bg-[var(--color-dark-card)] rounded-xl border border-gray-800 flex flex-col overflow-y-auto custom-scrollbar">
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
           <div className="flex items-center gap-3 mb-2">
             <span className="text-3xl">{theme.icon}</span>
             <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--color-cyan-400)]">{theme.name}</h2>
           </div>
           
           <div className="flex justify-between items-center mt-6">
              <div className="px-3 py-1 bg-gray-900 border border-gray-700 rounded text-xs font-mono text-gray-300">
                  LEVEL {currentLevelNum} / 10
              </div>
              <div className={`px-4 py-2 font-mono text-2xl font-bold rounded shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] ${timeLeft < 60 ? 'text-red-500 animate-pulse bg-red-900/20 border border-red-900' : 'text-gray-200 bg-black'}`}>
                  {formatTime(timeLeft)}
              </div>
           </div>
        </div>

        {/* Story & Task */}
        <div className="p-6 flex-grow">
           <h3 className="text-lg font-bold mb-2">{levelData.title}</h3>
           <span className="text-xs px-2 py-1 bg-cyan-900/30 text-cyan-400 uppercase tracking-widest rounded-full mb-4 inline-block">{levelData.difficulty}</span>
           
           <div className="mb-6 p-4 bg-black/40 border-l-2 border-[var(--color-cyan-400)] text-gray-300 italic text-sm leading-relaxed">
             "{levelData.story}"
           </div>

           <div className="mb-6">
             <h4 className="font-bold mb-2 text-gray-400 uppercase text-xs tracking-widest">Challenge</h4>
             <p className="text-sm text-gray-200 leading-relaxed font-mono whitespace-pre-wrap">
               {levelData.task}
             </p>
           </div>

           <div className="mb-6">
             <h4 className="font-bold mb-2 text-gray-400 uppercase text-xs tracking-widest">Expected Examples</h4>
             <div className="p-3 bg-black rounded font-mono text-xs text-green-400 whitespace-pre-wrap border border-gray-800">
               {levelData.examples}
             </div>
           </div>

           {/* Hint */}
           <div className="mb-4">
               {!showHint ? (
                  <button 
                    onClick={handleHint}
                    className="flex items-center gap-2 text-xs text-yellow-500 border border-yellow-900/50 hover:bg-yellow-900/20 px-3 py-2 rounded transition-colors"
                  >
                     <HelpCircle size={14} /> Request Hint (-30s penalty)
                  </button>
               ) : (
                  <div className="p-3 bg-yellow-900/20 border border-yellow-700/50 rounded text-xs text-yellow-200">
                      <strong>Hint:</strong> {levelData.hint}
                  </div>
               )}
           </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full md:w-[60%] flex flex-col gap-4">
        {/* Editor Area */}
        <div className="bg-[#1e1e1e] rounded-xl overflow-hidden flex flex-col border border-gray-800 flex-grow">
            <div className="flex bg-black border-b border-gray-800">
                {['python', 'java', 'c'].map(l => (
                    <button
                        key={l}
                        onClick={() => setLanguage(l)}
                        className={`px-6 py-3 font-mono text-sm uppercase tracking-wider transition-colors ${
                            language === l 
                            ? 'bg-[#1e1e1e] text-[var(--color-cyan-400)] border-t-2 border-[var(--color-cyan-400)]' 
                            : 'text-gray-500 hover:text-gray-300 hover:bg-gray-900 border-t-2 border-transparent'
                        }`}
                    >
                        {l}
                    </button>
                ))}
            </div>
            
            <div className="flex-grow">
                <CodeEditor language={language} code={code} setCode={setCode} />
            </div>

            {/* Editor Actions */}
            <div className="p-4 bg-[#111] border-t border-gray-800 flex justify-between items-center">
               <button 
                 onClick={() => handleRunCode(false)}
                 disabled={isRunning}
                 className="flex items-center gap-2 px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded font-mono transition-colors disabled:opacity-50"
               >
                 <Play size={16} /> {isRunning ? 'Running...' : 'Run Code'}
               </button>
               <button 
                 onClick={() => handleRunCode(true)}
                 disabled={isRunning}
                 className="flex items-center gap-2 px-8 py-2 bg-[var(--color-cyan-500)] hover:bg-white text-black font-bold uppercase tracking-wider rounded shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all disabled:opacity-50"
               >
                 <FileCheck2 size={18} /> Submit
               </button>
            </div>
        </div>

        {/* Console / Output Area */}
        <div className="h-48 bg-black rounded-xl border border-gray-800 flex flex-col overflow-hidden shrink-0">
            <div className="px-4 py-2 border-b border-gray-800 flex items-center justify-between text-xs font-mono text-gray-500 uppercase tracking-widest bg-gray-900/50">
               <span className="flex items-center gap-2"><Terminal size={14} /> Output Console</span>
            </div>
            <div className="p-4 font-mono text-sm overflow-y-auto h-full text-gray-300 custom-scrollbar whitespace-pre-wrap">
               {consoleOutput}
            </div>
        </div>
      </div>
    </div>
  );
}
