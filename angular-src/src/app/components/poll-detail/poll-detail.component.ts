import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PollService } from '../../services/poll.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-poll',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.css']
})
export class PollDetailComponent implements OnInit {
  pollId: string;
  selectedOption;
  pollToDisplay;
  alreadyVoted: boolean;
  user;

  constructor(
    private pollService: PollService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.forEach(urlParameters => {
      this.pollId = urlParameters["id"];
    });
    this.pollService.getIndividualPoll(this.pollId).subscribe(res => {
      this.pollToDisplay = res.poll;
      this.checkAlreadyVoted();
    },
    err => {
      console.log(err);
      return false;
    });
  }

  loadUser(callback) {
    // if user is logged in
    if (localStorage.getItem('account')) {
      this.user = JSON.parse(localStorage.getItem('account')).username;
      return callback();
    } else {
      // get and store ip
      this.authService.loadIp().subscribe(res => {
        this.user = res.ipAddress;
        return callback();
      });
    }
  }

  checkAlreadyVoted() {
    this.loadUser(() => {
      // user hasn't voted yet
      if (this.pollToDisplay.alreadyVoted.indexOf(this.user) === -1) {
        this.alreadyVoted = false;
        return false;
      } else {
        // user has already voted
        this.alreadyVoted = true;
        return true;
      }
    });
    }

  onVoteSubmit() {
    if (this.selectedOption >= 0) {
      // add vote and replace array with itself to force rerender
      this.pollToDisplay.votes[this.selectedOption] += 1;
      this.pollToDisplay.votes = this.pollToDisplay.votes.slice();

      // add the person that voted
      this.pollToDisplay.alreadyVoted.push(this.user);
      this.alreadyVoted = true;

      // sync poll with the poll stored in the db
      this.pollService.syncVote(this.pollToDisplay._id, {updatedPoll: this.pollToDisplay}).subscribe(res => {
        if (res.success) {
          this.flashMessage.show(`Your vote (${this.pollToDisplay.labels[this.selectedOption]}) has been added`, { cssClass: 'alert alert-success', timeout: 3000 });
        }
      });
    } else {
      this.flashMessage.show('Please choose an option', { cssClass: 'alert alert-danger', timeout: 3000 });
      return false;
    }
  }


}
