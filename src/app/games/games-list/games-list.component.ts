import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { MyApp } from '../shared';
// import { MyAppService } from '../shared';
import { GamesService } from '../shared/games.service';

@Component({
  template: require('./games-list.component.html')
})
export class GamesListComponent implements OnInit {
  private games;
  private completedGames;

  constructor(private router: Router, private gamesService: GamesService) { }

  ngOnInit() {
    this.getGames();
    this.getCompletedGames();
  }

  getGames() {
    this.gamesService.getGames()
      .subscribe(games => this.games = games,
      error => console.log(error));
  }

  getCompletedGames() {
    this.gamesService.getCompletedGames()
      .subscribe(games => this.completedGames = games);
  }

  onSelect(game: any) {
    this.router.navigate(['/games', game.id]);
  }
}