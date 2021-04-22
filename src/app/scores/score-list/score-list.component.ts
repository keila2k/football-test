import {Component, OnInit} from '@angular/core';
import {UserScoreDtoI} from '../../dtos/UserScoreDtoI';
import {UserService} from '../../services/user.service';
import {MatchDataService} from '../../predictions/matches/match-data.service';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.scss']
})
export class ScoreListComponent implements OnInit {
  userScoreDtos: UserScoreDtoI[];

  constructor(private userService: UserService, private matchDataService: MatchDataService) {
  }

  async ngOnInit() {
    const userScoreDtos: UserScoreDtoI[] = await this.matchDataService.getUserScores();
    if (userScoreDtos) {
      this.userScoreDtos = userScoreDtos;
    }
  }
}
