import { IScoreBoard, MatchSummary } from './types';

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

  finishMatch = (homeTeam: string, awayTeam: string) => {
    const matchId: MatchId = `${homeTeam},${awayTeam}`;
    this.verifyMatchExists(matchId);
    this.matches.delete(matchId);
    return this;
  };

  getSummary = () => {
    const additionReducer = (acc: number, cur: number) => acc + cur;
    const sortedMatches = Array.from(this.matches.entries())
      .sort(
        ([_matchA, scoresA], [_matchB, scoresB]) => scoresB.reduce(additionReducer) - scoresA.reduce(additionReducer) || -1,
      );
    return sortedMatches.map(([matchId, scores]) => {
      const [homeTeam, awayTeam] = matchId.split(',');
      const [homeTeamScore, awayTeamScore] = scores;
      return `${homeTeam} ${homeTeamScore} - ${awayTeam} ${awayTeamScore}` as MatchSummary;
    });
  };
}

export default ScoreBoard;
