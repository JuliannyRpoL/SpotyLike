import { Component, Input, OnInit } from '@angular/core';
import { PlaylistService } from 'src/services/playlist.service';

@Component({
  selector: 'o-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss'],
})
export class SongsListComponent implements OnInit {
  playlist: any;
  artists: any;
  tracks: any;

  constructor(public _playlistService: PlaylistService) {}

  async getPlaylists() {
    try {
      this.playlist = await this._playlistService.getPlaylistUser();
      this.artists = await this._playlistService.getRecomendationsUser(
        'artists'
      );
      this.tracks = await this._playlistService.getRecomendationsUser('tracks');
    } catch (error) {
      console.log(error);
    }
  }

  async getSonsUser() {}

  ngOnInit(): void {
    this.getPlaylists();
  }
}
