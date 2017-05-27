import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PollService {
  authToken: any;

  constructor(private http: Http) { }

  addPoll(newPoll) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(`api/profile/newpoll`, newPoll, { headers: headers })
      .map(res => res.json());
  }

  getAllPolls() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`api/polls`, { headers: headers })
      .map(res => res.json());
  }

  getIndividualPoll(pollId) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`api/polls/${pollId}`, { headers: headers })
      .map(res => res.json());
  }

  syncVote(pollId, updatedPoll) {
    let headers = new Headers();
    return this.http.post(`api/polls/${pollId}`, updatedPoll, { headers: headers})
      .map(res => res.json());
  }

  deletePoll(pollId) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(`api/polls/${pollId}`, { headers: headers })
      .map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

}
