import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { PollService } from '../../services/poll.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  constructor(private pollService: PollService, private location: Location) { }

  ngOnInit() {
    console.log(this.location.path());
    // this.pollService.getIndividualPoll()
  }

}
