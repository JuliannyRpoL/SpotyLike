import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
})
export class LogInComponent implements OnInit {
  code: string = '';

  constructor(
    private route: ActivatedRoute,
    public _authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.code = params['code'];
    });

    if (this.code != undefined) {
      this._authService.logginWithSpotify(this.code);
    }
  }
}
