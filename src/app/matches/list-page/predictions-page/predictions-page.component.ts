import {Component, OnInit} from '@angular/core';
import {MatchDataService} from '../../match-data.service';
import {LeagueDTO, Match, Standing, UserPredictionDTO} from '../../../dtos/dtos';
import {moveItemInArray} from '@angular/cdk/drag-drop';
import flatten from 'lodash-es/flatten';
import map from 'lodash-es/map';
import every from 'lodash-es/every';
import {MODE} from '../../../utils/mode';
import {StepperSelectionEvent} from '@angular/cdk/stepper';
import {FormControl} from '@angular/forms';
import {MatchUtils} from '../../../utils/MatchUtils';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

const SNACK_BAR_CONFIG: MatSnackBarConfig = {
  duration: 5 * 1000,
};

@Component({
  selector: 'app-predictions-page',
  templateUrl: './predictions-page.component.html',
  styleUrls: ['./predictions-page.component.scss']
})
export class PredictionsPageComponent implements OnInit {
  standings: Array<Standing[]>;
  groupStageFormController: FormControl = new FormControl('');
  knockoutStageFormController: FormControl = new FormControl('');
  mode: MODE;
  private standingsId: string;
  matches: Match[];

  constructor(private matchDataService: MatchDataService, private _snackBar: MatSnackBar) {
    this.setState(this.groupStageFormController, false);
    this.setState(this.knockoutStageFormController, true);
  }

  ngOnInit() {
    this.matchDataService.getUserPredictions().subscribe(userPredictionsDTO => {
      if (userPredictionsDTO?.length > 0) {
        this.getUserPredictions(userPredictionsDTO);
        this.enableEditMode();
      } else {
        this.getNewPredictions();
      }
    });
  }

  // =============================  Groups stage =============================
  onGroupStandingsChange({event, standing}) {
    this.groupStageFormController.markAsDirty();
    this.setState(this.knockoutStageFormController, true);
    moveItemInArray(standing, event.previousIndex, event.currentIndex);
  }

  // ============================= Knockouts stage =============================

  onKnockoutTeamSelect($event: Standing) {
    this.knockoutStageFormController.markAsDirty();
    this.setState(this.knockoutStageFormController, !this.isAllMatchesFilled());
  }

  isAllMatchesFilled() {
    return every(this.matches, match => match.selectedTeam !== undefined);
  }

  // ============================= General =============================

  setState(control: FormControl, state: boolean) {
    if (state) {
      control.setErrors({required: true});
    } else {
      control.reset();
    }
  }

  onSelectionChange(event: StepperSelectionEvent) {
    if (event.selectedIndex === 1 && this.groupStageFormController.dirty) {
      this.groupStageFormController.reset();
      this.matches = MatchUtils.getMatches(this.standings);
    }
  }

  isNewMode() {
    return this.mode === MODE.NEW;
  }

  isEditMode() {
    return this.mode === MODE.EDIT;
  }

  private enableEditMode() {
    this.mode = MODE.EDIT;
    this.setState(this.groupStageFormController, false);
    this.setState(this.knockoutStageFormController, true);
  }

  private getUserPredictions(userPredictionsDTO: UserPredictionDTO[]) {
    this.standingsId = userPredictionsDTO[0].id;
    this.standings = MatchUtils.getStandings(userPredictionsDTO[0].standings);
    this.matches = map(userPredictionsDTO[0].matches, match => new Match(match.team1, match.team2, match.idx, match.selectedTeam));
  }

  private getNewPredictions() {
    this.matchDataService.getStandings().subscribe((value: LeagueDTO) => {
      this.standings = MatchUtils.getStandings(value.standings);
      this.matches = MatchUtils.getMatches(this.standings);
      this.mode = MODE.NEW;
    });
  }

  onSubmit() {
    const standings: Standing[] = flatten(this.standings);
    if (this.isNewMode()) {
      this.matchDataService.addUserPredictions(standings, this.matches).subscribe(value => {
        this.onSubmitSucceed();
      });
    } else {
      this.matchDataService.updateUserPredictions(standings, this.matches, this.standingsId).subscribe(value => {
        this.onSubmitSucceed();
      });
    }
  }

  private onSubmitSucceed() {
    this.openSnackBar();
    this.groupStageFormController.reset();
    this.knockoutStageFormController.reset();
    this.enableEditMode();

  }

  openSnackBar() {
    this._snackBar.open(`${this.isEditMode() ? 'Updated' : 'Created'} successfully`, 'close', SNACK_BAR_CONFIG);
  }
}
