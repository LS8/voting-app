import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll-create',
  templateUrl: './poll-create.component.html',
  styleUrls: ['./poll-create.component.css']
})
export class PollCreateComponent implements OnInit {
  pollTitle: string;
  options: string[] = [""];
  firstOption;

  constructor() { }

  ngOnInit() {
  }

  isValid(value: boolean) {
    if (value == undefined) return;
    return value ? "custom-valid" : "custom-invalid";
  }

  onPollSubmit() {
    console.log(this.options);
    // console.log('poll submitted');
    // console.log(this.firstOption);
  }

  trackByIndex(index) {
    return index;
  }

  addOption() {
    this.options.push("");
  }

}
