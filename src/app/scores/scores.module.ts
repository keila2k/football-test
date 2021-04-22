import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreListComponent } from './score-list/score-list.component';
import {SharedModule} from '../shared/shared.module';
import {ScoresRoutingModule} from './scores-routing.module';



@NgModule({
  declarations: [ScoreListComponent],
  imports: [
    CommonModule,
    ScoresRoutingModule,
    SharedModule
  ]
})
export class ScoresModule { }
