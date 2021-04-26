import { Component, Input, OnInit } from '@angular/core';
import { PlaylistService } from 'src/services/playlist.service';

@Component({
  selector: 'o-favorites-songs',
  templateUrl: './favorites-songs.component.html',
  styleUrls: ['./favorites-songs.component.scss'],
})
export class FavoritesSongsComponent implements OnInit {
  favorites_songs: any;

  @Input() user: any;

  constructor(public playlist: PlaylistService) {}

  async getFavoritesSongs() {
    try {
      this.favorites_songs = await this.playlist.getTracksUser();
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.getFavoritesSongs();
  }
}
