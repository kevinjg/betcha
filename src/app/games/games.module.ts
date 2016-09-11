import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { GamesRoutingModule, routedComponents } from './games.routing';
import { GamesService } from './shared/games.service';

@NgModule({
  imports: [
    GamesRoutingModule,
    SharedModule
  ],
  declarations: [routedComponents],
  providers: [GamesService]
})
export class GamesModule { }
