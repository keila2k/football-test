import {Component, OnInit} from '@angular/core';
import {Coordinate, Fixture, FixtureAPI} from '../../dtos/dtos';
import {MatchDataService} from '../match-data.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  fixtures: Fixture[] = [];

  constructor(public matchDataService: MatchDataService) {
  }

  async ngOnInit() {
    const {api: {fixtures}}: Coordinate<FixtureAPI> = await this.matchDataService.subscribeToMatches();
    this.fixtures = fixtures;
  }
}
