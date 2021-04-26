import { Component } from '@angular/core';
import { LOGIN } from 'src/app/router/routes';

@Component({
  selector: 'm-log-in-button',
  templateUrl: './log-in-button.component.html',
  styleUrls: ['./log-in-button.component.scss'],
})
export class LogInButtonComponent {
  constructor() {}

  redirectToLogIn() {
    window.location.href = LOGIN;
  }
}
