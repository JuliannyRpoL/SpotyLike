import { Injectable } from '@angular/core';

import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUserInformation() {
    const url: string = 'https://api.spotify.com/v1/me';
    const user_access = localStorage.getItem('user-access');

    let token: string;

    user_access != undefined
      ? (token = JSON.parse(user_access).access_token)
      : (token = '');

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };

    axios
      .get(url, config)
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((err) => {
        return err;
      });
  }
}
