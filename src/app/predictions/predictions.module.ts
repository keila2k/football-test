import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {GroupsStageComponent} from './matches/groups-stage/groups-stage.component';
import {MatchListComponent} from './matches/list-page/match-list.component';
import {PredictionsPageComponent} from './matches/predictions-page/predictions-page.component';
import {TournamentBracketComponent} from './matches/tournament-bracket/tournament-bracket.component';
import {TeamComponent} from './matches/team/team.component';
import {MatchupComponent} from './matches/matchup/matchup.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FlexModule} from '@angular/flex-layout';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {PredictionsRoutingModule} from './predictions-routing.module';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [MatchListComponent, GroupsStageComponent, TournamentBracketComponent, TeamComponent, MatchupComponent, PredictionsPageComponent],
  imports: [
    PredictionsRoutingModule,
    CommonModule,
    SharedModule,
    DragDropModule,
    FlexModule,
    FontAwesomeModule,
    MatSelectModule,
    MatButtonToggleModule,
    FormsModule,
    MatStepperModule,
    MatInputModule,
    ReactiveFormsModule],
  exports: [RouterModule]
})
export class PredictionsModule {
}
