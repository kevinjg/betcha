import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { BetsService } from './bets.service';

@Component({
  template: require('./bets.component.html'),
  styles: [
    `
      .list-group {
        cursor: pointer;
      }
    `
  ]
})
export class BetsComponent implements OnInit {
  private bets;
  private terms;
  private opponent;

  constructor(private betsService: BetsService) { }

  ngOnInit() {
    this.getBets();
  }

  getBets() {
    this.betsService.getBets()
      .subscribe(bets => {
        this.bets = bets;
        console.dir(bets[1].meta);
      },
      error => console.log(error));
  }

  getBetDetail(bet) {
    this.terms = bet.terms;
    this.opponent = bet.opponent;
  }
}
