import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-poll-create-button',
  templateUrl: './poll-create-button.component.html',
  styleUrls: ['./poll-create-button.component.css']
})
export class PollCreateButtonComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
