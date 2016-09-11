import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { GamesService } from '../shared/games.service';

@Component({
  template: require('./game-detail.component.html')
})
export class GameDetailComponent implements OnInit, OnDestroy {
  private game;
  private gametime;
  private final;
  private halftime;
  private sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private gamesService: GamesService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.getGame(id);
      this.getGameTime(id);
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getGame(id: string) {
    this.gamesService.getGame(id)
      .subscribe(game => this.game = game,
      error => console.log(error));
  }

  getGameTime(id: string) {
    this.gamesService.getGameTime(id)
      .subscribe(gametime => {
        if (gametime.clockValue === 'final') {
          this.final = true;
        } else if (gametime.clockValue === 'half') {
          this.halftime = true;
        } else {
          this.gametime = gametime;
        }
      },
      error => console.log(error));
  }

  // onSubmit(app: any) {
  //   this.myAppService.updateApp(app)
  //     .subscribe((app) => {
  //       this.router.navigate(['/']);
  //     },
  //     (err) => {
  //       console.log(err);
  //     })
  // }

  // goToAppList() {
  //   this.router.navigate(['/']);
  // }
}
