import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PollService {
  authToken: any;

  constructor(private http: Http) { }

  getIndividualPoll(pollId) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`http://localhost:3000/polls/${pollId}`, { headers: headers })
      .map(res => res.json());
  }

  syncVote(pollId, updatedPoll) {
    let headers = new Headers();
    return this.http.post(`http://localhost:3000/polls/${pollId}`, updatedPoll, { headers: headers})
      .map(res => res.json());
  }

  deletePoll(pollId) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(`http://localhost:3000/polls/${pollId}`, { headers: headers })
      .map(res => res.json());
  }

}
