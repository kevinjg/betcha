import { Component } from '@angular/core';

import { AuthService } from './shared/auth.service';

@Component({
  selector: 'hack-app',
  template: require('./app.component.html'),
  styleUrls: [require('./app.component.scss').toString()]
})
export class AppComponent {
  constructor(private auth: AuthService) {}
}
