import {TeamI} from './TeamI';
import {ScoreItemI} from './ScoreItemI';

export class Match implements ScoreItemI {
  team1: TeamI;
  team2: TeamI;
  idx: number;
  selectedTeam: TeamI;
  isCorrect?: boolean;
  score?: number;

  constructor(team1: TeamI, team2: TeamI, idx: number, selectedTeam?: TeamI) {
    this.team1 = team1;
    this.team2 = team2;
    this.idx = idx;
    this.selectedTeam = selectedTeam;
  }

  clear(teamIndexInNextMatch: number) {
    teamIndexInNextMatch === 0 ? this.team1 = undefined : this.team2 = undefined;
    this.selectedTeam = undefined;
  }
}
