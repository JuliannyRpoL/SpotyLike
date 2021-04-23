import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { isValidEmail, isValidPassword } from 'src/utils/validationForm';

@Component({
  selector: 'm-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent {
  user: string;
  password: string;
  emailError: string;
  passwordError: string;

  constructor(public _authenticationService: AuthenticationService) {
    this.user = '';
    this.password = '';
    this.emailError = '';
    this.passwordError = '';
  }

  getUserValue(user: string) {
    this.user = user;
  }

  getPasswordValue(password: string) {
    this.password = password;
  }

  async handleSignIn() {
    const isAValidEmail = isValidEmail(this.user);
    const isAValidPassword = isValidPassword(this.password);

    this.emailError = '';
    this.passwordError = '';

    if (isAValidEmail && isAValidPassword) {
      try {
        await this._authenticationService.signInFirebase(
          this.user,
          this.password
        );
        this._authenticationService.redirectLogin();
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          this.passwordError = 'Este email ya está en uso';
        }
      }
    } else {
      if (!isAValidPassword) {
        this.passwordError = 'Ingrese una contraseña válida';
      }
      if (!isAValidEmail) {
        this.emailError = 'Ingrese un email válido';
      }
    }
  }
}
