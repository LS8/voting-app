import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { PollService } from '../../services/poll.service';

@Component({
  selector: 'app-poll-create',
  templateUrl: './poll-create.component.html',
  styleUrls: ['./poll-create.component.css']
})
export class PollCreateComponent implements OnInit {
  title: string;
  labels: string[] = [""];
  votes: number[] = [0];
  author;
  firstOption;

  constructor(
    private router: Router,
    private pollService: PollService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.author = JSON.parse(localStorage.getItem('account')).username;
  }

  isValid(value: boolean) {
  // //   if (value == undefined) return;
  //   return value ? "custom-valid" : "custom-invalid";
  }

  onPollSubmit() {
    console.log(this.labels);
    console.log('objectsubmit');
    const poll = {
      title: this.title,
      author: this.author,
      labels: this.labels,
      votes: this.votes,
      alreadyVoted: []
    };
    this.pollService.addPoll(poll).subscribe(res => {
      console.log(res);
      if (res.success) {
        this.router.navigate([`/polls/${res.poll._id}`]);
        return;
      } else {
        this.flashMessage.show(res.msg, { cssClass: 'alert alert-danger', timeout: 3000 });
        return;
      }
    });
  }

  trackByIndex(index) {
    return index;
  }

  addOption() {
    if (this.labels.length === 12) {
      this.flashMessage.show('You can only add up to 12 options', { cssClass: 'alert alert-danger', timeout: 3000 });
      return;
    }
    this.labels.push("");
    this.votes.push(0);
  }

}
