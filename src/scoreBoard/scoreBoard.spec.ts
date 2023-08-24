import ScoreBoard from ".";


describe('testing ScoreBoard functionality', () => {
  const homeTeam = 'team home';
  const awayTeam = 'team away';
  let instance: ScoreBoard;
  beforeEach(() => {
    instance = new ScoreBoard();
  });
  it('throws an error if user starts a match that is already started', () => {
    instance.startNewMatch(homeTeam, awayTeam);
    const startMatchAgain = () => instance.startNewMatch(homeTeam, awayTeam);
    expect(startMatchAgain).toThrowError('Match already started');
  });
  it('throws an error if user updates a match that does not exist', () => {
    const updateMatch = () => instance.updateMatch([homeTeam, awayTeam], [2, 8]);
    expect(updateMatch).toThrowError('Match does not exists');
  });
  it('throws an error if user finishes a match that does not exist', () => {
    const finishMatch = () => instance.finishMatch(homeTeam, awayTeam);
    expect(finishMatch).toThrowError('Match does not exists');
  });
  it('successfully starts a new match with 0 - 0 score', () => {
    const summary = instance.startNewMatch(homeTeam, awayTeam).getSummary();
    expect(summary).toEqual([`${homeTeam} 0 - ${awayTeam} 0`]);
  });
  it('successfully updates match score', () => {
    const summary = instance.startNewMatch(homeTeam, awayTeam).updateMatch([homeTeam, awayTeam], [4, 1]).getSummary();
    expect(summary).toEqual([`${homeTeam} 4 - ${awayTeam} 1`]);
  });
  it('successfully finishes a match', () => {
    const summary = instance.startNewMatch(homeTeam, awayTeam).finishMatch(homeTeam, awayTeam).getSummary();
    expect(summary).toEqual([]);
  });
  it('generates board summary in the right order', () => {
    const teamList: [string, string][] = [
      ['Mexico', 'Canada'],
      ['Spain', 'Brazil'],
      ['Germany', 'France'],
      ['Uruguay', 'Italy'],
      ['Argentina', 'Australia'],
    ];
    const scores: [number, number][] = [
      [0, 5],
      [10, 2],
      [2, 2],
      [6, 6],
      [3, 1],
    ];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    teamList.forEach((teams, index) => instance.startNewMatch(...teams).updateMatch(teams, scores.at(index)!));
    const summary = instance.getSummary();
    expect(summary).toEqual([
      'Uruguay 6 - Italy 6',
      'Spain 10 - Brazil 2',
      'Mexico 0 - Canada 5',
      'Argentina 3 - Australia 1',
      'Germany 2 - France 2',
    ]);
  });
});
