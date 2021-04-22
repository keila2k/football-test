import {Component, OnInit} from '@angular/core';
import {MatchDataService} from '../match-data.service';
import {moveItemInArray} from '@angular/cdk/drag-drop';
import flatten from 'lodash-es/flatten';
import every from 'lodash-es/every';
import {MODE} from '../../../utils/mode';
import {StepperSelectionEvent} from '@angular/cdk/stepper';
import {FormControl} from '@angular/forms';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {StandingI} from '../../../dtos/StandingI';
import {UserPredictionDtoI} from '../../../dtos/UserPredictionDtoI';
import {GeneralDtoI} from '../../../dtos/GeneralDtoI';
import {ePrediction} from '../../../dtos/ePrediction';
import {MatchPrediction} from '../../../dtos/MatchPrediction';

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
  finalsStageFormController: FormControl = new FormControl('');
  mode: MODE;
  finalsMatches: MatchPrediction[] = null;
  isGroupsStageOver = false;
  isFinalsEnabled = false;
  private userPredictionDto: UserPredictionDtoI;

  constructor(private matchDataService: MatchDataService, private _snackBar: MatSnackBar) {
  }

  async ngOnInit() {
    const general: GeneralDtoI = await this.matchDataService.getGeneral();
    this.isGroupsStageOver = !general.isPredictionsEnabled;
    this.isFinalsEnabled = general.isKnockoutsEnabled;

    this.setState(this.groupStageFormController, !this.isGroupsStageOver);
    this.setState(this.finalsStageFormController, this.isFinalsEnabled);

    this.matchDataService.getUserPredictions().subscribe((userPredictionsDTO: UserPredictionDtoI) => {
      if (userPredictionsDTO?._id) {
        this.userPredictionDto = userPredictionsDTO;
      }
      if (userPredictionsDTO?.standings) {
        this.standings = userPredictionsDTO.standings;
        this.getUserFinalsMatches(userPredictionsDTO);
        this.mode = MODE.EDIT;
      } else {
        this.getInitialStandings();
        this.getInitialFinalsMatches();
        this.mode = MODE.NEW;
      }
    });
  }

  // =============================  Groups stage =============================
  onGroupStandingsChange({event, standing}) {
    this.groupStageFormController.markAsDirty();
    this.setState(this.groupStageFormController, false);

    if (this.isFinalsEnabled) {
      this.setState(this.finalsStageFormController, true);
    }
    const previousIndex = event.previousIndex;
    const currentIndex = event.currentIndex;
    moveItemInArray(standing, previousIndex, currentIndex);
    this.updateRanks(standing);
  }

  private updateRanks(standing) {
    standing.forEach((standingItem, index) => standingItem.rank = index + 1);
  }

// ============================= Finals stage =============================

  onFinalsTeamSelect($event: StandingI) {
    this.finalsStageFormController.markAsDirty();
    this.setState(this.finalsStageFormController, !this.isAllMatchesFilled());
  }

  isAllMatchesFilled() {
    return every(this.finalsMatches, match => match.selectedTeam !== undefined);
  }

  private async getUserFinalsMatches(userPredictionsDTO: UserPredictionDtoI) {
    if (this.isFinalsEnabled) {
      if (userPredictionsDTO.finalsMatches) {
        this.finalsMatches = userPredictionsDTO.finalsMatches;
      } else {
        await this.getInitialFinalsMatches();
      }
    }
  }

  private async getInitialFinalsMatches() {
    if (this.isFinalsEnabled) {
      this.finalsMatches = await this.matchDataService.getFinalsMatches(ePrediction.INITIAL);
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
    }
  }

  isNewMode() {
    return this.mode === MODE.NEW;
  }

  isEditMode() {
    return this.mode === MODE.EDIT;
  }

  private async getInitialStandings() {
    this.standings = await this.matchDataService.getStandings(ePrediction.INITIAL);
  }

  onSubmit() {
    if (this.isEditMode() || this.userPredictionDto) {
      this.matchDataService.updateUserPredictions(
        this.standings,
        this.userPredictionDto.matchScores,
        this.finalsMatches,
        this.userPredictionDto._id).subscribe(value => {
        this.onSubmitSucceed();
      });
    } else {
      this.matchDataService.addUserPredictions(this.standings, null, this.finalsMatches).subscribe(value => {
        this.onSubmitSucceed();
      });
    }
  }

  private onSubmitSucceed() {
    this.openSnackBar();
    if (this.isGroupsStageOver) {
      this.setState(this.groupStageFormController, true);
    }
    if (this.isFinalsEnabled) {
      this.setState(this.finalsStageFormController, true);
    }
  }

  openSnackBar() {
    this._snackBar.open(`${this.isEditMode() ? 'Updated' : 'Created'} successfully`, 'close', SNACK_BAR_CONFIG);
  }
}
