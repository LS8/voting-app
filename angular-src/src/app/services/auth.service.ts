import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authToken: any;
  account: any;

  constructor(private http: Http) { }

  registerAccount(account) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/account/register', account, { headers: headers })
      .map(res => res.json());
  }

}
