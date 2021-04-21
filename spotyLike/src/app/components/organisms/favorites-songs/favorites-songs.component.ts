import { Component, Input, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist.service';

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
    this.favorites_songs = await this.playlist.getTracksUser();
  }

  ngOnInit(): void {
    this.getFavoritesSongs();
  }
}
