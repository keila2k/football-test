import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatchesRoutingModule} from './matches-routing.module';
import {ListPageComponent} from './list-page/list-page.component';
import {SharedModule} from '../shared/shared.module';
import {PredictionsPageComponent} from './list-page/predictions-page/predictions-page.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FlexModule} from '@angular/flex-layout';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatSelectModule} from '@angular/material/select';
import {TournamentBracketComponent} from './tournament-bracket/tournament-bracket.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {TeamComponent} from './team/team.component';
import {MatchupComponent} from './matchup/matchup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GroupsStageComponent} from './groups-stage/groups-stage.component';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [ListPageComponent, PredictionsPageComponent, TournamentBracketComponent, TeamComponent, MatchupComponent, MatchupComponent, GroupsStageComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatchesRoutingModule,
    DragDropModule,
    FlexModule,
    FontAwesomeModule,
    MatSelectModule,
    MatButtonToggleModule,
    FormsModule,
    MatStepperModule,
    ReactiveFormsModule
  ]
})
export class MatchesModule {
}
