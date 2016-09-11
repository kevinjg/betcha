import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'games'
  },
  {
    path: 'games',
    loadChildren: () => System.import('./games/games.module').then(({GamesModule}) => GamesModule)
  },
    {
    path: 'bets',
    loadChildren: () => System.import('./bets/bets.module').then(({BetsModule}) => BetsModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
