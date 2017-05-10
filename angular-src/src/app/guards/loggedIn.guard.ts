import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    if(!this.auth.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['profile']);
      return false;
    }
  }
}