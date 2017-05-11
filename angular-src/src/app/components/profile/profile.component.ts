import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  polls: any;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.getProfile().subscribe(profile => {
        this.polls = profile.polls;
        console.log(this.polls);
    },
    err => {
      console.log(err);
      return false;
    });
  }

}
