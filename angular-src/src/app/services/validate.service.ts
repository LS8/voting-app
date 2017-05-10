import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateLogin (account) {
    if (account.username == undefined || account.password == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateRegister (account) {
    if (account.username == undefined || account.password == undefined || account.email == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail (email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
