import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BetsRoutingModule, routedComponents } from './bets.routing';
import { BetsService } from './bets.service';

@NgModule({
  imports: [
    BetsRoutingModule,
    SharedModule
  ],
  declarations: [routedComponents],
  providers: [BetsService]
})
export class BetsModule { }
