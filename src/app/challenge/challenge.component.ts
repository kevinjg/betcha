import { Component, OnInit } from '@angular/core';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';

declare var $: any;

@Component({
  selector: 'hack-challenge',
  template: require('./challenge.component.html')
})
export class ChallengeComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  showSuccess() {
    // this.toastr.success('Challenge sent!', 'Success!');
  }

  sendChallenge() {
    // console.log('hello');
    $('#myModal').modal('hide');
    // setTimeout(() => {
    //   this.showSuccess();
    // }, 1500);
    // SEND TO GAME
  }
}