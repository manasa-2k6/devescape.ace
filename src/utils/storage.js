export const calculateScore = (timeTakenSeconds, hintsUsed) => {
  const baseScore = 1000;
  let penalty = (hintsUsed * 50) + (timeTakenSeconds * 0.1);
  return Math.max(10, Math.floor(baseScore - penalty));
};

export const getHackerAlias = () => {
  return localStorage.getItem('hackerAlias') || 'Anonymous';
};

export const getUnlockedThemes = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Force unlock all themes bypassing local browser cache
};

export const unlockNextTheme = (currentThemeId) => {
  const unlocked = getUnlockedThemes();
  const nextTheme = parseInt(currentThemeId) + 1;
  if (!unlocked.includes(nextTheme) && nextTheme <= 10) {
    unlocked.push(nextTheme);
    localStorage.setItem('unlockedThemes', JSON.stringify(unlocked));
  }
};

export const saveScore = (themeId, score, timeSeconds) => {
  const alias = getHackerAlias();
  const leaderboard = getLeaderboard();
  
  leaderboard.push({
    alias,
    themeId,
    score,
    time: timeSeconds,
    date: new Date().toISOString()
  });
  
  // Sort by score desc, then time asc
  leaderboard.sort((a, b) => b.score - a.score || a.time - b.time);
  
  // Keep top 50
  const topScores = leaderboard.slice(0, 50);
  localStorage.setItem('leaderboard', JSON.stringify(topScores));
};

export const getLeaderboard = () => {
  const data = localStorage.getItem('leaderboard');
  return data ? JSON.parse(data) : [];
};
