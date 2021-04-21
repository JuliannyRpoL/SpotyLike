import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'm-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss'],
})
export class LogInFormComponent {
  user: string;
  _password: string;

  constructor(public _authService: AuthenticationService) {
    this.user = '';
    this._password = '';
  }

  getUserValue(user: string) {
    this.user = user;
  }

  getPasswordValue(password: string) {
    this._password = password;
  }

  handleLogin() {
    this._authService.logInFirebase(this.user, this._password);
  }
}
