import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  email: string;

  validUsername: boolean;
  validEmail: boolean;


  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private auth: AuthService,
    private router: Router
    ) { }

  ngOnInit() { }

  isValid(value: boolean) {
    if (value == undefined) return;
    return value ? "custom-valid" : "custom-invalid";
  }

  onRegisterSubmit() {
    const account = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.validUsername = undefined;
    this.validEmail = undefined;

    // Required Fields
    if (!this.validateService.validateRegister(account)) {
      this.flashMessage.show('Please fill in all fields', { cssClass: 'alert alert-danger', timeout: 3000 })
      return false;
    }

    // Validate Email
    if (!this.validateService.validateEmail(this.email)) {
      this.validEmail = false;
      this.flashMessage.show('Please use a valid email address', { cssClass: 'alert alert-danger', timeout: 3000 })
      return false;
    }

    // Register User
    this.auth.registerAccount(account).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert alert-success', timeout: 3000 })
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert alert-danger', timeout: 3000 });
        data.status === 2 ? this.validUsername = false : null;
        this.router.navigate(['/register']);
      }
    })

  }

}
