import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'm-other-form-access',
  templateUrl: './other-form-access.component.html',
  styleUrls: ['./other-form-access.component.scss'],
})
export class OtherFormAccessComponent {
  constructor(public _authService: AuthenticationService) {}

  handleLoginWithSpotify() {
    this._authService.redirectLogin();
  }
}
