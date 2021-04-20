import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StandingI} from '../../dtos/StandingI';
import {Match} from '../../dtos/Match';
import {TeamI} from '../../dtos/TeamI';

@Component({
  selector: 'app-tournament-bracket',
  templateUrl: './tournament-bracket.component.html',
  styleUrls: ['./tournament-bracket.component.scss']
})
export class TournamentBracketComponent {
  @Input() matches: Match[] = [];
  @Output() teamSelect: EventEmitter<TeamI> = new EventEmitter();

  onTeamSelect(selectedTeam: TeamI, index: number) {
    if (index >= 0) {
      this.updateCurrentMatch(index, selectedTeam);
      this.updateParentMatch(index, selectedTeam);
      this.clearOtherParentMatches(index);
      this.teamSelect.emit(selectedTeam);
    }
  }

  private getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  private updateParentMatch(index: number, selectedTeam: TeamI) {
    const nextMatchIndex: number = this.getParentIndex(index);
    if (nextMatchIndex > -1) {
      const teamIndexInNextMatch = this.getTeamIndexInNextMatch(index);
      const nextMatch = this.matches[nextMatchIndex];
      teamIndexInNextMatch === 0 ? nextMatch.team1 = selectedTeam : nextMatch.team2 = selectedTeam;
      nextMatch.selectedTeam = undefined;
    }
  }

  private getTeamIndexInNextMatch(index: number) {
    return (index - 1) % 2;
  }

  private updateCurrentMatch(index: number, selectedTeam: TeamI) {
    this.matches[index].selectedTeam = selectedTeam;
  }

  private clearOtherParentMatches(index: number) {
    const parentIndex = this.getParentIndex(index);
    const doubleParentIndex = this.getParentIndex(parentIndex);
    let teamIndexInNextMatch = this.getTeamIndexInNextMatch(parentIndex);
    for (let i = doubleParentIndex; i >= 0; i = this.getParentIndex(i)) {
      this.matches[i].clear(teamIndexInNextMatch);
      teamIndexInNextMatch = this.getTeamIndexInNextMatch(i);
    }
  }
}
