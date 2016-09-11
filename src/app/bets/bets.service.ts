import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BetsService {
  private betsUrl = 'http://localhost:3000/bets';

  constructor(private http: Http) { }

  createBet(data: any) {
    // Simulates generating the UUID on the backend
    // data.id = UUID.UUID();
    const body = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:3000/bet', body, options)
      .map((data) => {
        return data;
      });
  }

  getBets() {
    return this.http.get(this.betsUrl)
      .map((data) => {
        console.dir(data);
        return data.json();
      });
  }
}
