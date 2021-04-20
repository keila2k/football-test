import {Component, OnInit} from '@angular/core';
import {MatchDataService} from '../../match-data.service';
import {moveItemInArray} from '@angular/cdk/drag-drop';
import flatten from 'lodash-es/flatten';
import map from 'lodash-es/map';
import every from 'lodash-es/every';
import {MODE} from '../../../utils/mode';
import {StepperSelectionEvent} from '@angular/cdk/stepper';
import {FormControl} from '@angular/forms';
import {MatchUtils} from '../../../utils/MatchUtils';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {StandingI} from '../../../dtos/StandingI';
import {Match} from '../../../dtos/Match';
import {UserPredictionDtoI} from '../../../dtos/UserPredictionDtoI';
import {GeneralDtoI} from '../../../dtos/GeneralDtoI';
import {ePrediction} from '../../../dtos/ePrediction';

const SNACK_BAR_CONFIG: MatSnackBarConfig = {
  duration: 5 * 1000,
};

@Component({
  selector: 'app-predictions-page',
  templateUrl: './predictions-page.component.html',
  styleUrls: ['./predictions-page.component.scss']
})
export class PredictionsPageComponent implements OnInit {
  standings: StandingI[];
  groupStageFormController: FormControl = new FormControl('');
  knockoutStageFormController: FormControl = new FormControl('');
  mode: MODE;
  private standingsId: string;
  knockoutMatches: Match[] = null;
  isGroupsStageOver = false;
  isKnockoutsEnabled = false;

  constructor(private matchDataService: MatchDataService, private _snackBar: MatSnackBar) {
  }

  async ngOnInit() {
    const general: GeneralDtoI = await this.matchDataService.getGeneral();
    this.isGroupsStageOver = !general.isPredictionsEnabled;
    this.isKnockoutsEnabled = general.isKnockoutsEnabled;

    this.setState(this.groupStageFormController, this.isGroupsStageOver);
    this.setState(this.knockoutStageFormController, this.isKnockoutsEnabled);

    this.matchDataService.getUserPredictions().subscribe((userPredictionsDTO: UserPredictionDtoI) => {
      if (userPredictionsDTO) {
        this.getUserStandings(userPredictionsDTO);
        this.getUserKnockoutMatches(userPredictionsDTO);
        this.mode = MODE.EDIT;
      } else {
        this.getNewStandings();
        this.getNewKnockoutMatches();
        this.mode = MODE.NEW;
      }
    });
  }

  // =============================  Groups stage =============================
  onGroupStandingsChange({event, standing}) {
    if (this.isGroupsStageOver) {
      this.groupStageFormController.markAsDirty();
      this.setState(this.groupStageFormController, false);
    }
    if (this.isKnockoutsEnabled) {
      this.setState(this.knockoutStageFormController, true);
    }
    const previousIndex = event.previousIndex;
    const currentIndex = event.currentIndex;
    moveItemInArray(standing, previousIndex, currentIndex);
    this.updateRanks(standing);
  }

  private updateRanks(standing) {
    standing.forEach((standingItem, index) => standingItem.rank = index + 1);
  }

// ============================= Knockouts stage =============================

  onKnockoutTeamSelect($event: StandingI) {
    this.knockoutStageFormController.markAsDirty();
    this.setState(this.knockoutStageFormController, !this.isAllMatchesFilled());
  }

  isAllMatchesFilled() {
    return every(this.knockoutMatches, match => match.selectedTeam !== undefined);
  }

  private async getUserKnockoutMatches(userPredictionsDTO: UserPredictionDtoI) {
    if (this.isKnockoutsEnabled) {
      if (userPredictionsDTO.matches && userPredictionsDTO.matches.length) {
        this.knockoutMatches = map(userPredictionsDTO.matches, match => new Match(match.team1, match.team2, match.idx, match.selectedTeam));
      } else {
        await this.getNewKnockoutMatches();
      }
    }
  }

  private async getNewKnockoutMatches() {
    if (this.isKnockoutsEnabled) {
      this.knockoutMatches = await this.matchDataService.getInitialKnockoutMatches();
    }
  }

  // ============================= General =============================

  setState(control: FormControl, state: boolean) {
    if (state) {
      control.setErrors({required: true});
    } else {
      control.reset();
    }
  }

  onStepSelectionChange(event: StepperSelectionEvent) {
    if (event.selectedIndex === 1 && this.groupStageFormController.dirty) {
      this.setState(this.groupStageFormController, false);
      if (this.isKnockoutsEnabled) {
        this.knockoutMatches = MatchUtils.getMatches(this.standings);
      }
    }
  }

  isNewMode() {
    return this.mode === MODE.NEW;
  }

  isEditMode() {
    return this.mode === MODE.EDIT;
  }

  private getUserStandings(userPredictionsDTO: UserPredictionDtoI) {
    this.standingsId = userPredictionsDTO._id;
    this.standings = userPredictionsDTO.standings;
  }

  private async getNewStandings() {
    this.standings = await this.matchDataService.getStandings(ePrediction.INITIAL);
  }

  onSubmit() {
    const standings: StandingI[] = flatten(this.standings);
    if (this.isNewMode()) {
      this.matchDataService.addUserPredictions(standings, this.knockoutMatches).subscribe(value => {
        this.onSubmitSucceed();
      });
    } else {
      this.matchDataService.updateUserPredictions(standings, this.knockoutMatches, this.standingsId).subscribe(value => {
        this.onSubmitSucceed();
      });
    }
  }

  private onSubmitSucceed() {
    this.openSnackBar();
    if (this.isGroupsStageOver) {
      this.setState(this.groupStageFormController, true);
    }
    if (this.isKnockoutsEnabled) {
      this.setState(this.knockoutStageFormController, true);
    }
  }

  openSnackBar() {
    this._snackBar.open(`${this.isEditMode() ? 'Updated' : 'Created'} successfully`, 'close', SNACK_BAR_CONFIG);
  }
}
