import { Component } from '@angular/core';

import { AuthService } from './shared/auth.service';

@Component({
  selector: 'hack-app',
  template: require('./app.component.html')
})
export class AppComponent {
  constructor(private auth: AuthService) {}
}
