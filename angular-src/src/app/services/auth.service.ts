import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authToken: any;
  account: any;

  constructor(private http: Http) { }

  authenticateAccount(account) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('account/authenticate', account, { headers: headers })
      .map(res => res.json());
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('profile', { headers: headers })
      .map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    this.loadToken();
    return tokenNotExpired('id_token');
  }

  registerAccount(account) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('account/register', account, { headers: headers })
      .map(res => res.json());
  }

  storeAccountData(token, account) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('account', JSON.stringify(account));
    this.authToken = token;
    this.account = account;
  }

  logout() {
    this.authToken = null;
    this.account = null;
    localStorage.clear();
  }

  loadIp() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('account/ip',  { headers: headers })
      .map(res => res.json());
  }

}
