import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
})
export class LogInComponent implements OnInit {
  value: string;

  constructor() {
    this.value = '';
  }

  ngOnInit(): void {}

  showLabel() {
    console.log(this.value);
  }

  getValue(event: any) {
    this.value = event;
  }
}
