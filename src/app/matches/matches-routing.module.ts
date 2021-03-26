import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent } from './list-page/list-page.component';
import {PredictionsPageComponent} from './list-page/predictions-page/predictions-page.component';


const routes: Routes = [
  { path: '', component: ListPageComponent },
  { path: 'predictions', component: PredictionsPageComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchesRoutingModule { }
