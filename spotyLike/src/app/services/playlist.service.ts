import { Injectable } from '@angular/core';

import axiosInterceptor from '../../config/interceptor';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  async getPlaylistUser() {
    const user_data = sessionStorage.getItem('user_data');

    let user_id: string;

    user_data != undefined
      ? (user_id = JSON.parse(user_data).id)
      : (user_id = '');

    const url = `/users/${user_id}/playlists`;

    return (await axiosInterceptor.get(url)).data.items;
  }

  async getRecomendationsUser(type: string) {
    const url = `/me/top/${type}`;

    return (await axiosInterceptor.get(url)).data.items;
  }

  async saveNewTrack(track_id: string) {
    const url = `/me/tracks?ids=${track_id}`;

    return (await axiosInterceptor({ method: 'put', url })).data;
  }

  async getTracksUser() {
    const url = `/me/tracks`;

    return (await axiosInterceptor.get(url)).data.items;
  }

  async removeTrack(track_id: string) {
    const url = `/me/tracks?ids=${track_id}`;

    return (await axiosInterceptor.delete(url)).data;
  }
}
