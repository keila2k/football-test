import {Component, OnInit} from '@angular/core';
import {MatchDataService} from '../../match-data.service';
import {Coordinate, Standing, StandingAPI, Team} from '../../../dtos/dtos';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import groupBy from 'lodash-es/groupBy';
import {MODE} from '../../../utils/mode';

@Component({
  selector: 'app-predictions-page',
  templateUrl: './predictions-page.component.html',
  styleUrls: ['./predictions-page.component.scss']
})
export class PredictionsPageComponent implements OnInit {
  teams: Team[];
  standings: Array<Standing[]>;
  isDirty: boolean;
  mode: MODE
  private standingsId: string;

  constructor(private matchDataService: MatchDataService) {
  }

  async ngOnInit() {
    this.matchDataService.getUserPredictions().subscribe(async userPredictionsDTO => {
      if (userPredictionsDTO?.length > 0) {
        this.standingsId = userPredictionsDTO[0].id;
        this.standings = this.getStandings(userPredictionsDTO[0].standings);
        this.mode = MODE.EDIT;
      } else {
        const {api: {standings}}: Coordinate<StandingAPI> = await this.matchDataService.getStandings();
        this.standings = standings;
        this.mode = MODE.NEW
      }
    });
  }

  private getStandings(standings: Standing[]): Array<Standing[]> {
    return Object.values(groupBy(standings, (standing: Standing) => standing.group));
  }

  drop(event: CdkDragDrop<string[]>, standing: Standing[]) {
    this.isDirty = true;
    moveItemInArray(standing, event.previousIndex, event.currentIndex);
  }

  onSubmit() {
    const standings: Standing[] = this.standings.reduce((accumulator, value) => accumulator.concat(value), []);
    if (this.isNewMode()) {
      this.matchDataService.addUserPredictions(standings).subscribe(value => {
        this.onSubmitSucceed();
      });
    } else {
      this.matchDataService.updateUserPredictions(standings, this.standingsId).subscribe(value => {
        this.onSubmitSucceed();
      });
    }
  }

  private onSubmitSucceed() {
    this.isDirty = false;
    this.mode = MODE.EDIT;
  }

  isEditMode() {
    return this.mode === MODE.EDIT;
  }

  isNewMode() {
    return this.mode === MODE.NEW;
  }
}
