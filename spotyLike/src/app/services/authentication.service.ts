import { Injectable } from '@angular/core';
import {
  CLIENT_ID,
  REDIRECT_URI,
  CLIENT_SECRET,
} from '../../config/credentials';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  redirectLogin() {
    let scopes =
      'user-read-private user-read-email playlist-read-private playlist-read-collaborative';
    window.location.replace(
      'https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' +
        CLIENT_ID +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' +
        encodeURIComponent(REDIRECT_URI) +
        '&code=1234567890'
    );
  }

  logginWithSpotify(code: string) {
    const url = 'https://accounts.spotify.com/api/token';

    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', REDIRECT_URI);
    params.append('client_id', CLIENT_ID);
    params.append('client_secret', CLIENT_SECRET);

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    axios
      .post(url, params, config)
      .then((result) => {
        localStorage.setItem('user-access', JSON.stringify(result.data));
        window.location.href = '/';
      })
      .catch((err) => {
        console.log(err);
      });
  }

  isLoggedIn(): boolean {
    let user = localStorage.getItem('user-access');
    let isLoggedUser: boolean;

    user !== null ? (isLoggedUser = true) : (isLoggedUser = false);

    return isLoggedUser;
  }
}
