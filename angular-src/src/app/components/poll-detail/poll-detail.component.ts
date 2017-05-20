import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PollService } from '../../services/poll.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {MaterializeDirective,MaterializeAction} from "angular2-materialize";

// TO-DO :
//         - add new options to poll if logged in
//         - delete poll if author

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
  userIsAuthenticated: boolean = false;
  userIsAuthor: boolean = false;
  addModalActions = new EventEmitter<string | MaterializeAction>();
  deleteModalActions = new EventEmitter<string | MaterializeAction>();
  globalActions = new EventEmitter<string | MaterializeAction>();
  params = [];
  newOption: string;

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
      this.userIsAuthenticated = true;
      if (this.user === this.pollToDisplay.author) {
        this.userIsAuthor = true;
      }
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
      if (this.pollToDisplay.alreadyVoted.indexOf(this.user) === -1
        // for dev purposes only
        || this.user === 'admin') { 

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

  onOptionSubmit() {
    if (this.newOption) {
      // add vote & label and replace arrays with themselves to force rerender
      this.pollToDisplay.labels.push(this.newOption);
      this.pollToDisplay.votes.push(0);
      // DOESNT RERENDER CORRECTLY IN THE SELECT DROP DOWN ATM!!!
      this.pollToDisplay.labels = this.pollToDisplay.labels.slice();
      this.pollToDisplay.votes = this.pollToDisplay.votes.slice();


      // sync poll with the poll stored in the db
      this.pollService.syncVote(this.pollToDisplay._id, {updatedPoll: this.pollToDisplay}).subscribe(res => {
        if (res.success) {
          this.flashMessage.show(`The option "${this.newOption}" has been added`, { cssClass: 'alert alert-success', timeout: 3000 });
          // reset the new option field
          this.newOption = "";
          // this.router.navigate([`/polls/${this.pollToDisplay._id}`]);
        }
      });
    } else {
      this.flashMessage.show('Please enter something', { cssClass: 'alert alert-danger', timeout: 3000 });
      return false;
    }
  }

  deletePoll() {
    this.pollService.deletePoll(this.pollToDisplay._id).subscribe(res => {
      if (res.success) {
        this.flashMessage.show(`Your poll "${this.pollToDisplay.title}" has been deleted`, { cssClass: 'alert alert-success', timeout: 3000 });
        this.router.navigate(["/profile"]);
      } else {
        this.flashMessage.show('Something went wrong while deleteing your poll', { cssClass: 'alert alert-danger', timeout: 3000 });
        return false;
      }
    });
  }

  openAddModal() {
    this.addModalActions.emit({ action: "modal", params: ['open'] });
  }
  closeAddModal() {
    this.addModalActions.emit({ action: "modal", params: ['close'] });
  }

  openDeleteModal() {
    this.deleteModalActions.emit({ action: "modal", params: ['open'] });
  }
  closeDeleteModal() {
    this.deleteModalActions.emit({ action: "modal", params: ['close'] });
  }

}
