import {Component, OnInit} from '@angular/core';
import {MatchDataService} from '../match-data.service';
import {UserService} from '../../services/user.service';
import {UserScoreDtoI} from '../../dtos/UserScoreDtoI';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  userScoreDtos: UserScoreDtoI[];

  constructor(private userService: UserService, private matchDataService: MatchDataService) {
  }

  async ngOnInit() {
    const userScoreDtos: UserScoreDtoI[] = await this.matchDataService.getUserScores();
    if (userScoreDtos) {
      this.userScoreDtos = userScoreDtos;
    }
    /*    const {api: {fixtures}}: Coordinate<FixtureAPI> = await this.matchDataService.subscribeToMatches();
        this.fixtures = fixtures;*/
  }
}
