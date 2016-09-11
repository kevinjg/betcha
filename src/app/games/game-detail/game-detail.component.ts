import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { GamesService } from '../shared/games.service';

@Component({
  template: require('./game-detail.component.html'),
  styles: [
    `
      .score {
        margin-bottom: 16px;
      }

      .time {
        margin-bottom: 32px;
      }

      .media {
        margin-bottom: 8px;
      }
    `
  ]
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
      .subscribe(game => {
        this.game = game;

        if (this.game.home_team.name === 'Broncos') {
          this.game.homeLogoUrl = 'denverbroncos';
        } else if (this.game.home_team.name === 'Saints') {
          this.game.homeLogoUrl = 'neworleanssaints';
        } else if (this.game.home_team.name === 'Eagles') {
          this.game.homeLogoUrl = 'philadelphiaeagles';
        } else if (this.game.home_team.name === 'Titans') {
          this.game.homeLogoUrl = 'titansonline';
        } else if (this.game.home_team.name === 'Falcons') {
          this.game.homeLogoUrl = 'atlantafalcons';
        } else {
          this.game.homeLogoUrl = game.home_team.name.toLowerCase();
        }

        if (this.game.away_team.name === 'Broncos') {
          this.game.awayLogoUrl = 'denverbroncos';
        } else if (this.game.away_team.name === 'Saints') {
          this.game.awayLogoUrl = 'neworleanssaints';
        } else if (this.game.away_team.name === 'Eagles') {
          this.game.awayLogoUrl = 'philadelphiaeagles';
        } else if (this.game.away_team.name === 'Titans') {
          game.away_team.name = 'titansonline';
        } else if (this.game.away_team.name === 'Falcons') {
          this.game.awayLogoUrl = 'atlantafalcons';
        } else {
          this.game.awayLogoUrl = game.away_team.name.toLowerCase();
        }
      },
      error => console.log(error));
  }

  getGameTime(id: string) {
    this.gamesService.getGameTime(id)
      .subscribe(gametime => {
        if (gametime.clock === 'final') {
          this.final = true;
        } else if (gametime.clock === 'half') {
          this.halftime = true;
        } else {
          this.gametime = gametime;
        }
      },
      error => console.log(error));
  }
}
