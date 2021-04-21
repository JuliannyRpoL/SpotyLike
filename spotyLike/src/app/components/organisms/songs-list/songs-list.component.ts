import { Component, Input, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist.service';

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
    this.playlist = await this._playlistService.getPlaylistUser();
    this.artists = await this._playlistService.getRecomendationsUser('artists');
    this.tracks = await this._playlistService.getRecomendationsUser('tracks');
  }

  async getSonsUser() {}

  ngOnInit(): void {
    this.getPlaylists();
  }
}
