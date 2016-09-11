import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/core.module';
import { AuthService } from './shared/auth.service';
import { ChallengeComponent } from './challenge/challenge.component';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

import { BetsService } from './bets/bets.service';

let options = <ToastOptions>{
  positionClass: 'toast-bottom-right',
};

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,
    ToastModule
  ],
  declarations: [
    AppComponent,
    ChallengeComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthService,
    BetsService,
    {
      provide: Window,
      useValue: window
    },
    { provide: ToastOptions, useValue: options }
  ]
})
export class AppModule { }
