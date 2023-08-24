type MatchSummary = `${string} ${number} - ${string} ${number}`;
interface IScoreBoard {
  startNewMatch: (homeTeam: string, awayTeam: string) => this;
  updateMatch: (teams: [string, string], scores: [number, number]) => this;
  finishMatch: (homeTeam: string, awayTeam: string) => this;
  getSummary: () => MatchSummary[];
}

export { IScoreBoard, MatchSummary };
