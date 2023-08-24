## ScoreBoard Documentation

The `ScoreBoard` utility provides functionality to manage and keep track of sports match scores. It allows users to start, update, and finish matches, and it generates a summary of match scores in a specific order.

### Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Methods](#methods)
   - [`startNewMatch(homeTeam: string, awayTeam: string): ScoreBoard`](#startnewmatchhometeam-string-awayteam-string-scoreboard)
   - [`updateMatch(teams: [string, string], scores: [number, number]): ScoreBoard`](#updatematchteams-string-string-scores-number-number-scoreboard)
   - [`finishMatch(homeTeam: string, awayTeam: string): ScoreBoard`](#finishmatchhometeam-string-awayteam-string-scoreboard)
   - [`getSummary(): string[]`](#getsummary-string)
4. [Usage Examples](#usage-examples)

### Introduction

The `ScoreBoard` utility is designed to manage and display sports match scores for different teams. It provides a convenient way to start new matches, update their scores, and finish matches. Additionally, it generates a summary of match scores in a specific order.

### Getting Started

To use the `ScoreBoard` utility, you need to import the `ScoreBoard` class from the module. The utility supports the following methods:

### Methods

#### `startNewMatch(homeTeam: string, awayTeam: string): ScoreBoard`

Starts a new match between the specified home team and away team. The match is initialized with a score of 0 - 0.

- **Parameters:**
  - `homeTeam` (string): The name of the home team.
  - `awayTeam` (string): The name of the away team.
- **Returns:** An instance of the `ScoreBoard` utility so that you can chain further method calls.

#### `updateMatch(teams: [string, string], scores: [number, number]): ScoreBoard`

Updates the score of an ongoing match between the specified teams.

- **Parameters:**
  - `teams` (array of strings): An array containing the names of the teams in the match.
  - `scores` (array of numbers): An array containing the updated scores for the home and away teams, respectively.
- **Returns:** An instance of the `ScoreBoard` utility so that you can chain further method calls.

#### `finishMatch(homeTeam: string, awayTeam: string): ScoreBoard`

Finishes an ongoing match between the specified home team and away team. The match will be removed from the scoreboard.

- **Parameters:**
  - `homeTeam` (string): The name of the home team.
  - `awayTeam` (string): The name of the away team.
- **Returns:** An instance of the `ScoreBoard` utility so that you can chain further method calls.

#### `getSummary(): string[]`

Generates a summary of all matches in the scoreboard. The summary consists of strings representing the match scores in the specified order.

- **Returns:** An array of strings representing the match scores.

### Usage Examples

```javascript
import ScoreBoard from './ScoreBoard';

// Create an instance of ScoreBoard
const instance = new ScoreBoard();

// Start and update matches
instance.startNewMatch('Home Team', 'Away Team');
instance.updateMatch(['Home Team', 'Away Team'], [4, 1]);

// Finish a match
instance.finishMatch('Home Team', 'Away Team');

// Generate a summary of match scores
const summary = instance.getSummary();

console.log(summary);
// Output: ['Home Team 4 - Away Team 1']
```

---
