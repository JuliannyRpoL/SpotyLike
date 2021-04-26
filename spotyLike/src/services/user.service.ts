import { Injectable } from '@angular/core';

import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUserInformation(token: string) {
    const url: string = 'https://api.spotify.com/v1/me';

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };

    axios
      .get(url, config)
      .then((response) => {
        sessionStorage.setItem('user_data', JSON.stringify(response.data));
        window.location.href = '/';
      })
      .catch((err) => {
        return err;
      });
  }
}
