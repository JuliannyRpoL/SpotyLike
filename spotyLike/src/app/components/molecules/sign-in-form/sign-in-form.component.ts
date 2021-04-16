import { Component } from '@angular/core';

@Component({
  selector: 'm-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent {
  user: string;
  _password: string;

  constructor() {
    this.user = '';
    this._password = '';
  }

  getUserValue(user: string) {
    this.user = user;
  }

  getPasswordValue(password: string) {
    this._password = password;
  }

  handleSignIn() {
    console.log(this.user, this._password);
  }
}
