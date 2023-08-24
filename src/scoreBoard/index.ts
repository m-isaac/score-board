import { IScoreBoard } from './types';

type Scores = [number, number];
type MatchId = `${string},${string}`;

class ScoreBoard implements IScoreBoard {
  private matches: Map<MatchId, Scores> = new Map();

  private verifyMatchExists = (matchId: MatchId) => {
    if (!this.matches.has(matchId)) throw new Error('Match does not exists');
  };

  startNewMatch = (homeTeam: string, awayTeam: string) => {
    const matchId: MatchId = `${homeTeam},${awayTeam}`;
    if (this.matches.has(matchId)) throw new Error('Match already started');
    this.matches.set(matchId, [0, 0]);
    return this;
  };

  updateMatch = (teams: [string, string], scores: [number, number]) => {
    const [homeTeam, awayTeam] = teams;
    const matchId: MatchId = `${homeTeam},${awayTeam}`;
    this.verifyMatchExists(matchId);
    this.matches.set(matchId, scores);
    return this;
  };
}

export default ScoreBoard;
