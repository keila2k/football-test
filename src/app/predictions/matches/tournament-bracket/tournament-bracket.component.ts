import {Component, OnInit} from '@angular/core';
import {TeamI} from '../../../dtos/TeamI';
import {MatchPrediction} from '../../../dtos/MatchPrediction';
import {FormControl} from '@angular/forms';
import {FormControlUtils} from '../../../utils/FormControlUtils';
import every from 'lodash-es/every';
import {GeneralDtoI} from '../../../dtos/GeneralDtoI';
import {UserPredictionDtoI} from '../../../dtos/UserPredictionDtoI';
import {MODE} from '../../../utils/mode';
import {MatchDataService} from '../match-data.service';
import {eMatchStage} from '../../../dtos/eMatchStage';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

const SNACK_BAR_CONFIG: MatSnackBarConfig = {
  duration: 5 * 1000,
};

@Component({
  selector: 'app-tournament-bracket',
  templateUrl: './tournament-bracket.component.html',
  styleUrls: ['./tournament-bracket.component.scss']
})
export class TournamentBracketComponent implements OnInit {
  matches: MatchPrediction[];
  finalsStageFormController: FormControl = new FormControl('');
  private isFinalsEnabled = false;
  private userPredictionDto: UserPredictionDtoI;
  private mode: MODE;

  constructor(private matchDataService: MatchDataService, private _snackBar: MatSnackBar) {
  }

  async ngOnInit() {
    const general: GeneralDtoI = await this.matchDataService.getGeneral();
    // this.isFinalsEnabled = general.isKnockoutsEnabled;
    this.isFinalsEnabled = true;
    FormControlUtils.setState(this.finalsStageFormController, this.isFinalsEnabled);

    this.matchDataService.getUserPredictions().subscribe((userPredictionsDTO: UserPredictionDtoI) => {
      if (userPredictionsDTO?._id) {
        this.userPredictionDto = userPredictionsDTO;
      }
      if (userPredictionsDTO?.finalsMatches) {
        this.matches = userPredictionsDTO.finalsMatches;
        this.mode = MODE.EDIT;
      } else {
        this.getInitialFinalsMatches();
        this.mode = MODE.NEW;
      }
    });
  }

  onTeamSelect(selectedTeam: TeamI, index: number) {
    if (index >= 0) {
      this.updateCurrentMatch(index, selectedTeam);
      this.updateParentMatch(index, selectedTeam);
      this.clearOtherParentMatches(index);
      this.finalsStageFormController.markAsDirty();
      FormControlUtils.setState(this.finalsStageFormController, !this.isAllMatchesFilled());
    }
  }

  private isAllMatchesFilled() {
    return every(this.matches, match => match.selectedTeam !== undefined);
  }

  private getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  private updateParentMatch(index: number, selectedTeam: TeamI) {
    const nextMatchIndex: number = this.getParentIndex(index);
    if (nextMatchIndex > -1) {
      const teamIndexInNextMatch = this.getTeamIndexInNextMatch(index);
      const nextMatch = this.matches[nextMatchIndex];
      teamIndexInNextMatch === 0 ? nextMatch.homeTeam = selectedTeam : nextMatch.awayTeam = selectedTeam;
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

  private async getInitialFinalsMatches() {
    const top8Matches = await this.matchDataService.getMatches(eMatchStage.FINALS);
    this.matches = new Array(15);
    top8Matches.forEach((match, i) => {
      return this.matches[match.matchNumber] = match;
    });

    for (let i = 0; i < 7; i++) {
      this.matches[i] = {
        kickOffTime: undefined, matchNumber: i, clear(teamIndexInNextMatch: number): void {
        }, homeTeam: undefined, awayTeam: undefined
      };
    }
  }

  onSubmit() {
    if (this.isEditMode() || this.userPredictionDto) {
      this.matchDataService.updateUserPredictions(
        this.userPredictionDto.standings,
        this.userPredictionDto.matchScores,
        this.matches,
        this.userPredictionDto._id).subscribe(value => {
        this.onSubmitSucceed();
      });
    } else {
      this.matchDataService.addUserPredictions(null, null, this.matches).subscribe(() => {
        this.onSubmitSucceed();
      });
    }
  }

  private isEditMode() {
    return this.mode === MODE.EDIT;
  }

  private onSubmitSucceed() {
    this._snackBar.open(`${this.isEditMode() ? 'Updated' : 'Created'} successfully`, 'close', SNACK_BAR_CONFIG);
    FormControlUtils.setState(this.finalsStageFormController, true);

  }
}



