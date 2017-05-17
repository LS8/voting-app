import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PollService } from '../../services/poll.service';

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
    private location: Location,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.forEach(urlParameters => {
      this.pollId = urlParameters["id"];
    });
    this.pollService.getIndividualPoll(this.pollId).subscribe(res => {
      this.pollToDisplay = res.poll;
      console.log(this.pollToDisplay);
    },
    err => {
      console.log(err);
      return false;
    });
  }

  onVoteSubmit() {
    console.log('submitted boy');
    console.log(this.selectedOption);
  }

}
