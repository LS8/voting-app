import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PollService } from '../../services/poll.service';
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

  constructor(
    private pollService: PollService,
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
    },
    err => {
      console.log(err);
      return false;
    });
  }

  onVoteSubmit() {
    if (this.selectedOption >= 0) {
      this.pollToDisplay.votes[this.selectedOption] += 1;
      this.pollToDisplay.votes = this.pollToDisplay.votes.slice();
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
