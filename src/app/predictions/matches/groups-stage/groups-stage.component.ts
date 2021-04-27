import {Component, OnInit} from '@angular/core';
import {moveItemInArray} from '@angular/cdk/drag-drop';
import {StandingI} from '../../../dtos/StandingI';
import {GeneralDtoI} from '../../../dtos/GeneralDtoI';
import {UserPredictionDtoI} from '../../../dtos/UserPredictionDtoI';
import {MODE} from '../../../utils/mode';
import {MatchDataService} from '../match-data.service';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {FormControl} from '@angular/forms';
import {FormControlUtils} from '../../../utils/FormControlUtils';
import {ePrediction} from '../../../dtos/ePrediction';

const SNACK_BAR_CONFIG: MatSnackBarConfig = {
  duration: 5 * 1000,
};

@Component({
  selector: 'app-groups-stage',
  templateUrl: './groups-stage.component.html',
  styleUrls: ['./groups-stage.component.scss']
})
export class GroupsStageComponent implements OnInit {
  standings: StandingI[] = [];
  isGroupsStageEnabled = false;
  groupStageFormController: FormControl = new FormControl('');
  mode: MODE;
  private userPredictionDto: UserPredictionDtoI;

  constructor(private matchDataService: MatchDataService, private _snackBar: MatSnackBar) {
  }

  async ngOnInit() {
    const general: GeneralDtoI = await this.matchDataService.getGeneral();
    this.isGroupsStageEnabled = general.isPredictionsEnabled;
    FormControlUtils.setState(this.groupStageFormController, this.isGroupsStageEnabled);

    this.matchDataService.getUserPredictions().subscribe(async (userPredictionsDTO: UserPredictionDtoI) => {
      if (userPredictionsDTO?._id) {
        this.userPredictionDto = userPredictionsDTO;
      }
      if (userPredictionsDTO?.standings) {
        this.standings = userPredictionsDTO.standings;
        this.mode = MODE.EDIT;
        if (!this.isGroupsStageEnabled) {
          const finalStandings = await this.matchDataService.getStandings(ePrediction.FINAL);
          this.updateCorrectStandings(finalStandings);
        }
      } else {
        this.standings = await this.getInitialStandings();
        this.mode = MODE.NEW;
      }
    });
  }

  private async getInitialStandings() {
    return await this.matchDataService.getStandings(ePrediction.INITIAL);
  }

  onGroupStandingChange(event, standing) {
    this.groupStageFormController.markAsDirty();
    FormControlUtils.setState(this.groupStageFormController, false);
    moveItemInArray(standing, event.previousIndex, event.currentIndex);
    this.updateRanks(standing);
  }

  private updateRanks(standing) {
    standing.forEach((standingItem, index) => standingItem.rank = index + 1);
  }

  onSubmit() {
    if (this.isEditMode() || this.userPredictionDto) {
      this.matchDataService.updateUserPredictions(
        this.standings,
        this.userPredictionDto.matchScores,
        this.userPredictionDto.finalsMatches,
        this.userPredictionDto._id).subscribe(value => {
        this.onSubmitSucceed();
      });
    } else {
      this.matchDataService.addUserPredictions(this.standings, null, null).subscribe(() => {
        this.onSubmitSucceed();
      });
    }
  }

  private isEditMode() {
    return this.mode === MODE.EDIT;
  }

  private onSubmitSucceed() {
    this._snackBar.open(`${this.isEditMode() ? 'Updated' : 'Created'} successfully`, 'close', SNACK_BAR_CONFIG);
    FormControlUtils.setState(this.groupStageFormController, true);

  }

  private updateCorrectStandings(finalStandings: StandingI[]) {
    if (finalStandings && this.standings && this.userPredictionDto._id) {
      finalStandings.forEach(finalStanding => {
        const userStanding = this.standings.find(standing => standing.group.groupName === finalStanding.group.groupName);
        for (let i1 = 0; i1 < finalStanding.items.length; i1++) {
          const finalGroupItem = finalStanding.items[i1];
          const userGroupItem = userStanding.items[i1];
          if (finalGroupItem?.team?.internationalName && userGroupItem?.team?.internationalName) {
            userGroupItem.isCorrect = finalGroupItem?.team?.internationalName === userGroupItem?.team?.internationalName;
          }

        }

      });
    }
  }
}
