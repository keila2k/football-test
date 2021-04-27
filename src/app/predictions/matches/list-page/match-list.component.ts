import {Component, OnInit} from '@angular/core';
import {MatchDataService} from '../match-data.service';
import {UserService} from '../../../services/user.service';
import {MatchPredictionI} from '../../../dtos/MatchPrediction';
import {FormControl, Validators} from '@angular/forms';
import {every, filter, some} from 'lodash-es';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {MODE} from '../../../utils/mode';
import {UserPredictionDtoI} from '../../../dtos/UserPredictionDtoI';
import {GeneralDtoI} from '../../../dtos/GeneralDtoI';
import {eMatchStage} from '../../../dtos/eMatchStage';

const VALIDATORS = [
  Validators.required,
  Validators.max(20)
];

const SNACK_BAR_CONFIG: MatSnackBarConfig = {
  duration: 5 * 1000,
};

@Component({
  selector: 'app-list-page',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {
  scoreFormControls: { homeTeamFormControl: FormControl, awayTeamFormControl: FormControl }[] = [];
  MODE: MODE;
  private userPredictionDto: UserPredictionDtoI;
  matchScores: MatchPredictionI[];
  private isStandingsEnabled = false;
  private isFinalsEnabled = false;

  constructor(private userService: UserService, private matchDataService: MatchDataService, private _snackBar: MatSnackBar
  ) {
  }

  async ngOnInit() {
    const general: GeneralDtoI = await this.matchDataService.getGeneral();
    this.isStandingsEnabled = general.isPredictionsEnabled;
    this.isFinalsEnabled = general.isKnockoutsEnabled;

    this.matchDataService.getUserPredictions().subscribe(async userPredictionDto => {
      if (userPredictionDto?._id) {
        this.userPredictionDto = userPredictionDto;
      }
      let matchScores = [];
      if (userPredictionDto?.matchScores) {
        matchScores = userPredictionDto.matchScores;
        this.MODE = MODE.EDIT;
      } else {
        matchScores = await this.matchDataService.getMatches();
        this.MODE = MODE.NEW;
      }
      if (matchScores) {
        this.matchScores = (filter(matchScores, match => match?.homeTeam && match?.awayTeam) as MatchPredictionI[]);
        this.scoreFormControls = this.matchScores.map(match =>
          ({
            homeTeamFormControl: new FormControl({
              value: match.homeTeamScore || '',
              disabled: this.isMatchPredictionsDisabled(match)
            }, VALIDATORS),
            awayTeamFormControl: new FormControl({
              value: match.awayTeamScore || '',
              disabled: this.isMatchPredictionsDisabled(match)
            }, VALIDATORS)
          }));
      }
    });
  }

  private isMatchPredictionsDisabled(matchPrediction: MatchPredictionI) {
    return matchPrediction.stage === eMatchStage.GROUPS && !this.isStandingsEnabled ||
      matchPrediction.stage === eMatchStage.FINALS && !this.isFinalsEnabled;
  }

  isDisabled(): boolean {
    return this.scoreFormControls.length === 0 ||
      every(this.scoreFormControls, formControl => !formControl.homeTeamFormControl.dirty && !formControl.awayTeamFormControl.dirty) ||
      some(this.scoreFormControls, formControl => formControl.homeTeamFormControl.errors || formControl.awayTeamFormControl.errors);
  }

  async onSubmit() {
    if (this.isEditMode() || this.userPredictionDto) {
      this.matchDataService.updateUserPredictions(this.userPredictionDto.standings,
        this.matchScores,
        this.userPredictionDto.finalsMatches,
        this.userPredictionDto._id).subscribe(() => this.openSnackBar());
    } else {
      this.matchDataService.addUserPredictions(null, this.matchScores, null).subscribe(() =>
        this.openSnackBar());
    }
  }

  private openSnackBar() {
    this._snackBar.open('Updated successfully', 'close', SNACK_BAR_CONFIG);
  }

  private isEditMode() {
    return this.MODE === MODE.EDIT;
  }
}

