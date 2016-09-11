import { Component, OnInit } from '@angular/core';

import { BetsService } from './bets.service';

@Component({
  template: require('./bets.component.html')
})
export class BetsComponent implements OnInit {
  private bets;

  constructor(private betsService: BetsService) { }

  ngOnInit() {
    this.getBets();
  }

  getBets() {
    this.betsService.getBets()
      .subscribe(bets => {
        this.bets = bets;
        console.dir(bets[2].meta);
      },
      error => console.log(error));
  }
}
