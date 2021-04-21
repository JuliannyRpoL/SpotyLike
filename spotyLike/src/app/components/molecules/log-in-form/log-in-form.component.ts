import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { isValidEmail } from 'src/utils/validationForm';

@Component({
  selector: 'm-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss'],
})
export class LogInFormComponent {
  user: string;
  _password: string;
  emailError: string;
  passwordError: string;

  constructor(public _authService: AuthenticationService) {
    this.user = '';
    this._password = '';
    this.emailError = '';
    this.passwordError = '';
  }

  getUserValue(user: string) {
    this.user = user;
  }

  getPasswordValue(password: string) {
    this._password = password;
  }

  async handleLogin() {
    const isAValidEmail = isValidEmail(this.user);

    if (isAValidEmail && this._password) {
      this.emailError = '';
      this.passwordError = '';

      try {
        await this._authService.logInFirebase(this.user, this._password);
        this._authService.redirectLogin();
      } catch (error) {
        if (
          error.code === 'auth/wrong-password' ||
          error.code === 'auth/user-not-found'
        ) {
          this.passwordError = 'Credenciales incorrectas';
        }
      }
    } else {
      if (!this._password) {
        this.passwordError = 'Ingrese una contraseña';
      } else {
        this.passwordError = '';
      }
      if (!isAValidEmail) {
        this.emailError = 'Ingrese un email válido';
      } else {
        this.emailError = '';
      }
    }
  }
}
