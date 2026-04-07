import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ThemeSelect from './pages/ThemeSelect';
import GameScreen from './pages/GameScreen';
import LeaderboardPage from './pages/LeaderboardPage';
import MatrixRain from './components/MatrixRain';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[var(--color-dark)] text-white font-sans">
        <MatrixRain />
        <div className="relative z-10 h-full">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/themes" element={<ThemeSelect />} />
            <Route path="/game/:themeId" element={<GameScreen />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
