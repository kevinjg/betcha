import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './games.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GamesListComponent } from './games-list/games-list.component';
// import { MyAppsComponent } from './my-apps.component';
// import { MyAppCreateComponent } from './my-app-create/my-app-create.component';
// import { MyAppsListComponent } from './my-apps-list/my-apps-list.component';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
    children: [
      {
        path: '',
        component: GamesListComponent
      },
      {
        path: ':id',
        component: GameDetailComponent
      }
      // {
      //   path: 'create',
      //   component: MyAppCreateComponent
      // },
      // {
      //   path: ':id',
      //   component: MyAppComponent
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }

export const routedComponents = [
  GameDetailComponent,
  GamesComponent,
  GamesListComponent
];
