import {ScoreItemI} from './ScoreItemI';
import {TeamI} from './TeamI';
import {Match} from './Match';
import {DateTimeI} from './DateTimeI';
import {eMatchStage} from './eMatchStage';

export interface MatchPredictionI extends Match, ScoreItemI {
  selectedTeam?: TeamI;
  isCorrect?: boolean;
  homeTeamScore?: number;
  awayTeamScore?: number;
  points?: number;

  clear(teamIndexInNextMatch: number): void;
}

export class MatchPrediction implements MatchPredictionI {
  matchNumber: number;
  homeTeam: TeamI;
  awayTeam: TeamI;
  kickOffTime: DateTimeI;
  isCorrect?: boolean;
  points?: number;
  selectedTeam?: TeamI;
  awayTeamScore?: number;
  homeTeamScore?: number;
  stage: eMatchStage;

  clear(teamIndexInNextMatch: number) {
    teamIndexInNextMatch === 0 ? this.homeTeam = undefined : this.awayTeam = undefined;
    this.selectedTeam = undefined;
  }
}


