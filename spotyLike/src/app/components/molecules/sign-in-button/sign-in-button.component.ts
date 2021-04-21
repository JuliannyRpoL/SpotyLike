import { Component } from '@angular/core';
import { SIGNIN } from 'src/app/router/routes';

@Component({
  selector: 'm-sign-in-button',
  templateUrl: './sign-in-button.component.html',
  styleUrls: ['./sign-in-button.component.scss'],
})
export class SignInButtonComponent {
  constructor() {}

  redirectToSignIn() {
    window.location.href = SIGNIN;
  }
}
