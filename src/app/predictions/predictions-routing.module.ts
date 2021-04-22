import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GroupsStageComponent} from './matches/groups-stage/groups-stage.component';
import {MatchListComponent} from './matches/list-page/match-list.component';
import {TournamentBracketComponent} from './matches/tournament-bracket/tournament-bracket.component';

const routes: Routes = [
  {
    path: 'standings',
    component: GroupsStageComponent,
  },
  {
    path: 'matches',
    component: MatchListComponent
  },
  {
    path: 'finals',
    component: TournamentBracketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PredictionsRoutingModule {
}
