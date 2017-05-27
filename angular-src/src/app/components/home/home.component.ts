import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PollService } from '../../services/poll.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  polls: object[];

  constructor(
    private pollService: PollService,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pollService.getAllPolls().subscribe(res => {
      this.polls = res.polls;
    });
  }

  goToDetailPage(clickedPoll) {
    this.router.navigate(['polls', clickedPoll._id]);
  }

}
