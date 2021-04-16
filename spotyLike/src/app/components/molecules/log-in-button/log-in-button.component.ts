import { Component } from '@angular/core';

@Component({
  selector: 'm-log-in-button',
  templateUrl: './log-in-button.component.html',
  styleUrls: ['./log-in-button.component.scss'],
})
export class LogInButtonComponent {
  constructor() {}

  redirectToLogIn() {
    window.location.href = '/login';
  }
}
