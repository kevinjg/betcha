import { Component } from '@angular/core';

import { AuthService } from './shared/auth.service';

import * as io from 'socket.io-client';

@Component({
  selector: 'hack-app',
  template: require('./app.component.html'),
  styleUrls: [require('./app.component.scss').toString()]
})
export class AppComponent {
  // private socket;

  constructor(private auth: AuthService) {
    // this.socket = io('http://localhost:3000');
    // this.socket.on('update', function (data) {
    //   alert(data);
    // }.bind(this));
  }
}
