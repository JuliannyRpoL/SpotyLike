import { Injectable } from '@angular/core';

import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  async getPlaylistUser(user: any) {
    const url = `https://api.spotify.com/v1/users/${user.id}/playlists`;

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
        return response.data;
      })
      .catch((err) => {
        return err;
      });
  }
}
