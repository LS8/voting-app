import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PollService {
  authToken: any;

  constructor(private http: Http) { }

  getIndividualPoll(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`http://localhost:3000/polls/${id}`, { headers: headers })
      .map(res => res.json());
  }
}
