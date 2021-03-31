import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatchDataService} from '../../match-data.service';
import {LeagueDTO, Match, Standing, StandingAPI, Team} from '../../../dtos/dtos';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import groupBy from 'lodash-es/groupBy';
import flatten from 'lodash-es/flatten';
import every from 'lodash-es/every';
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
  mode: MODE;
  private standingsId: string;
  matches: Match[];

  constructor(private matchDataService: MatchDataService) {
  }

  ngOnInit() {
    this.matchDataService.getUserPredictions().subscribe(userPredictionsDTO => {
      if (userPredictionsDTO?.length > 0) {
        this.standingsId = userPredictionsDTO[0].id;
        this.standings = this.getStandings(userPredictionsDTO[0].standings);
        this.matches = this.getMatches(this.standings);
        this.mode = MODE.EDIT;
      } else {
        this.matchDataService.getStandings().subscribe((value: LeagueDTO) => {
          this.standings = this.getStandings(value.standings);
          this.matches = this.getMatches(this.standings);
          this.mode = MODE.NEW;
        });
      }
    });
  }

  private getStandings(standings: Standing[]): Array<Standing[]> {
    return Object.values(groupBy(standings, (standing: Standing) => standing.group));
  }

  onDrop(event: CdkDragDrop<string[]>, standing: Standing[]) {
    this.isDirty = true;
    moveItemInArray(standing, event.previousIndex, event.currentIndex);
    this.matches = this.getMatches(this.standings);
  }

  private getMatches(standings: Array<Standing[]>): Match[] {
    const array: Match[] = new Array(15);
    array[0] = new Match(null, null, 0);
    array[1] = new Match(null, null, 1);
    array[2] = new Match(null, null, 2);
    array[3] = new Match(null, null, 3);
    array[4] = new Match(null, null, 4);
    array[5] = new Match(null, null, 5);
    array[6] = new Match(null, null, 6);
    array[7] = new Match(standings[0][0], standings[5][1], 7);
    array[8] = new Match(standings[7][0], standings[6][1], 8);
    array[9] = new Match(standings[2][0], standings[1][1], 9);
    array[10] = new Match(standings[5][0], standings[4][1], 10);
    array[11] = new Match(standings[1][0], standings[3][1], 11);
    array[12] = new Match(standings[3][0], standings[7][1], 12);
    array[13] = new Match(standings[6][0], standings[2][1], 13);
    array[14] = new Match(standings[4][0], standings[0][1], 14);
    return array;
  }

  onSubmit() {
    const standings: Standing[] = flatten(this.standings);
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

  getOptions(): Standing[] {
    return flatten(this.standings);
  }

  isAllMatchesFilled() {
    return every(this.matches, match => match.selectedTeam !== undefined);

  }
}
