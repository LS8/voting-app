import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
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

  validEmail: boolean;


  constructor(private validateService: ValidateService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

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
  }

}
