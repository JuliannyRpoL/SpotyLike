import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'm-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent {
  user: string;
  _password: string;

  constructor(public _authenticationService: AuthenticationService) {
    this.user = '';
    this._password = '';
  }

  getUserValue(user: string) {
    this.user = user;
  }

  getPasswordValue(password: string) {
    this._password = password;
  }

  async handleSignIn() {
    try {
      await this._authenticationService.signInFirebase(
        this.user,
        this._password
      );
      this._authenticationService.redirectLogin();
    } catch (error) {
      console.log(error);
    }
  }
}
