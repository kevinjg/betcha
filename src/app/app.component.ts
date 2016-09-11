import { Component } from '@angular/core';

import { AuthService } from './shared/auth.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'hack-app',
  template: require('./app.component.html'),
  styleUrls: [require('./app.component.scss').toString()]
})
export class AppComponent {
  constructor(private auth: AuthService) {
    // this.showSuccess();
  }

  // showSuccess() {
  //   this.toastr.success('Challenge sent!', 'Success!');
  // }

  // showError() {
  //   this.toastr.error('This is not good!', 'Oops!');
  // }

  // showWarning() {
  //   this.toastr.warning('You are being warned.', 'Alert!');
  // }

  // showInfo() {
  //   this.toastr.info('Just some information for you.');
  // }

  // showCustom() {
  //   this.toastr.custom('<span style="color: red">Message in red.</span>', null, { enableHTML: true });
  // }
}
