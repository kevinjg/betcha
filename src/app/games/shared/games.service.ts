import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GamesService {
  private gamesUrl = 'http://localhost:3000/api/nfl/fb/games';
  // private detailsUrl = 'http://localhost:3000/ap'

  constructor(private http: Http) { }

  getGames() {
    return this.http.get(this.gamesUrl + '/current')
      .map(this.extractGamesData)
      .catch(this.handleError);
  }

  getCompletedGames() {
    return this.http.get(this.gamesUrl + '/completed')
      .map(this.extractGamesData)
      .catch(this.handleError);
  }

  getGame(id: string) {
    return this.http.get(this.gamesUrl + '/' + id)
      .map((data) => {
        // console.log(data);
        console.dir(data.json());
        return data.json().data;
      });
  }

  // getCurrentGames() {

  // }

  getGameTime(id: any) {
    return this.http.get(this.gamesUrl + '/' + id + '/clock')
      .map((data) => {
        // console.log(data);
        console.dir(data.json());
        return data.json().data;
      });
  }
  // getGame(id: any) {
  //   let params: URLSearchParams = new URLSearchParams();
  //   params.set('hometeam', 'BAY');
  //   params.set('awayteam', 'SMU');

  //   return this.http.get(this.gamesUrl + '/details', { search: params })
  //     .map(this.extractData)
  //     .catch(this.handleError);
  // }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private extractGamesData(res: Response) {
    console.dir(res);
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
