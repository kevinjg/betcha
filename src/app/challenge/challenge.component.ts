import { Component } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NgForm } from '@angular/forms';

import { BetsService } from '../bets/bets.service';

declare var $: any;

@Component({
  selector: 'hack-challenge',
  template: require('./challenge.component.html')
})
export class ChallengeComponent {
  constructor(private toastr: ToastsManager, private betsService: BetsService) { }

  // ngOnInit() { }

  showSuccess() {
    this.toastr.success('Challenge sent!', 'Success!');
  }

  sendChallenge(data) {
    // console.log('hello');
    $('#myModal').modal('hide');

    // this.betsService.createBet()
    // setTimeout(() => {
    //   this.showSuccess();
    // }, 1500);

    // SEND TO GAME
  }

  onSubmit(form: NgForm) {
    form.value.email = 'jkevin.garcia@gmail.com';
    this.betsService.createBet(form.value)
      .subscribe(() => {
        $('#myModal').modal('hide');
        this.showSuccess();
        // this.router.navigate(['/apps']);
      },
      (err) => {
        console.log(err);
      });
  }
}
