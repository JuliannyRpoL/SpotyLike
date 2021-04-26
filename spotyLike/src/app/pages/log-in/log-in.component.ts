import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
})
export class LogInComponent implements OnInit {
  code: string = '';

  constructor(
    private route: ActivatedRoute,
    public _authService: AuthenticationService,
    public _userService: UserService
  ) {}

  async getToken() {
    try {
      const user_access = await this._authService.logginWithSpotify(this.code);
      sessionStorage.setItem('user_access', JSON.stringify(user_access));
      const token = user_access.access_token;
      this._userService.getUserInformation(token);
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.code = params['code'];
    });

    if (this.code !== undefined) {
      this.getToken();
    }
  }
}
