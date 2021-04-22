import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {AuthGuard} from './user/auth.guard';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {
    path: 'login',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'predictions',
    loadChildren: () =>
      import('./predictions/predictions.module').then(m => m.PredictionsModule),
  },
  {
    path: 'scores',
    loadChildren: () =>
      import('./scores/scores.module').then(m => m.ScoresModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
