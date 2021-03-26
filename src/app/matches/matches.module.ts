import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesRoutingModule } from './matches-routing.module';
import { ListPageComponent } from './list-page/list-page.component';
import { SharedModule } from '../shared/shared.module';
import { PredictionsPageComponent } from './list-page/predictions-page/predictions-page.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FlexModule} from '@angular/flex-layout';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ListPageComponent, PredictionsPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatchesRoutingModule,
    DragDropModule,
    FlexModule,
    FontAwesomeModule
  ]
})
export class MatchesModule { }
