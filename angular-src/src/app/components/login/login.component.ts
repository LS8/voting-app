import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  validUsername: boolean;
  validPassword: boolean;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  isValid(value: boolean) {
    if (value == undefined) return;
    return value ? "custom-valid" : "custom-invalid";
  }

  onLoginSubmit() {
    const account = {
      username: this.username,
      password: this.password
    };

    this.validPassword = undefined;
    this.validUsername = undefined;

    // Required Fields
    if (!this.validateService.validateLogin(account)) {
      this.flashMessage.show('Please fill in all fields', { cssClass: 'alert alert-danger', timeout: 3000 })
      return false;
    }

    this.auth.authenticateAccount(account).subscribe(data => {
      if (data.success && data.status === 0) {
        this.flashMessage.show('You are now logged in', { cssClass: 'alert alert-success', timeout: 3000 })
        this.auth.storeAccountData(data.token, data.account);
        this.router.navigate(['/']);
      } else if (data.status === 2) {
        this.flashMessage.show('Wrong username', { cssClass: 'alert alert-danger', timeout: 3000 });
        this.validUsername = false;
        this.router.navigate(['/login']);
      } else if (data.status === 1) {
        this.flashMessage.show('Wrong password', { cssClass: 'alert alert-danger', timeout: 3000 });
        this.validPassword = false;
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert alert-danger', timeout: 3000 });
        this.router.navigate(['/login']);
      }
    });
  }

}
