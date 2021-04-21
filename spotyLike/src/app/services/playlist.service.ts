import { Injectable } from '@angular/core';

import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  async getPlaylistUser() {
    const user_data = sessionStorage.getItem('user_data');
    const user_access = sessionStorage.getItem('user_access');

    let token: string;
    let user_id: string;

    user_access != undefined
      ? (token = JSON.parse(user_access).access_token)
      : (token = '');

    user_data != undefined
      ? (user_id = JSON.parse(user_data).id)
      : (user_id = '');

    const url = `https://api.spotify.com/v1/users/${user_id}/playlists`;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };

    return (await axios.get(url, config)).data.items;
  }

  async getRecomendationsUser(type: string) {
    const user_access = sessionStorage.getItem('user_access');

    let token: string;

    user_access != undefined
      ? (token = JSON.parse(user_access).access_token)
      : (token = '');

    const url = `https://api.spotify.com/v1/me/top/${type}`;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };

    return (await axios.get(url, config)).data.items;
  }

  async saveNewTrack(track_id: string) {
    const user_access = sessionStorage.getItem('user_access');

    let token: string;

    user_access != undefined
      ? (token = JSON.parse(user_access).access_token)
      : (token = '');

    const url = `https://api.spotify.com/v1/me/tracks?ids=${track_id}`;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };

    return (await axios({ method: 'put', url, headers: config.headers })).data;
  }

  async getTracksUser() {
    const user_access = sessionStorage.getItem('user_access');

    let token: string;

    user_access != undefined
      ? (token = JSON.parse(user_access).access_token)
      : (token = '');

    const url = `https://api.spotify.com/v1/me/tracks`;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };

    return (await axios.get(url, config)).data.items;
  }

  async removeTrack(track_id: string) {
    const user_access = sessionStorage.getItem('user_access');

    let token: string;

    user_access != undefined
      ? (token = JSON.parse(user_access).access_token)
      : (token = '');

    const url = `https://api.spotify.com/v1/me/tracks?ids=${track_id}`;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };

    return (await axios.delete(url, config)).data;
  }
}
