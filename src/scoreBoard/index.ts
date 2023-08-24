import { IScoreBoard } from './types';

type Scores = [number, number];
type MatchId = `${string},${string}`;

class ScoreBoard implements IScoreBoard {
  private matches: Map<MatchId, Scores> = new Map();

  startNewMatch = (homeTeam: string, awayTeam: string) => {
    const matchId: MatchId = `${homeTeam},${awayTeam}`;
    if (this.matches.has(matchId)) throw new Error('Match already started');
    this.matches.set(matchId, [0, 0]);
    return this;
  };
}

export default ScoreBoard;
