import { Component, Input, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  selector: 'o-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss'],
})
export class SongsListComponent implements OnInit {
  artists: any;
  tracks: any;

  constructor(public playlist: PlaylistService) {}

  async getPlaylists() {
    //this.artists = await this.playlist.getPlaylistUser();
    this.artists = await this.playlist.getRecomendationsUser('artists');
    this.tracks = await this.playlist.getRecomendationsUser('tracks');
  }

  async getSonsUser() {}

  ngOnInit(): void {
    this.getPlaylists();
  }
}
