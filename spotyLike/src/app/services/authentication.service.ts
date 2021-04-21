import { Injectable } from '@angular/core';
import {
  CLIENT_ID,
  REDIRECT_URI,
  CLIENT_SECRET,
} from '../../config/credentials';
import axios from 'axios';
import firebase from '../../config/firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  redirectLogin() {
    let scopes =
      'user-read-private user-read-email playlist-read-private playlist-read-collaborative user-top-read playlist-modify-public playlist-modify-private user-library-read user-library-modify';
    window.location.replace(
      'https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' +
        CLIENT_ID +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' +
        encodeURIComponent(REDIRECT_URI)
    );
  }

  async signInFirebase(email: string, password: string) {
    return await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
  }

  async logInFirebase(email: string, password: string) {
    return await firebase.auth().signInWithEmailAndPassword(email, password);
  }

  async logginWithSpotify(code: string) {
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

    return (await axios.post(url, params, config)).data;
  }

  isLoggedIn(): boolean {
    let user = sessionStorage.getItem('user_access');
    let isLoggedUser: boolean;

    user !== null ? (isLoggedUser = true) : (isLoggedUser = false);

    return isLoggedUser;
  }
}
